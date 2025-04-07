document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const suggestionsContainer = document.getElementById('suggestions');
    
    // 示例建议数据 - 实际应用中可以从服务器获取
    const sampleSuggestions = [
        "最新产品发布",
        "2023年度报告",
        "用户指南",
        "常见问题解答",
        "联系我们"
    ];
    
    // 修改4: 添加百度搜索建议API调用(可选)
    function fetchBaiduSuggestions(query) {
        if (query.length === 0) return Promise.resolve([]);
        
        return fetch(`https://suggestion.baidu.com/su?wd=${encodeURIComponent(query)}&p=3&cb=window.baidu.sug`)
            .then(response => response.text())
            .then(text => {
                // 处理百度返回的JSONP数据
                const match = text.match(/window\.baidu\.sug\(({.+})\)/);
                if (match) {
                    const data = JSON.parse(match[1]);
                    return data.s || [];
                }
                return [];
            })
            .catch(() => []);
    }
    
    // 输入事件处理
    searchInput.addEventListener('input', async function() {
        const inputValue = this.value.trim().toLowerCase();
        suggestionsContainer.innerHTML = '';
        
        if (inputValue.length > 0) {
            // 修改5: 可以同时使用本地建议和百度建议
            const localFiltered = sampleSuggestions.filter(item => 
                item.toLowerCase().includes(inputValue)
            );
            
            // 获取百度建议(可选)
            const baiduSuggestions = await fetchBaiduSuggestions(inputValue);
            
            // 合并建议
            const allSuggestions = [...new Set([...localFiltered, ...baiduSuggestions])];
            
            if (allSuggestions.length > 0) {
                allSuggestions.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'search-suggestion';
                    div.textContent = item;
                    div.addEventListener('click', function() {
                        searchInput.value = item;
                        document.getElementById('search-form').submit();
                    });
                    suggestionsContainer.appendChild(div);
                });
                suggestionsContainer.style.display = 'block';
            } else {
                suggestionsContainer.style.display = 'none';
            }
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });
    
    // 点击页面其他区域关闭建议
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            suggestionsContainer.style.display = 'none';
        }
    });
});