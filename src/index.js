// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB  from "./db/index.js";



dotenv.config({
    path: './env'
})


connectDB()



/*
import express from "express"
const app = express()
;(async ()=>{
    try{
       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("errror",(error) => {
        console.log("ERRR:", error);
        throw error
       })
       app.listen(prosess.env.PORT, () => {
        console.log(`App is listening on port $ {process.env.PORT}`);
       })

    }catch(error){
        console.error("ERROR:", error)
        throw err 
    }
})()// here semicolon is just from clean up purpose 
// if editor ne pahali vali line prr semicolon nahi lagaya
// then it can show error**/