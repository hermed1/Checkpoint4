const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const fournisseursControllers = require("./controllers/FournisseursControllers");

router.get("/fournisseurs", fournisseursControllers.browse);
router.get("/fournisseurs/:id", fournisseursControllers.read);
router.post("/fournisseurs", fournisseursControllers.add);
router.put("/fournisseurs/:id", fournisseursControllers.edit);
router.delete("/fournisseurs/:id", fournisseursControllers.destroy);

module.exports = router;
