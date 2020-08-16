import {Connection, Request} from "tedious";
import {databaseConfig} from "./database-config-file";
// use your own database
const config = {
    authentication: {
        options: {
            userName: databaseConfig.userName , // update me
            password: databaseConfig.password // update me
        },
        type: "default"
    },
    server: databaseConfig.host, // update me
    options: {
        database: databaseConfig.database, //update me
        encrypt: true
    }
};
const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", (err:any) => {
    if (err) {
        console.error('Please use your own Database')
        console.error(err.message);
    } else {

        console.log('on')
        // queryDatabase();
    }
});

function queryDatabase() {
    console.log("Reading rows from the Table...");

    // Read all rows from table
    const request = new Request(
        `SELECT TOP 20 * from Company`,
        (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`${rowCount} row(s) returned`);
            }
        }
    );

    request.on("row", columns => {
        columns.forEach(column => {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });

    connection.execSql(request);
}
