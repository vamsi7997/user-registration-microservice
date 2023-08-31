"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserId = void 0;
const createUserId = (username) => {
    let template = `${Math.random() * 1000}`;
    return username + template;
};
exports.createUserId = createUserId;
