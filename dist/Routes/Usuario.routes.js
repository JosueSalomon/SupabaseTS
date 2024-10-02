"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Usuario_controller_1 = require("../Controllers/Usuario.controller");
const router = express_1.default.Router();
router.post('/new', Usuario_controller_1.createUser);
router.get('/', Usuario_controller_1.getUsers);
router.put('/update/:id', Usuario_controller_1.updateUser);
router.delete('/delete/:id', Usuario_controller_1.deleteUser);
router.get('/login', Usuario_controller_1.loginUser);
exports.default = router;
