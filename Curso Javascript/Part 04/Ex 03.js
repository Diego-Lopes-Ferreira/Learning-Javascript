var entry = document.querySelector('#app input');
var coluna = document.querySelector('#app ul');
var search = document.querySelector('#app button');
var divi = document.querySelector('#divi');

function github(nome) {
  // https://api.github.com/users/<NOME>/repos
  var site = 'https://api.github.com/users/' + nome + '/repos';
  return site;
}

function githubURL(nome) {
  // https://api.github.com/users/<NOME>/repos
  var url = 'https://github.com/' + nome;
  return url;
}

async function geto() {
  return axios.get(github(entry.value))
}

function printRepos(repos) {
  for (repo of repos['data']) {
    var rep = document.createElement('li');
    var content = document.createTextNode(repo['name']);
    rep.appendChild(content);
    coluna.appendChild(rep);
  }
  divi.innerHTML = '';
  var linkEl = document.createElement('a');
  linkEl.setAttribute('href', githubURL(entry.value));
  linkEl.innerHTML = githubURL(entry.value);
  divi.appendChild(linkEl);
  entry.value = '';
}

search.onclick = function () {
  coluna.innerHTML = '';
  var user = document.createElement('h2');
  var textUser = document.createTextNode('"' + entry.value + '" repositorios:');
  user.appendChild(textUser)
  coluna.appendChild(user);
  req();
  
}

async function req() {
  showSpinner();
  const repos = await geto() || [];
  console.log(repos);
  printRepos(repos);
  hideSpinner();
};

function showSpinner() {
  document.getElementById('loader').style.display = 'block';
};

function hideSpinner() {
  document.getElementById('loader').style.display = 'none';
};

entry.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    search.click();
  };
});
