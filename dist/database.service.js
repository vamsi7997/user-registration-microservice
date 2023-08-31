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
exports.getAllUser = exports.addUserToDb = exports.createDB = void 0;
const mongodb_1 = require("mongodb");
let connection_string = process.env.DB_URL;
const client = new mongodb_1.MongoClient("mongodb+srv://v9492048236:wbn7EPRsb8SsJroL@cluster0.zlpjx0d.mongodb.net/");
let connec;
try {
    client.connect();
}
catch (e) {
    console.log(e, "error");
}
const createDB = (db_name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connec.db(db_name);
});
exports.createDB = createDB;
const addUserToDb = (collectionname, userData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client.db(collectionname).collection('userregistered').insertOne(userData);
});
exports.addUserToDb = addUserToDb;
const getAllUser = (collectionname) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client.db(collectionname).collection('userregistered').find({}).toArray();
});
exports.getAllUser = getAllUser;
