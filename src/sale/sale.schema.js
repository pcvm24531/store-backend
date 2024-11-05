'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Importamos schemas involucrados en la vent
const Client = require('../client/client.schema');
const User = require('../user/user.schema');
const Product = require('../product/product.schema');

const saleSchema = (
    {
        client: { 
            type: Schema.Types.ObjectId, 
            ref: 'Client', 
            required:true 
        },
        seller: { 
            type: Schema.Types.ObjectId, 
            ref: 'User', 
            required:true 
        },
        products: [
            {
                product:{type: Schema.Types.ObjectId, ref: 'Product', required: true},
                quantity:{ type: Number, required: true},
                unitPrice:{ type: Number, required: true}
            }
        ],
        totalAmount: {
            type: Number,
            required: true
        },
        paymentMethod:{
            type: String,
            enum:['efectivo','tarjeta','transferencia'],
            requred: true,
        },
        status:{
            type: String,
            enum:['completada','pendiente','cancelada'],
            required: true
        }
    }
);

module.exports = {
    saleSchema
};

//Ejmplo de consumo del método
/*saleSchema.find()
    .populate('client')
    .populate('seller')
    .populate('products.product')
    .exec( (err, sales)=>{
        if(err) console.log(err);
        else console.log(sales);        
    } );*/