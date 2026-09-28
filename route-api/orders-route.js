const express = require('express');
const routerOrders = express.Router();
const { createOrder, getAllOrders, getOrder, updateOrder, deleteOrder } = require('../services/orders-service');

routerOrders.post('/add-new-order', createOrder);
routerOrders.get('/get-all-orders', getAllOrders);
routerOrders.get('/get-order/:id', getOrder);
routerOrders.put('/update-order/:id', updateOrder);
routerOrders.delete('/delete-order/:id', deleteOrder);

module.exports = routerOrders;