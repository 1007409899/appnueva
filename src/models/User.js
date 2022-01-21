import { model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
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

userSchema.statics.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

}
const appmodel = model("usuario", userSchema);

export { appmodel }