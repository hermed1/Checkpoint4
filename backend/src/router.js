const express = require("express");

const router = express.Router();
const auth = require("./utils/auth");

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const fournisseursControllers = require("./controllers/FournisseursControllers");

router.get("/fournisseurs", fournisseursControllers.browse);
router.get("/fournisseurs/:id", fournisseursControllers.read);
router.post("/fournisseurs", auth, fournisseursControllers.add);
router.put("/fournisseurs/:id", auth, fournisseursControllers.edit);
router.delete("/fournisseurs/:id", auth, fournisseursControllers.destroy);

const adminControllers = require("./controllers/AdminControllers");

router.post("/login", adminControllers.login);
router.post("/signup", adminControllers.signup);

module.exports = router;
