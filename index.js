const express = require('express')
const app = express()
const cors = require('cors')
const { pool } = require('./config')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

const controlPurchaseStatus = require('./server/data/purchaseStatusData')
app
    .route('/purchaseStatus')
    .get(controlPurchaseStatus.getPurchaseStatus)
    .post(controlPurchaseStatus.addPurchaseStatus)
    .put(controlPurchaseStatus.updatePurchaseStatus)
app
    .route('/purchaseStatus/:id_status')
    .get(controlPurchaseStatus.getPurchaseStatusById)
    .delete(controlPurchaseStatus.deletePurchaseStatus)

const controlPurchase = require('./server/data/purchaseData')
app
    .route('/purchase')
    .get(controlPurchase.getPurchase)
    .post(controlPurchase.addPurchase)
    .put(controlPurchase.updatePurchase)
app
    .route('/purchase/:id_order')
    .get(controlPurchase.getPurchaseById)
    .delete(controlPurchase.deletePurchase)

const controlProduct = require('./server/data/productData')
app
    .route('/product')
    .get(controlProduct.getProduct)
    .post(controlProduct.addProduct)
    .put(controlProduct.updateProduct)
app
    .route('/product/:id_product')
    .get(controlProduct.getProductById)
    .delete(controlProduct.deleteProduct)

const controlCategory = require('./server/data/categoryData')
app
    .route('/category')
    .get(controlCategory.getCategory)
    .post(controlCategory.addCategory)
    .put(controlCategory.updateCategory)
app
    .route('/category/:id_category')
    .get(controlCategory.getCategoryById)
    .delete(controlCategory.deleteCategory)

const controlAddress = require('./server/data/addressData')
app
    .route('/address')
    .get(controlAddress.getAddress)
    .post(controlAddress.addAddress)
    .put(controlAddress.updateAddress)
app
    .route('/address/:id_address')
    .get(controlAddress.getAddressById)
    .delete(controlAddress.deleteAddress)

const controlCustomer = require('./server/data/customerData')
app
    .route('/customer')
    .get(controlCustomer.getCustomer)
    .post(controlCustomer.addCustomer)
    .put(controlCustomer.updateCustomer)
app
    .route('/customer/:id_customer')
    .get(controlCustomer.getCustomerById)
    .delete(controlCustomer.deleteCustomer)

const controlProductImage = require('./server/data/productImageData')
app
    .route('/productImage')
    .get(controlProductImage.getProductImage)
    .post(controlProductImage.addProductImage)
    .put(controlProductImage.updateProductImage)
app
    .route('/productImage/:id_productImage')
    .get(controlProductImage.getProductImageById)
    .delete(controlProductImage.deleteProductImage)
    
const controlSize = require('./server/data/sizeData')
app
    .route('/sizes')
    .get(controlSize.getSize)
    .post(controlSize.addSize)
    .put(controlSize.updateSize)
app
    .route('/sizes/:id_size')
    .get(controlSize.getSizeById)
    .delete(controlSize.deleteSize)




app.listen(process.env.PORT || 3002, () => {
    console.log('Servidor rodando na porta 3002')
})