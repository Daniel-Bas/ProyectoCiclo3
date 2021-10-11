import mongoose from "mongoose";
const scheme=Mongoose.scheme;

const precioscheme=new scheme({
    producto:{type:string, required:[true, 'obligatorio']},
    descripcion:string,
    precio:{type:Int, required:[true, 'Obligatorio']},

});

//onvertir a modelo
const precio=Mongoose.model('precio',precioscheme);
export default cuenta;