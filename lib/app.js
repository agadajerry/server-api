"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
// const hostname = '127.0.0.1';
const { getProduct, getProductById, createProduct, updateProductById, removeProductById } = require("./controller/productController.js");
/*
implement your server code here
*/
const port = process.env.PORT || 2001;
let server = http_1.default.createServer((req, res) => {
    var _a, _b, _c;
    if (req.url == "/api/products" && req.method == "GET") {
        getProduct(req, res);
    }
    //get product by id
    else if (((_a = req.url) === null || _a === void 0 ? void 0 : _a.match(/\/api\/products\/([0-9]+)/)) && req.method === "GET") {
        const id = req.url.split("/")[3];
        getProductById(req, res, id);
    }
    //insert new Product
    else if (req.url === "/api/products" && req.method === "POST") {
        createProduct(req, res); //
    }
    //Update product via id
    else if (((_b = req.url) === null || _b === void 0 ? void 0 : _b.match(/\/api\/products\/([0-9]+)/)) && req.method === "PUT") {
        const id = req.url.split("/")[3];
        updateProductById(req, res, id);
    }
    // remove product by id
    else if (((_c = req.url) === null || _c === void 0 ? void 0 : _c.match(/\/api\/products\/([0-9]+)/)) && req.method === "DELETE") {
        const id = req.url.split("/")[3];
        removeProductById(req, res, id);
    }
    else {
        res.writeHead(404, { "Content-type": "application/json" });
        res.write(JSON.stringify("product Not found..."));
    }
});
server.listen(port, () => {
    //   console.log(`server is running at port ${port} -> ${hostname}`);
});
