import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll();
  res.json({
    usuarios,
  });
};

export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);

  if (usuario) {
    res.json({ usuario });
  } else {
    res.status(404).json({
      msg: `No existe un usuario con el id ${id}`,
    });
  }
};

export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const existeEmail = await Usuario.findOne({
      where: {
        email: body.email,
      },
    });
    if (existeEmail) {
      return res.status(400).json({
        msg: "Ya existe un usuario con el email " + body.email,
      });
    }

    // TODO: ver porque esta fallando eso
    // const usuario = new Usuario(body);
    // await usuario.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error inteno en la aplicacion",
      body,
    });
  }
};

export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({
        msg: "No esxiste un usuario con el id " + id,
      });
    }

    await usuario.update(body);
    await usuario.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error inteno en la aplicacion",
      body,
    });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);

  if (!usuario) {
    return res.status(404).json({
      msg: 'No existe el usuario con el id ' + id,
    });
  }

  // Asi elimino fisicamente el registro en la base de datos
  // await usuario.destroy();

  await usuario.update({ estado: false });
  res.json(usuario);
};
