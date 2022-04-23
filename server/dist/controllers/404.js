"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error404 = void 0;
var error404 = function (req, res) {
    res.status(404).json({
        msg: 'Error 404 Not found'
    });
};
exports.error404 = error404;
//# sourceMappingURL=404.js.map