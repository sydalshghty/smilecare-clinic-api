const express = require('express');
const { createMessage, getAllMessages, getMessage, updateMessage, deleteMessage } = require('../services/messages-service');
const routerMessages = express.Router();

routerMessages.post('/add-new-message', createMessage);
routerMessages.get('/get-all-messages', getAllMessages);
routerMessages.get('/get-message/:id', getMessage);
routerMessages.put('/update-message/:id', updateMessage);
routerMessages.delete('/delete-message/:id', deleteMessage);

module.exports = routerMessages;