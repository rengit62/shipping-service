var axios = require('axios')

module.exports = {
  getProductWeight: async function (productId) {
    console.log("Ciao sono nel metodo getProductWeight di productService");
    let URL = process.env.MICROS_PRODUCTS_URL || 'product-service-java.eu-gb.mybluemix.net/products';
    console.log('URL : ' + URL);
    console.log('productId : ' + productId);
    return axios
      .get(`https://${URL}/${productId}`)
      .then(response => {
        if (response.data && !Number.isNaN(parseFloat(response.data.weightLB))) {
          return response.data.weightLB
        } else {
          return Promise.reject('Invalid response object')
        }
      })
      .catch((err) => {
        throw new Error(err)
      })
  }
}