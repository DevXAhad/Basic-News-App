// this file is responsible for displaying the details of a single news article
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const newsUrl = decodeURIComponent(urlParams.get('id'));

    if (newsUrl) {
        fetchNewsDetail(newsUrl);
    } else {
        console.error('Invalid news URL.');
    }
});

function fetchNewsDetail(newsUrl) {
    fetch(newsUrl)
        .then(response => response.json())
        .then(data => displayNewsDetail(data))
        .catch(error => console.error('Error fetching news detail:', error));
}

function displayNewsDetail(article) {
    const newsDetail = document.getElementById('news-detail');
    const articleElement = document.createElement('article');
    articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.content}</p>
        <a href="${article.url}" target="_blank">Read Full Article</a>
    `;
    newsDetail.appendChild(articleElement);
}