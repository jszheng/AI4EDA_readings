/**
 * toggle.js - 折叠/展开功能 + hash 分类过滤
 * 供 iframe 加载的内容片段使用
 */
(function () {
  /* ========== 折叠功能 ========== */
  window.toggleDate = function (el) {
    var group = el.closest('.date-group');
    if (!group) return;
    var body = group.querySelector('.date-body');
    if (!body) return;
    body.classList.toggle('collapsed');
    var tog = group.querySelector('.toggle');
    if (tog) tog.textContent = body.classList.contains('collapsed') ? '▶' : '▼';
  };

  window.toggleGroup = function (id) {
    var body = document.getElementById(id);
    if (!body) return;
    body.classList.toggle('collapsed');
    var tog = document.querySelector('[onclick*="toggleGroup(\'' + id + '\')"] .toggle');
    if (tog) tog.textContent = body.classList.contains('collapsed') ? '▶' : '▼';
  };

  /* ========== Hash 分类过滤 ========== */
  function applyCategoryFilter() {
    var hash = window.location.hash.replace('#', '');
    if (!hash) return;

    var catMap = {
      'cat-rtl':      'RTL生成',
      'cat-verify':    '功能验证',
      'cat-physical':  '物理设计',
      'cat-analog':    '模拟EDA',
      'cat-agent':     'Agent',
      'cat-industry':  '行业应用'
    };

    var catName = catMap[hash];
    if (!catName) return;

    var dateGroups = document.querySelectorAll('.date-group');
    var totalVisible = 0;

    dateGroups.forEach(function (group) {
      var papers = group.querySelectorAll('.paper-table tr');
      if (papers.length === 0) return;

      var groupHasVisible = false;
      papers.forEach(function (row) {
        var tag = row.querySelector('.tag');
        if (tag && tag.textContent.trim() === catName) {
          row.style.display = '';
          groupHasVisible = true;
          totalVisible++;
        } else {
          row.style.display = 'none';
        }
      });

      /* 如果该日期下没有匹配的论文，隐藏整个日期组 */
      if (!groupHasVisible) {
        group.style.display = 'none';
      } else {
        group.style.display = '';
      }
    });

    /* 显示过滤提示 */
    var existing = document.getElementById('filter-indicator');
    if (existing) existing.remove();

    if (totalVisible > 0) {
      var indicator = document.createElement('div');
      indicator.id = 'filter-indicator';
      indicator.style.cssText = 'background:#e8f5e9;color:#2e7d32;padding:10px 18px;margin-bottom:18px;border-radius:8px;font-size:0.85rem;border-left:4px solid #4caf50;';
      indicator.innerHTML = '🔍 <strong>分类过滤：' + catName + '</strong>&nbsp;（' + totalVisible + ' 篇论文）&nbsp;<a href="#" onclick="clearFilter();return false;" style="color:#1565c0;text-decoration:underline;font-size:0.8rem;">清除过滤</a>';
      var section = document.querySelector('.section-title');
      if (section && section.nextSibling) {
        section.parentNode.insertBefore(indicator, section.nextSibling);
      } else {
        document.body.insertBefore(indicator, document.body.firstChild);
      }
    }
  }

  window.clearFilter = function () {
    var dateGroups = document.querySelectorAll('.date-group');
    dateGroups.forEach(function (group) {
      group.style.display = '';
      var papers = group.querySelectorAll('.paper-table tr');
      papers.forEach(function (row) { row.style.display = ''; });
    });
    var indicator = document.getElementById('filter-indicator');
    if (indicator) indicator.remove();
    window.location.hash = '';
  };

  /* 页面加载时应用过滤 */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyCategoryFilter);
  } else {
    applyCategoryFilter();
  }

  /* hash 变化时重新过滤 */
  window.addEventListener('hashchange', applyCategoryFilter);
})();
