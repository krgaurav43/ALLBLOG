const Contact = require('./connection')
exports.addContactInfo = function(fname,lname,email,contact,remarks){
    let ContactSchema = new Contact({
        fname: fname,
        lname: lname,
        email: email,
        contact: contact,
        remarks: remarks
    });
    return ContactSchema.save()
    .then(function(response){
        console.log(response);
        return response;
    })
}

exports.getContactInfo = function(){
    return Contact.find()}
    .then(function(response){
        console.log(response);
        return response;
    }