import { drizzle } from 'drizzle-orm/mysql2';
import { createPool } from 'mysql2/promise';

const poolConexiones = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practica_w4',
});

const drizzleConnection = drizzle(poolConexiones);

export { drizzleConnection, poolConexiones }
