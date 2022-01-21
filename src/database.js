import mongoose from "mongoose";

const ConectarBD = async() => {
    return await mongoose.connect(process.env.CONECTART_BD, {
            useNewUrlParser: true,


        })
        .then(() => {
            console.log("Conexión exitosa a la base de datos")
        }).catch((e) => {
            console.log("Error al conectar a la base de datos", e)
        })
}

export default ConectarBD;