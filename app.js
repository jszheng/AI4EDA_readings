/**
 * AI for EDA - 主逻辑（iframe 版）
 * 负责：侧边栏渲染、内容加载（iframe，兼容 file:// 协议）、hash 路由
 */
(function () {
  'use strict';

  /* ==================== 工具 ==================== */
  function $(sel)  { return document.querySelector(sel); }
  function $$(sel) { return document.querySelectorAll(sel); }

  /* ==================== 全局状态 ==================== */
  var currentView   = 'byDate';   // 'byDate' | 'byCategory'
  var activeItem    = null;      // 当前高亮的侧边栏项 data-key
  var manifest      = null;
  var contentFrame = null;   // iframe 引用
  var contentArea  = null;   // #content-area div

  /* ==================== 初始化 ==================== */
  function init() {
    manifest = window.SITE_MANIFEST;
    if (!manifest) { console.error('manifest.js 未加载'); return; }

    contentFrame = document.getElementById('content-frame');
    contentArea  = document.getElementById('content-area');

    /* file:// 协议提示 */
    if (window.location.protocol === 'file:') {
      var notice = document.createElement('div');
      notice.style.cssText = 'background:#fff3cd;color:#856404;padding:10px 20px;font-size:0.82rem;text-align:center;line-height:1.8;';
      notice.innerHTML = '⚠️ 当前通过 file:// 协议打开，Chrome 动态加载内容可能受限。'
        + '请双击 <b>start-node.bat</b> 启动本地服务器，然后访问 '
        + '<a href="http://localhost:8000/index_new.html" target="_blank" style="color:#533f03;">http://localhost:8000/index_new.html</a>';
      document.body.prepend(notice);
    }

    populateStats();
    renderSidebar();
    bindEvents();
    handleHash();          // 根据 URL hash 加载初始内容
  }

  /* ==================== 填充 Header 统计 ==================== */
  function populateStats() {
    var s = manifest.stats;
    setText('#stat-papers', s.papers);
    setText('#stat-batches', s.batches);
    setText('#stat-news', s.news);
    setText('#stat-update', '最后更新：' + s.lastUpdate);
  }
  function setText(sel, val) {
    var el = $(sel); if (el) el.textContent = val;
  }

  /* ==================== 渲染侧边栏 ==================== */
  function renderSidebar() {
    var nav = $('#sidebar-nav');
    if (!nav) return;
    nav.innerHTML = '';

    if (currentView === 'byDate') {
      buildDateView(nav);
    } else {
      buildCategoryView(nav);
    }
    highlightActive();
  }

  /* ---- 按日期视图 ---- */
  function buildDateView(nav) {
    /* 日期列表：只显示有论文的日期，不加括号和数字 */
    if (manifest.dates && manifest.dates.length) {
      manifest.dates.forEach(function (item) {
        if (item.count > 0) {
          addNavItem(nav, item.file, item.date, item.date);
        }
      });
    }
  }

  /* ---- 按分类视图 ---- */
  function buildCategoryView(nav) {
    var cats = manifest.categories;
    if (!cats) return;

    /* 论文分类 */
    if (cats.papers && cats.papers.length) {
      cats.papers.forEach(function (cat) {
        addNavItem(nav, cat.file, cat.icon + ' ' + cat.title, cat.key);
      });
    }

    /* 行业动态 */
    if (cats.news) addCatItem(nav, cats.news, 'news');

    /* 其他 */
    if (cats.timeline)   addCatItem(nav, cats.timeline,  'timeline');
    if (cats.opensource) addCatItem(nav, cats.opensource,'opensource');
    if (cats.tracking)   addCatItem(nav, cats.tracking,  'tracking');
  }

  function addCatItem(nav, cat, key) {
    if (!cat) return;
    addNavItem(nav, cat.file, cat.title || cat.icon || key, key);
  }

  /* ---- 侧边栏辅助 ---- */
  function addGroupLabel(nav, text) {
    var div = document.createElement('div');
    div.className = 'nav-group-label';
    div.textContent = text;
    nav.appendChild(div);
  }

  function addNavItem(nav, fileOrHash, label, key) {
    var div = document.createElement('div');
    div.className = 'nav-item';
    div.setAttribute('data-key', key || '');
    div.setAttribute('data-file', fileOrHash || '');
    div.innerHTML = '<span class="nav-icon"></span>' + escapeHtml(label);
    div.addEventListener('click', function () {
      var f = this.getAttribute('data-file');
      if (!f) return;
      if (f.charAt(0) === '#') {
        /* 分类子菜单：滚动到对应锚点 */
        var el = document.querySelector(f);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      navigateTo(f);
    });
    nav.appendChild(div);
  }

  function highlightActive() {
    $$('.nav-item').forEach(function (el) { el.classList.remove('active'); });
    if (activeItem) {
      var el = document.querySelector('[data-key="' + activeItem + '"]');
      if (el) el.classList.add('active');
    }
  }

  /* ==================== 内容加载（iframe 方式）==================== */
  function navigateTo(file) {
    loadContent(file);
    /* 更新 URL hash（不刷新） */
    window.location.hash = '#' + file;
  }

  function loadContent(file) {
    if (!contentFrame || !contentArea) return;
    console.log('[loadContent]', file);

    /* 显示 iframe，隐藏提示文字 */
    contentArea.style.display = 'none';
    contentFrame.style.display = 'block';

    /* 设置 iframe 的 src，浏览器会自动加载 */
    contentFrame.src = file;

    /* iframe 加载完毕后高亮对应侧边栏项并自适应高度 */
    contentFrame.onload = function () {
      console.log('[iframe onload]', file);
      updateActiveByFile(file);
      resizeIframe();
    };
  }

  function updateActiveByFile(file) {
    if (!file) return;
    var navItems = document.querySelectorAll('.nav-item');
    var found = null;
    for (var i = 0; i < navItems.length; i++) {
      if (navItems[i].getAttribute('data-file') === file) {
        found = navItems[i].getAttribute('data-key');
        break;
      }
    }
    if (found) {
      activeItem = found;
      highlightActive();
    }
  }

  /* ==================== iframe 自适应高度 ==================== */
  function resizeIframe() {
    if (!contentFrame) return;
    try {
      var doc = contentFrame.contentDocument || contentFrame.contentWindow.document;
      if (doc && doc.body) {
        var height = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight, 600);
        contentFrame.style.height = height + 'px';
      }
    } catch (e) {
      /* 跨域时无法访问，使用默认高度 */
      contentFrame.style.height = '80vh';
    }
  }

  /* ==================== Hash 路由 ==================== */
  function handleHash() {
    var hash = window.location.hash.replace('#', '');
    if (hash) {
      /* 检查 hash 是否是已知文件 */
      if (hash.indexOf('.html') !== -1 || hash.indexOf('content/') !== -1) {
        loadContent(hash);
        return;
      }
    }
    /* 默认加载最新一条 */
    if (manifest.latest && manifest.latest.length) {
      loadContent(manifest.latest[0].file);
    }
  }

  /* ==================== 事件绑定 ==================== */
  function bindEvents() {
    /* 侧边栏视图切换 */
    var tabs = $$('.sidebar-tab');
    for (var i = 0; i < tabs.length; i++) {
      (function (tab) {
        tab.addEventListener('click', function () {
          $$('.sidebar-tab').forEach(function (t) { t.classList.remove('active'); });
          tab.classList.add('active');
          currentView = tab.getAttribute('data-view');
          renderSidebar();
        });
      })(tabs[i]);
    }

    /* Hash 变化 */
    window.addEventListener('hashchange', handleHash);
  }

  /* ==================== HTML 转义 ==================== */
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  /* ==================== 启动 ==================== */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
