"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorRouter = void 0;
var express_1 = require("express");
var _404_1 = require("../controllers/404");
var router = (0, express_1.Router)();
exports.errorRouter = router;
router.get('/', _404_1.error404);
router.post('/', _404_1.error404);
router.put('/', _404_1.error404);
router.delete('/', _404_1.error404);
//# sourceMappingURL=404.js.map