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
  },
  login: async (req, res) => {
    const params = req.allParams();

    var usuarioLogeado = await Raza.find({
      username: params.username,
      password: params.password
    });
    if (usuarioLogeado) {
      return res.ok(usuarioLogeado);
    } else {
      return res.badRequest({ mensaje: 'Usuarui invalido' });
    }
  }
};
