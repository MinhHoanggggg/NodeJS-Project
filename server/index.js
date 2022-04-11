require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
const KhRouter = require('./routes/Kh')


const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gateway-gym-mern.fwker.mongodb.net/gateway-gym-mern?retryWrites=true&w=majority`, {
            useNewUrlParser: true,

            useUnifiedTopology: true
        })
        console.log('Mongo DB conected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)

    }


}

connectDB()
const corsOptions = {
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const app = express()
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.get('/cors', (req, res) => {
//     res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.send({ "msg": "This has CORS enabled 🎈" })
// })



app.use('/api/auth', cors(), authRouter)
app.use('/api/posts', cors(), postRouter)
app.use('/api/KH', cors(), KhRouter)

// app.get('/test', cors(), (req, res) => {
//     res.send('test ok');
// })

// // app.post('/test', cors(), (req, res) => {
// //     const { username, password } = req.body; 
// //     console.log(req.body);
// //     res.send({
// //         username, password
// //     });
// })

const PORT = 5000

app.listen(PORT, () => console.log("server chay tren cong:" + PORT)) 