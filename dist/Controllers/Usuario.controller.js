"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUsers = exports.loginUser = exports.createUser = void 0;
const Usuario_model_1 = require("../Models/Usuario.model");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, contrasena, correo } = req.body;
        const user = yield Usuario_model_1.User.createUser(nombre, contrasena, correo);
        res.status(201).json(user);
    }
    catch (error) {
        console.log('error creando Usuario', error);
        res.status(500).json({ message: 'Hubo un error al crear Usuario', error });
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contrasena, correo } = req.body;
        const user = yield Usuario_model_1.User.loginUser(contrasena, correo);
        res.status(201).json(user);
    }
    catch (error) {
        console.log('error con el login', error);
        res.status(500).json({ message: 'Usuario inexistente', error });
    }
});
exports.loginUser = loginUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield Usuario_model_1.User.getUsers();
        res.status(200).json(users);
    }
    catch (error) {
        console.log('error buscando Usuarios', error);
        res.status(500).send({ message: 'Hubo un error al buscar Usuario', error });
    }
});
exports.getUsers = getUsers;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, contrasena, correo } = req.body;
        const { id } = req.params;
        const userId = parseInt(id, 10);
        const user = yield Usuario_model_1.User.updateUser(userId, nombre, contrasena, correo);
        res.status(201).json(user);
    }
    catch (error) {
        console.log('error actualizando Usuario', error);
        res.status(500).json({ message: 'Hubo un error al actualizar Usuario', error });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userId = parseInt(id, 10);
        const user = yield Usuario_model_1.User.deleteUser(userId);
        res.status(201).json(user);
    }
    catch (error) {
        console.log('error eliminando Usuario', error);
        res.status(500).json({ message: 'Hubo un error al eliminar Usuario', error });
    }
});
exports.deleteUser = deleteUser;
