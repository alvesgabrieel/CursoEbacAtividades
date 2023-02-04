document.addEventListener('DOMContentLoaded', function() {

    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const repositoriesElement = document.querySelector('#repository');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link') ;
    const endpoint = `https://api.github.com/users/alvesgabrieel`;

    fetch(endpoint)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json) {
        nameElement.innerText = json.name;        
        usernameElement.innerText = '@' + json.login;
        avatarElement.src = json.avatar_url;
        repositoriesElement.innerText =  json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url; 
    })
    .catch(function(erro) {
        alert('ocorreu um erro');
    })    
})