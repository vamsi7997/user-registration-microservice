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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const autoservices_1 = require("./autoservices");
const database_service_1 = require("./database.service");
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
let jsonParser = body_parser_1.default.json();
let port = process.env.PORT;
const app = (0, express_1.default)();
app.listen(port);
app.post("/create", jsonParser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log(req.body, "request1111");
    let newuser = {
        name: req.body.name, age: (_a = req.body) === null || _a === void 0 ? void 0 : _a.age, email: req.body.email, mobilenumber: req.body.mobilenumber, aadhar: req.body.aadhar,
        userId: (0, autoservices_1.createUserId)(req.body.name)
    };
    try {
        let r = yield (0, database_service_1.addUserToDb)('register_users', newuser);
        console.log(r, "data");
        res.send(newuser);
    }
    catch (e) {
        console.log('error at adding data');
    }
}));
//getAllUsersRegistered
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var allusers = yield (0, database_service_1.getAllUser)('register_users');
    res.send({
        statusCode: 200,
        ok: true,
        data: allusers
    });
}));
