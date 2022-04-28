const express = require('express');
const bodyParse = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors');


dotenv.config();



const app = express();

app.use(express.json());
app.use(cors())


const IngredientRouter = require('./Routes/Ingredient')
const OrderRouter = require('./Routes/Order')
const UserRouter = require('./Routes/User')

app.use('/ingredients', IngredientRouter)
app.use('/orders', OrderRouter)
app.use('/users', UserRouter)


const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
    console.log("app is running on ", PORT)
})


