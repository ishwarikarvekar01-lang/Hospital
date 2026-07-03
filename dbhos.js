const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ishu",
    database: "hospital"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // Create Table
    const createTable = "CREATE TABLE IF NOT EXISTS Patient(name VARCHAR(25), disease VARCHAR(25), age INT)";
    connection.query(createTable, function(err, result) {
        if (err) throw err;
        console.log("Table Created");

        // Insert Records
        const insert = "INSERT INTO Patient VALUES ('Rahul','Fever',22),('Anita','Cold',19),('Ramesh','Diabetes',45)";
        connection.query(insert, function(err, result) {
            if (err) throw err;
            console.log("Records Inserted");

            // Select All
            connection.query("SELECT * FROM Patient", function(err, result) {
                if (err) throw err;
                console.log("\nAll Records:");
                console.log(result);

                // Update
                connection.query("UPDATE Patient SET age=25 WHERE name='Rahul'", function(err, result) {
                    if (err) throw err;
                    console.log("\nRecord Updated");

                    // Delete
                    connection.query("DELETE FROM Patient WHERE name='Anita'", function(err, result) {
                        if (err) throw err;
                        console.log("\nRecord Deleted");

                        // Select Columns
                        connection.query("SELECT name,disease FROM Patient", function(err, result) {
                            if (err) throw err;
                            console.log("\nSelected Columns:");
                            console.log(result);

                            connection.end();
                        });
                    });
                });
            });
        });
    });
});