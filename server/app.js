const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const path = require('path')
const authRoutes = require('./routes/auth')
const itemRoutes = require('./routes/items')
const fileRoutes = require('./routes/files')
const userRoutes = require('./routes/users')
const cartRoutes = require('./routes/cart')
const latestRoutes = require('./routes/latest')
const orderRoutes = require('./routes/order')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'uploads')));


app.use('/auth', authRoutes);
app.use('/file', fileRoutes)
app.use('/item', itemRoutes)
app.use('/user', userRoutes)
app.use('/cart', cartRoutes)
app.use('/latest', latestRoutes)
app.use('/order', orderRoutes)

app.use("/",(req,res)=>{
    res.send("welcome to book api");
})

module.exports = app;