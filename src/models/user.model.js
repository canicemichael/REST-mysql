const db = require("../config/db.config");

//constructor
class User {
    constructor(id, email, phone_number) {
        this.id = id;
        this.email = email;
        this.phone_number = phone_number;
    }
    static create(newUser, result) {
        db.query('INSERT INTO users VALUES(?, ?, ?', [newUser.id, newUser.email, newUser.phone_number], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            console.log("Created User: ", { ...newUser });
            result(null, { id: res.insertId, ...newUser });
        });
    }

    static findById(id, result) {
        db.query('SELECT - FROM users WHERE id = ?', [id], (err, res) => {
            
        })
    }
}