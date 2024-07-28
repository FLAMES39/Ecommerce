
import express, { json } from "express"
import cors from "cors"

const SERVER = express();
const  PORT = 4000;


SERVER.use(cors())
SERVER.use(json())





SERVER.listen(PORT, ()=>{
        console.log(`Database connected to http://localhost:${PORT}`);
        
}
    
)

