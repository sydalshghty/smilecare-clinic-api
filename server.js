const express = require('express');
const app = express();

//amount middlware
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config({ path: 'config.env' });

//connect mongoose_DB
const dns = require('dns');
dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
]);

//connection database
const dbconnection = require('./confic/db-connection');
dbconnection();


//route api
const routerOrders = require('./route-api/orders-route');
const routerMessages = require('./route-api/messages-route');
app.use('/api/v1/orders', routerOrders);
app.use('/api/v1/messages', routerMessages);

//global error handling
app.use((err, req, res, next) => {
    res.status(400).json({ 'error': err.message })
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})