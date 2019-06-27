
var ShippingController = require('../src/controllers/shipping-controller')

describe('Shipping controller', function () {
  
    var shippingCtrl = new ShippingController()

  it('Should calculate correct shipping ', async function () {
    let shipping = await shippingCtrl.getItemShipping({ id: 1, type: 'standard' })
    expect(shipping).toBe(0.5)
  })

})