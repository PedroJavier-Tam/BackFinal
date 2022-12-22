const { Router, request } = require("express");
const jwt = require("jsonwebtoken");
const usuario = require("../models/usuario");

module.exports= function (req, res, next) {
    //leer el token desde el header de postman
    const token = req.header ("x-auth-token");
    //console.log(token);

    //revisar si hay token o no 

    if (!token) {
        return res.status(400).json({msj:"no hay token"});
    }

    //validar el token

    try {
        const cifrado = jwt.verify(token, process.env.SECRETA)
        request.usuario = cifrado.usuario;
        //console.log(cifrado.usuario);
        next ();
    } catch (error) {
        res.status(400).json({msj:"Token No Valido"})
    }
}

