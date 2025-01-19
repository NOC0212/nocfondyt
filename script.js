document.getElementById('blogForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    // 創建新文章
    const article = document.createElement('article');
    article.className = 'post';
    article.innerHTML = `
        <h3>${title}</h3>
        <div class="post-meta">
            <span class="author">作者：訪客</span>
            <span class="date">發布日期：${new Date().toLocaleDateString()}</span>
        </div>
        <div class="post-content">
            <p>${content}</p>
        </div>
        <div class="comments">
            <h4>評論</h4>
            <form class="comment-form">
                <textarea placeholder="寫下你的評論..." required></textarea>
                <button type="submit">送出評論</button>
            </form>
        </div>
    `;

    // 將新文章加入到文章列表的開頭
    const blogPosts = document.querySelector('.blog-posts');
    blogPosts.insertBefore(article, blogPosts.children[1]);

    // 清空表單
    e.target.reset();
});

// 處理評論提交
document.addEventListener('submit', function(e) {
    if (e.target.classList.contains('comment-form')) {
        e.preventDefault();
        const commentText = e.target.querySelector('textarea').value;
        
        // 創建新評論
        const comment = document.createElement('div');
        comment.className = 'comment';
        comment.innerHTML = `
            <p><strong>訪客</strong> 於 ${new Date().toLocaleDateString()} 說：</p>
            <p>${commentText}</p>
        `;

        // 將評論加入到評論區
        e.target.parentNode.appendChild(comment);
        
        // 清空評論表單
        e.target.reset();
    }
});