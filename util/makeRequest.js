const axios = require('axios');

function makeRequest(language) {
  return axios.get(`https://api.github.com/search/repositories?q=language:${language}`).then(res => {
    const repos = res.data.items;
    let output = repos.map(item => {
      return {
        id: item.id,
        name: item.name,
        owner: item.owner.login,
        url: item.owner.url
      };
    });
    return output;
  });
}

module.exports = makeRequest;
