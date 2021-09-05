/** packages */
const mongoose = require("mongoose");

/**Schema creation */
const productSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
    },
    price: {
        type: "Number",
        required: true,
    },
    existence: {
        type: "Number",
        required: true,
    },
    calification: {
        type: "Number",
        required: true,
    },
    category: {
        type: "String",
        required: true,
    },
    mark: {
        type: "String",
        required: true,
    },
    discount: {
        type: "Boolean",
        required: true,
    }
});

/**Schema exportation */
module.exports = productSchema;