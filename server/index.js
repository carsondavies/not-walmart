const express = require('express')
const app = express()
const productCtrl = require('./controllers/productsController')
const cartCtrl = require('./controllers/cartController')

const SERVER_PORT = 3002

app.use(express.json())

app.get('/api/products', productCtrl.getAllProducts)

app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart', cartCtrl.addToCart)
app.put('/api/cart/:cart_id', cartCtrl.changeQuantity)
app.delete('/api/cart/:cart_id', cartCtrl.removeFromCart)
app.delete('/api/cart', cartCtrl.checkout)


app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
