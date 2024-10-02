import { User } from '../Models/Usuario.model';
import  { Request, Response } from 'express';


    
export const createUser = async (req: Request, res: Response) => {
    try {
        const { nombre, contrasena, correo } = req.body;
        const user = await User.createUser(nombre, contrasena, correo);
        res.status(201).json(user); 
    } catch (error: any) {
        console.log('error creando Usuario', error);
        res.status(500).json({ message: 'Hubo un error al crear Usuario', error });
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const {contrasena, correo } = req.body;
        const user = await User.loginUser(contrasena, correo);
        res.status(201).json(user); 
    } catch (error: any) {
        console.log('error con el login', error);
        res.status(500).json({ message: 'Usuario inexistente', error });
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.getUsers();
        res.status(200).json(users);
    } catch (error: any) {
        console.log('error buscando Usuarios', error);
        res.status(500).send({ message: 'Hubo un error al buscar Usuario', error });
    }
};


export const updateUser = async (req: Request, res: Response) => {
    try {
        const {nombre, contrasena, correo } = req.body;
        const { id } = req.params; 
        const userId = parseInt(id, 10); 
        const user = await User.updateUser(userId, nombre, contrasena, correo);
        res.status(201).json(user); 
    } catch (error: any) {
        console.log('error actualizando Usuario', error);
        res.status(500).json({ message: 'Hubo un error al actualizar Usuario', error });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params; 
        const userId = parseInt(id, 10); 
        const user = await User.deleteUser(userId);
        res.status(201).json(user); 
    } catch (error: any) {
        console.log('error eliminando Usuario', error);
        res.status(500).json({ message: 'Hubo un error al eliminar Usuario', error });
    }
}



