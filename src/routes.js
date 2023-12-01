const baseurl = 'https://api.currencyapi.com/v3';
const apikey = 'cur_live_ngEetV7Eygn9f93d6fxTTSMDU9q2YCP1AGbvXYWu';

const routes = {
  login: (from, to) => `${baseurl}/latest?apikey=${apikey}&base_currency=${from}&currencies=${to},RUB,TRY`,
  getList: () => `${baseurl}/latest?apikey=${apikey}&base_currency=RUB&currencies=USD,EUR,TRY,ARS,BYN`,
  getData: () => '/api/v1/data',
};

export default routes;
