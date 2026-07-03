Hospital_Project
Node.js MySQL example project (CommonJS) demonstrating simple CRUD-style operations against a MySQL database named hospital_db using the mysql2 package.

Project Structure
-Hospital_Project/
-node_modules/ (created after npm install)
-package.json
-package-lock.json
-dbhospital.js - creates and exports the DB connection
-doctor.js - inserts sample doctors
-patient.js - inserts sample patients
-staff.js - inserts sample staff members
-display.js - retrieves and displays all records (console.table)
-delete.js - deletes specified records and prints counts
-specific.js - runs specific SELECT queries and displays results
-README.md

Note: The project assumes that the hospital_db database and the tables doctor, patient, and staff already exist with appropriate columns.

Installation
1.Open a terminal in the 
Hospital_Project folder.
2.Install dependencies:
npm install

This will install mysql2 per package.json. Alternatively you can run:

npm install mysql2

Configuration
Edit dbhospital.js and replace YOUR_PASSWORD with your MySQL root password if needed. The connection settings are:
Host: localhost
User: root
Password: YOUR_PASSWORD (update before running)
Database: hospital_db
