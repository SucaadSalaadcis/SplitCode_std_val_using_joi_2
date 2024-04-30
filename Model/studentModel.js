const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    gender: {
        type: String,
    },
    email: {
        type: String,
        require: true
    },
    status: {
        type: String,
        enum: ["active","blocked"], // 2bdan wx aheyn lama ogolo
    }

},{timestamps: true})

module.exports = mongoose.model("student",studentSchema);