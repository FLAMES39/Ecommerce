import mssql, { pool } from 'mssql'
import dotenv from 'dotenv'
import path from 'path'



dotenv.config({path:path.resolve('../../.env')})


export const sqlConfig = {
    server:process.env.DB_SERVER as string,
    user:process.env.DB_USER as string,
    password:process.env.DB_PSW as string,
    database:process.env.DB_NAME as string,


    pool:{
        max:10,
        min:0,
        idleTimeoutMills:300000
    },
    options:{
        encrypt: false,
        trustServerCertificate: false
    }
}


mssql.connect(sqlConfig).then(pool =>{
    if(pool.connected){
        console.log('Database Connected');
        
    }
})