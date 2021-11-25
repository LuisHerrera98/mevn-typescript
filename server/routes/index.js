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
const express_1 = require("express");
const Task_1 = __importDefault(require("../models/Task"));
const router = (0, express_1.Router)();
router.get("/tasks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield Task_1.default.find();
    console.log(tasks);
    res.json(tasks);
}));
router.post("/tasks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const task = new Task_1.default({ title, description });
    yield task.save();
    res.json(task);
}));
router.get("/tasks/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const task = yield Task_1.default.findById(id);
        if (!task)
            return res.status(404).json({ message: "Task not found" });
        res.json(task);
    }
    catch (error) {
        return res.status(500).send(error);
    }
}));
router.delete("/tasks/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const task = yield Task_1.default.findByIdAndDelete(id);
        if (!task)
            return res.status(404).json({ message: "Task not found" });
        res.json(task);
    }
    catch (error) {
        return res.status(500).send(error);
    }
}));
router.put("/tasks/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateTask = yield Task_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.json(updateTask);
}));
exports.default = router;
