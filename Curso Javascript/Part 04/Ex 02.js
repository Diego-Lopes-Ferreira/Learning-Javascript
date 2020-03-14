var entry = document.querySelector('#app input');
var coluna = document.querySelector('#app ul');
var search = document.querySelector('#app button');

function github(nome) {
  // https://api.github.com/users/<NOME>/repos
  site = 'https://api.github.com/users/' + nome + '/repos';
  return site;
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
}

search.onclick = function () {
  coluna.innerHTML = '';
  var user = document.createElement('h2');
  var textUser = document.createTextNode('"' + entry.value + '" repositorios:');
  user.appendChild(textUser)
  coluna.appendChild(user);
  req();
  entry.value = '';
}

async function req() {
  const repos = await geto() || [];
  console.log(repos);
  printRepos(repos);
};

entry.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    search.click();
  };
});
