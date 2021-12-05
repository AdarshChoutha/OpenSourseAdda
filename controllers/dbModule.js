const mysql2 = require('mysql2');
const dbConnection = mysql2.createConnection({
    host: '',
    user: '',
    password: '',
    port: '',
    database: 'osa_database'
});

dbConnection.connect(function (error) {
    if (error) {
        console.error('error connecting: ' + error.stack);
        return;
    }
    console.log('Connected to Database as id ' + dbConnection.threadId);
});

module.exports = dbConnection;
