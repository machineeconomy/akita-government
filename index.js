var paymentModule = require('iota-payment')
var app = require('express')()
var cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

app.use(cors())

var options = {
    mount: '/payments',
    value: 10,
    websockets: true
    // ...
}

let server = paymentModule.createServer(app, options)


//Create an event handler which is called, when a payment was successfull
var onPaymentSuccess = function (payment) {
    console.log('onPaymentSuccess::', payment)
}

paymentModule.on('payoutSent', onPaymentSuccess);

// Start server with iota-payment module on '/custom'
server.listen(5000, function () {
    console.log(`Server started on http://localhost:5000 `)
})

