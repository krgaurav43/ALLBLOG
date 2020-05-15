"use strict";
let mongoose = require ("mongoose");
let contactForm = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    contact: Number,
    remarks: String
});
module.exports=mongoose.model('Contact',contactForm);