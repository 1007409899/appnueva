import { model, Schema } from 'mongoose';
const userSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    apellido: {
        type: String,
        required: true,
        unique: true
    },
    identificacion: {
        type: Number,
        required: true,
        unique: true
    },
    correo: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },

}, {
    timestamps: true,
    versionKey: false
});


const Modelouser = model("usuario", userSchema);



export default Modelouser;