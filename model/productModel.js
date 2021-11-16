"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let products = require('../data/myJson.json');
// console.log(products);
const { v4: uuidv4 } = require("uuid");
const utils_js_1 = require("../utils.js");
function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products);
    });
}
//
function findById(id) {
    return new Promise((resolve, reject) => {
        const productId = products.find((p) => p.id == id);
        resolve(productId);
    });
}
function create(product) {
    return new Promise((resolve, reject) => {
        const newProduct = { id: uuidv4(), ...product };
        //pushing in new product to previous products
        products.push(newProduct);
        (0, utils_js_1.writeDataToFile)('./lib/data/myJson.json', products);
        resolve(newProduct);
        console.log(newProduct);
    });
}
//update
function update(id, product) {
    return new Promise((resolve, reject) => {
        const index = products.findIndex((p) => p.id === id);
        products[index] = { id, ...product };
        const newProduct = { id: uuidv4(), ...product };
        //pushing in new product to previous products
        products.push(newProduct);
        (0, utils_js_1.writeDataToFile)('./lib/data/myJson.json', products);
        resolve(products[index]);
    });
}
// remove product
function remove(id) {
    return new Promise((resolve, reject) => {
        products = products.filter((p) => p.id != id);
        (0, utils_js_1.writeDataToFile)('./lib/data/myJson.json', products);
        resolve("It is written...");
    });
}
module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};
