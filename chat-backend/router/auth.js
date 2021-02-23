const {login, register} = require('../controllers/authController')
const router = require('express').Router();
const {validate} = require('../validators/index');
const {rules:registrationRules} = require('../validators/auth/register');
const {rules:loginRules} = require('../validators/auth/login');
module.exports = router

router.post(`/login`,[loginRules, validate], login)

router.post(`/register`, [registrationRules, validate] ,register)


