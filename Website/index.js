const express = require('express');
const router = express.Router();

const listContent = require('./control');

router.get('/',listContent);

module.exports = router;