"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = exports.authRoutes = void 0;
const authRoutes_1 = __importDefault(require("./authRoutes"));
exports.authRoutes = authRoutes_1.default;
const postRoutes_1 = __importDefault(require("./postRoutes"));
exports.postRoutes = postRoutes_1.default;
