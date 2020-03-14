var diegoApi = 'https://api.github.com/users/Diego-Lopes-Ferreira';

/*
axios.get(diegoApi)
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
*/



function checaIdade(idade) {
  return new Promise(function (resolve, reject) {
    if (idade >= 18) {
      resolve(resolve);
    } else {
      reject(reject);
    }
  })
}
setTimeout(() => {
  checaIdade(20)
    .then(function () {
      console.log("Maior que 18");
    })
    .catch(function () {
      console.log("Menor que 18");
    });
}, 2000);
