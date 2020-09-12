"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PetController_1 = __importDefault(require("./controllers/PetController"));
var routes = express_1.Router();
var petController = new PetController_1.default();
routes.get('/pets', petController.index);
routes.post('/pets', petController.create);
routes.put('/pets/:id', petController.update);
routes.delete('/pets/:id', petController.delete);
exports.default = routes;
