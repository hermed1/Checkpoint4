const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    super({ table: "admin" });
  }

  findByEmail(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }

  add(admin) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, hashedpassword) VALUES(?, ?, ?, ?)`,
      [admin.firstname, admin.lastname, admin.email, admin.hashedpassword]
    );
  }
}

module.exports = AdminManager;
