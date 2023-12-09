const baseurl = 'https://api.currencyapi.com/v3';
const apikey = 'cur_live_LwCv2iAiygqLQVcVJlD79CGDbvfid78i4GrOgZui';

const routes = {
  convert: (from, to) => `${baseurl}/latest?apikey=${apikey}&base_currency=${from}&currencies=${to}`,
  getList: () => `${baseurl}/latest?apikey=${apikey}&base_currency=RUB&currencies=USD,EUR,TRY,ARS,BYN`,
  getData: () => '/api/v1/data',
};

export default routes;
