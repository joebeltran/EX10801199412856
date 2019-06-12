var express = require('express');
var router = express.Router();

var recetasRoutes= require('./recetas');

router.use{'/recetas',recetasRoutes};


module.exports = router