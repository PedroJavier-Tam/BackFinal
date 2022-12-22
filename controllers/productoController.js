const producto = require("../models/producto");

exports.leerProductoHome = async (req, res) => {
    try {
        const producto1 = await producto.find();
        res.json({ producto1 });
    } catch (error) {
        console.log(error);
    }


}


exports.leerProducto = async (req, res) => {
    const { id } = req.params;
    const producto1 = await producto.find().where("categoriaId").equals(id);
    res.json(producto1);
}
exports.crearProducto = async (req, res) => {

    try {
        const producto1 = new producto(req.body);
        producto1.save();
        res.json(producto1);
    } catch (error) {
        console.log(error);
    }
}


exports.crearProducto = async (req, res) => {

    try {
        const producto1 = new producto(req.body);
        producto1.save();
        res.json(producto1);
    } catch (error) {
        console.log(error);
    }
}

exports.leerProductoId = async (req, res) => {
    const { id } = req.params
    try {
        const producto1 = await producto.findById(id);
        res.json({ producto1 });
    } catch (error) {
        console.log(error);
    }


}






exports.actualizarProducto = async (req, res) => {
    const { id } = req.params;
    const producto = await producto.findByid.toString(id);

    if (!producto) {
        return res.status(400).json({ mensaje: "producto no encontrado" });
    }
    if (producto.creador.toString() !== req.usuario.id.toString()) {
        return res.status(400).json({ mensaje: "Accion no valida para este usurario" });
    }
    producto.nombre = req.body.nombre || producto.nombre;
    producto.descripcion = req.body.descripcion || producto.descripcion;
    producto.stock = req.body.stock || producto.stock;
    producto.precio = req.body.stock || producto.stock;
    producto.imagen = req.body.stock || producto.stock;
    producto.save();

}
exports.borrarProducto = async (req, res) => {
    try {
        await producto.deleteOne({ _id: req.params.id });
        res.json({ mensaje: "Producto eliminado" })
    } catch (error) {
        console.log(error);
    }
}