const AbstractManager = require("./AbstractManager");

class FournisseursManager extends AbstractManager {
  constructor() {
    super({ table: "providers" });
  }

  insert(fournisseur) {
    return this.database.query(
      `insert into ${this.table} (logo, description) values (?, ?)`,
      [fournisseur.logo, fournisseur.description]
    );
  }

  update(fournisseur) {
    return this.database.query(
      `update ${this.table} set logo = ?, description = ? where id = ?`,
      [fournisseur.logo, fournisseur.description, fournisseur.id]
    );
  }
}

module.exports = FournisseursManager;
