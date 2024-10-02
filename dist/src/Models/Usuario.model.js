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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const __1 = __importDefault(require("../"));
class User {
    static createUser(nombre, contrasena, correo) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield __1.default.rpc('create_user', { p_nombre: nombre, p_contrasena: contrasena, p_correo: correo });
            if (error)
                throw error;
            return data;
        });
    }
    static getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield __1.default.rpc('read_users');
            if (error)
                throw error;
            return data;
        });
    }
    static updateUser(id, nombre, contrasena, correo) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield __1.default.rpc('update_user', { p_id: id, p_nombre: nombre, p_contrasena: contrasena, p_correo: correo });
            if (error)
                throw error;
            return data;
        });
    }
    static deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield __1.default.rpc('delete_user', { p_id: id });
            if (error)
                throw error;
            return data;
        });
    }
    static loginUser(contrasena, correo) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield __1.default.rpc('login_user', { p_contrasena: contrasena, p_correo: correo });
            if (error)
                throw error;
            return data;
        });
    }
}
exports.User = User;
