"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false,
    },
    online: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        required: true
    },
    auth: {
        type: Object,
        required: false
    }
});
UserSchema.method('toJSON', function () {
    var _a = this.toObject(), __v = _a.__v, _id = _a._id, password = _a.password, object = __rest(_a, ["__v", "_id", "password"]);
    object.uid = _id;
    return object;
});
exports.User = (0, mongoose_1.model)('User', UserSchema);
//# sourceMappingURL=user.js.map