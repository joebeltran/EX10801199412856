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

router.post('/',(req,res,next)=>{
    var newRecetas= Object.assign(
        {}
        recetasStruct,
        {id:uuid()},
        req.body
    );
    recetasCollection.push(newRecetas);
    res.status(200).json(newRecetas);
});


router.put('/',(req,res,next)=>{
    var id= req.params.id;
    var modifiedReceta ={};
    var originalReceta ={};
    recetasCollection=recetasCollection.map(e, i)=>{
        if(e.id === id){
            originalReceta = Object.assign({}, e);
            return modifiedReceta = Object.assign({},e, req.body);
        }
        return e;
    };
    res.status(200).json({o: originalReceta, m: modifiedReceta});
});


module.exports = router;