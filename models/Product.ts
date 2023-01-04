import mongoose, { Model, Schema, model } from 'mongoose';
import { IProduct } from '../interfaces';

const ProductSchema = new Schema({
    description: {type: String, require: true},
    images: [{type: String}],
    inStock: {type: Number, require: true, default: 0},
    price: {type: String, require: true, default: 0},
    sizes: [{
        type: String,
        enum:[ 'XS','S','M','L','XL','XXL','XXXL'],
        message: '{VALUE} no es un tamaño permitido'
    }],
    slug: {type: String, require: true, unique: true},
    tags: [{type: String}],
    title: {type: String, require: true},
    type: {
        type: String,
        enum:[ 'shirts','pants','hoodies','hats'],
        message: '{VALUE} no es un tipo permitido'
    },
    gender: {
        type: String,
        enum: ['men','women','kid','unisex'],
        message: '{VALUE} no es permitido'
    },
    
},{
    timestamps: true
});

//TODO: Crear indice de Mongo
ProductSchema.index({title:'text', tags:'text'})
const Product:Model<IProduct> = mongoose.models.Product || model('Product', ProductSchema);
export default Product;