'use strict';

import * as express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/',(req,res,next) => {
  res.render('index', {title: 'Express'});
});

router.get('/dango/login', (req, res, next) => {
  res.render('adminLogin');
});

export default router;