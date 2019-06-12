var express = require('express');
var router = express.Router();

var uuid = require('uuid/v4');

var recetasCollection=[];
var recetasStruct ={
    "id":"uuid",
    "receta":"",
    "precio":0,
    "tipo":"",
    "observacion":"",
    "estado":""
}

recetasCollection.push{
    Object.assign(
        {},
        recetasStruct,
        {
            id:uuid(),
            receta:'ChesseCake',
            precio:'400',
            tipo:'postre',
            observacion:'alto en calorias',
            estado:'existente'
        }

    )
};

router.get('/',(req,res,next)=>{
    res.status(200).json(recetasCollection);    
});

module.exports = router;