const router = require('express').Router()
const userController = require('../controllers/userController')
const productController = require('../controllers/productController')
const { authentication, authorization } = require('../middlewares/middleware')

router.post('/register', userController.registerHandler)
router.post('/login', userController.loginHandler)
router.get('/product', productController.listHandler)
router.use(authentication)
router.get('/cart', productController.showCart)
router.post('/cart/:id', productController.addToCart)
router.delete('/cart/:id', productController.deleteCart)
router.post('/product', authorization, productController.addHandler)
router.put('/product/:id', authorization, productController.putHandler)
router.delete('/product/:id', authorization, productController.deleteHandler)

module.exports = router