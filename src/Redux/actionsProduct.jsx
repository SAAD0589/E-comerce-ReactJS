import * as type from './typeProduct'

export  function addProduct(myProduct) {
  return ({
    type:"ADD_PRODUCT",
    payload:myProduct
  })
}
export  function removeProduct() {
    return ({
      type:type.REMOVE_Product
    })
  }
