// 全局变量存储搜索结果
let currentResults = [];
let currentIndex = -1;

// 主搜索函数
function performSearch() {
  const keyword = document.getElementById('dynamicSearchInput').value.trim().toLowerCase();
  
  // 清除旧高亮
  clearHighlights();
  
  if (!keyword) {
    document.getElementById('searchNav').style.display = 'none';
    return;
  }

  // 查找所有可能包含网站名的卡片（根据实际结构调整选择器）
  const cards = document.querySelectorAll('.xe-widget.xe-conversations');
  currentResults = [];
  
  cards.forEach((card, index) => {
    const nameElement = card.querySelector('.xe-user-name strong');
    if (nameElement && nameElement.textContent.toLowerCase().includes(keyword)) {
      card.dataset.searchIndex = index; // 标记索引
      currentResults.push(card);
    }
  });

  // 显示导航按钮
  const nav = document.getElementById('searchNav');
  if (currentResults.length > 0) {
    nav.style.display = 'flex';
    document.getElementById('resultCounter').textContent = 
      `1/${currentResults.length}`;
    highlightResult(0); // 默认高亮第一个
  } else {
    nav.style.display = 'none';
    alert('未找到匹配结果');
  }
}

// 结果导航
function navigateResults(step) {
  if (currentResults.length === 0) return;
  
  let newIndex = currentIndex + step;
  if (newIndex < 0) newIndex = currentResults.length - 1;
  if (newIndex >= currentResults.length) newIndex = 0;
  
  highlightResult(newIndex);
}

// 高亮指定结果
function highlightResult(index) {
  clearHighlights();
  
  currentIndex = index;
  const target = currentResults[index];
  
  // 添加高亮样式
  target.style.boxShadow = '0 0 0 3px rgba(66, 133, 244, 0.5)';
  target.style.transition = 'box-shadow 0.3s';
  
  // 更新计数器
  document.getElementById('resultCounter').textContent = 
    `${index + 1}/${currentResults.length}`;
  
  // 滚动到目标
  setTimeout(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

// 清除所有高亮
function clearHighlights() {
  document.querySelectorAll('.xe-widget.xe-conversations').forEach(card => {
    card.style.boxShadow = '';
    card.style.transition = '';
  });
}

// 悬浮窗拖动效果（可选）
let isDragging = false;
let offsetX, offsetY;
const floatingSearch = document.getElementById('floatingSearch');

floatingSearch.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - floatingSearch.getBoundingClientRect().left;
  offsetY = e.clientY - floatingSearch.getBoundingClientRect().top;
  floatingSearch.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  floatingSearch.style.left = `${e.clientX - offsetX}px`;
  floatingSearch.style.top = `${e.clientY - offsetY}px`;
  floatingSearch.style.right = 'auto';
  floatingSearch.style.bottom = 'auto';
  floatingSearch.style.transform = 'none';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  floatingSearch.style.cursor = 'default';
});

// 回车键搜索
document.getElementById('dynamicSearchInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') performSearch();
});