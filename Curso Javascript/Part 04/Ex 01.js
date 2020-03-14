var diegoApi = 'https://api.github.com/users/Diego-Lopes-Ferreira';

axios.get(diegoApi)
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
