const express = require("express");
const router = express.Router();

// const PriorunController = require("../controllers/PriorunController");
// const controller = new PriorunController();

router.get('/', function (req, res) {
    const minId = 1000;
    const maxId = 9999;
    res.send('PrioRun:' + (generateRandomId(minId, maxId)));
})

module.exports = router;