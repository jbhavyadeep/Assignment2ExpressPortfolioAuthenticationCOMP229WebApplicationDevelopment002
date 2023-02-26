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
let passport = require('passport');
//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if (!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}
//connect to our contacts model
let Book = require('../models/contacts');
let contactController = require('../controllers/contacts');
//GET ROUTE for the contact list page -READ OPERATION
router.get('/', contactController.displayContactList);

/*GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth,contactController.performDelete);

module.exports = router;