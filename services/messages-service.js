const messagesModel = require('../models/messages');

/*create new message*/
//desc: send new message
//access: Public
//route: POST
const createMessage = async (req, res) => {
    try {
        const newMessage = await messagesModel.create({
            ...req.body
        })
        res.status(200).json({ "message": newMessage })
    }
    catch (error) {
        res.status(400).json({ "error": error.message })
    }
}


/*get all messages*/
//desc: get all messages
//access: Private
//route: GET
const getAllMessages = async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    const skip = (page - 1) * limit;

    try {
        const allMessages = await messagesModel.find({}).skip(skip).limit(limit);
        res.status(200).json({ "results": allMessages.length, "messages": allMessages })
    }
    catch (error) {
        res.status(400).json({ "error": error.message })
    }
}


/*get specific message*/
//desc: get specific message by id
//access: Private
//route: GET
const getMessage = async (req, res) => {
    const { id } = req.params;

    try {
        const message = await messagesModel.findById(id);
        res.status(200).json({ "message": message })
    }
    catch (error) {
        res.status(400).json({ "error": error.message })
    }
}

/*update message*/
//desc: update message by id
//access: Private
//route: PUT
const updateMessage = async (req, res) => {
    const { id } = req.params;
    try {
        const message = await messagesModel.findByIdAndUpdate({ "_id": id }, { ...req.body }, { new: true })
        res.status(200).json({ "message": message })
    }
    catch (error) {
        res.status(400).json({ "error": error.message })
    }
}

/*delete message*/
//desc: delete message
//access: Private
//route: DELETE
const deleteMessage = async (req, res) => {
    const { id } = req.params;
    try {
        const message = await messagesModel.findByIdAndDelete(id);
        res.status(200).json({ "msg": "message is deleted successfully" })
    }
    catch (error) {
        res.status(400).json({ "error": error.message })
    }
}


module.exports = {
    createMessage,
    getAllMessages,
    getMessage,
    updateMessage,
    deleteMessage
};
