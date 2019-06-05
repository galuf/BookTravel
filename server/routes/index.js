const { Router } = require('express');
const api = Router();
//import activities from './activities'


//sare la ruta user
api.use('/user', require('./user'))
api.use('/login', require('./user/login'))
api.use('/categoria',require('./categoria/categoria')) 
api.use('/producto',require('./producto/producto'))
//router.use('/activities', activities)

module.exports = api;