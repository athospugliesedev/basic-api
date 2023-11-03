"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controller/UserController");
const schoolController_1 = require("../controller/schoolController");
const router = express_1.default.Router();
router.get('/user/:id', UserController_1.getById);
router.post('/user', UserController_1.createUser);
router.put('/user/:id', UserController_1.updateUser);
router.delete('/user/:id', UserController_1.deleteUser);
router.post('/school', schoolController_1.createSchool);
exports.default = router;
