const baseurl = 'https://v6.exchangerate-api.com/v6';
const apikey = '30390484a612c0ce10b14701';

const routes = {
  convert: (from) => `${baseurl}/${apikey}/latest/${from}`,
  getList: () => `${baseurl}/${apikey}/latest/RUB`,
  getData: () => '/api/v1/data',
};

export default routes;
