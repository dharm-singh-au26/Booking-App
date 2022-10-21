import express  from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
const app =  express()

dotenv.config()

const connect = async () =>{
    
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to mongodb')
      } catch (error) {
        throw(error);
      }
}

mongoose.connection.on("connected",()=>{
    console.log('mongoDb connected')
})

mongoose.connection.on("Disconnected",()=>{
    console.log('mongoDb disconnected')
})


app.listen(5000,() =>{
    connect()
    console.log('Connected to Backend!')
})