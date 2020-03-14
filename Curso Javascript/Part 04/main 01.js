var xhr = new XMLHttpRequest();
var diegoApi = 'https://api.github.com/users/Diego-Lopes-Ferreira'
xhr.open('GET', diegoApi);
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}