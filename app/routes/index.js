'use strict';
const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});
router.get('/dango/login', (req, res, next) => {
    res.render('adminLogin');
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=index.js.map