/**
 * File Name: Assingment 1 Portfolio
 * Name: Bhavyadeep Jagani
 * Student ID: 301234500
 * Date: 26 Feb 2023
 * 
 * Code Taken from
  Professor Blessing Ajiboye, COMP229 Web Application and Development
 */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a reference to the db Schema which is the model
let Contact = require('../models/contacts');

//we want to display the ContactList
module.exports.displayContactList = (req, res, next) => {

    //displaying alphabetically sorted list of contacts using sort() method. 
    Contact.find().sort({name: 'asc'}).exec((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('contacts/list', { title: 'List of Business Contacts', ContactList: contactList,displayName:req.user?req.user.displayName:'' });
            
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contactList');
        }
    });
}