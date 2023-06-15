const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");

const jwtSecret = process.env.JWT_SECRET;

const signup = (req, res) => {
  const { email, firstname, lastname } = req.body;
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const admin = {
        email,
        hashedpassword: hash,
        firstname,
        lastname,
      };
      models.admin
        .add(admin)
        .then(() => res.status(201).json({ message: "utilisateur créé" }))
        .catch((err) => res.status(400).json({ err }));
    })
    .catch((error) => res.status(500).json(error));
};

const login = (req, res) => {
  const { email, password } = req.body;

  models.admin
    .findByEmail(email)
    .then(([userFound]) => {
      if (!userFound || userFound.length === 0) {
        return res
          .status(401)
          .json({ error: "email ou mot de passe incorrect" });
      }

      return bcrypt
        .compare(password, userFound[0].hashedpassword)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ error: "email ou mot de passe incorrect" });
          }

          return res.status(200).json({
            userId: userFound[0].id,
            token: jwt.sign({ userId: userFound[0].id }, jwtSecret, {
              expiresIn: "3h",
            }),
          });
        })
        .catch((error) => {
          console.error(error);
          return res.status(500).json({ error: "Erreur interne du serveur" });
        });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({ error: "Erreur interne du serveur" });
    });
};

module.exports = {
  signup,
  login,
};
