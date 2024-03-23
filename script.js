document.addEventListener("DOMContentLoaded", () => {
    const articles = [
        {
            title: "Article Title 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Article Title 2",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: "Article Title 3",
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
    ];

    const blogPostsSection = document.querySelector(".blog-posts");

    const renderArticles = (articles) => {
        blogPostsSection.innerHTML = "";

        articles.forEach(article => {
            const articleElement = `
                <article>
                    <h3>${article.title}</h3>
                    <p>${article.content}</p>
                    <a href="#" class="read-more">Read More</a>
                </article>
            `;

            blogPostsSection.innerHTML += articleElement;
        });
    };

    renderArticles(articles);

    const addArticleButton = document.getElementById("add-article");

    addArticleButton.addEventListener("click", () => {
        const newArticle = {
            title: `New Article Title ${articles.length + 1}`,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        };

        articles.push(newArticle);
        renderArticles(articles);
    });
});
