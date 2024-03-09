// this file is responsible for displaying the details of a single news article
document.addEventListener('DOMContentLoaded', function () {
    fetchNews();
});

function fetchNews() {
    const apiKey = '3b31afa67cde49b19f7ebcbbc3b9e3fc';
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data);
            displayNews(data.articles);
        })
        .catch(error => console.error('Error fetching news:', error));
}

function displayNews(articles) {
    const newsList = document.getElementById('news-list');
    articles.forEach(article => {
        const articleElement = document.createElement('article');
        const encodedUrl = encodeURIComponent(article.url);
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="#detail?id=${encodedUrl}" onclick="loadDetailPage()">Read More</a>
        `;
        newsList.appendChild(articleElement);
    });
}

function loadDetailPage() {
}