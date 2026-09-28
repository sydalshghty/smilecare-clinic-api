const mongoose = require("mongoose");

const dbconnection = () => {
    mongoose.connect(process.env.DB_URI)
        .then((conn) => {
            console.log('Database is connected mongodb successfully')
        })
        .catch((error) => {
            console.error("Error Connect Database", error.message);
        })
}
module.exports = dbconnection;