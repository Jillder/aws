import mysql from 'mysql2/promise';

async function connect() {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',      
        password: '',
        port: 3306,
        database: 'exa_asw_primer'
    });
}

export default connect;