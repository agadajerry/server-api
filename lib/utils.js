"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeDataToFile = void 0;
const fs = require('fs');
const { resolve } = require('path/posix');
//write to file...
function writeDataToFile(filePath, content) {
    fs.writeFileSync(filePath, JSON.stringify(content), "utf8", (err) => {
        if (err) {
            console.error(err + "err message");
        }
    });
}
exports.writeDataToFile = writeDataToFile;
/**
 * get post data
 *
 */
function getPostData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", () => {
                resolve(body);
            });
        }
        catch (err) {
            reject(err);
        }
    });
}
module.exports = {
    writeDataToFile,
    getPostData
};
