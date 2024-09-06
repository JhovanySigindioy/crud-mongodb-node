import { Mode } from "fs";
import moongose, { Document, model, Model, Schema } from "mongoose";

interface IProduct extends Document {
    name: string;
    price: number;
    inStock: boolean;
}

const schemaProduct: Schema = new Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
        min: 0,
    },
    inStock: {
        type: Boolean,
        require: true,
    }
});

const modelProduct: Model<IProduct> = moongose.model<IProduct>("Product", schemaProduct);

//export default modelProduct;

/////////////Ejercicio 2: Schemas 


interface IProduct2 extends Document {
    name: string;
    price: number;
    inStock: Boolean;
}

const schemaProduct2: Schema = new Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 50,
    },
    price: {
        type: Number,
        require: true,
        min: 0,
        get: (v: number) => Math.round(v),
    },
    inStock: {
        type: Boolean,
        require: true,
        default: false,
    }
});

const modelProduct2: Model<IProduct2> = moongose.model<IProduct2>("Product", schemaProduct2);

//export default modelProduct2;

///////////////Ejercicio 3: Schemas
interface IAddress extends Document {
    street: string,
    city: string,
    zipCode: string,
}

interface ICustomer extends Document {
    name: string;
    addresses: IAddress;
}


const schemaAddress: Schema = new Schema({
    street: {
        type: String,
        require: true,
        minlength: 1,
    },
    city: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 50,
    },
    zipCode: {
        type: String,
        require: true,
    }
});

const schemaCustomer: Schema = new Schema({
    name: {
        type: String,
        require: true,
    },
    addresses: schemaAddress
    
});

const modelAddress: Model<ICustomer> = moongose.model<ICustomer>("Address", schemaCustomer);

export default modelAddress;










