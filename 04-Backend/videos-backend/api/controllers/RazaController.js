/**
 * RazaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  helloWorld: (request, response) => {
    return response.ok('Ok');
  },
  buscarPorNombre: async (req, res) => {
    const params = req.allParams();

    var nombreCac = await Raza.find({
      nombre: { startsWith: params.nombre }
    });
    return res.ok(nombreCac);
  }
};
