const ordersModel = require('../models/orders');
//const slugify = require('slugify');
/*create new order*/
//desc: add new order
//route: POST
//access: Public
const createOrder = async (req, res) => {
    const { slug } = req.body;

    try {
        const newOrder = await ordersModel.create({
            ...req.body
        })
        res.status(200).json({ 'order': newOrder })
    }
    catch (error) {
        res.status(400).json({ 'error': error.message })
    }
}

/*get all orders*/
//desc: get all orders
//route: GET
//access: Private
const getAllOrders = async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    const skip = (page - 1) * limit;

    try {
        const orders = await ordersModel.find({}).skip(skip).limit(limit);
        res.status(200).json({ "results": orders.length, "orders": orders })
    }
    catch (error) {
        res.status(400).json({ "error": error.message })
    }

}

/*get specfic order*/
//desc: get specific order only by id
//route: GET
//access: Private
const getOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await ordersModel.findById(id);
        res.status(200).json({ "order": order })
    }
    catch (error) {
        res.status(400).json({ "error": error.message })
    }
}


/*update order*/
//desc: update order by id
//route: PUT
//access: Public 
const updateOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await ordersModel.findByIdAndUpdate({ "_id": id }, { ...req.body }, { new: true })
        res.status(200).json({ "order": order })
    }
    catch (error) {
        res.status(400).json({ "error": error.message })
    }
}


/*delete order by id*/
//desc: delete order by id
//route: DELETE
//access: Private
const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await ordersModel.findByIdAndDelete({ "_id": id });
        res.status(200).json({ "msg": "order is deleted successfully" })
    }
    catch (error) {
        res.status(400).json({ "error": error.message })
    }

}


module.exports = {
    createOrder,
    getAllOrders,
    getOrder,
    updateOrder,
    deleteOrder
}