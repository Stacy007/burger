var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/api/burgers", function(req, res) {
    burger.selectAll(function(data) {
        var burgerObject = {
            burgers: data
        };
        res.json(burgerObject).end();
    });
});

router.get("/", function(req,res) {
    burger.selectAll(function(data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId }).end();
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    
    burger.updateOne(
    {
        devoured: 1
    },
    condition,
    function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    }
    );
});
module.exports = router;