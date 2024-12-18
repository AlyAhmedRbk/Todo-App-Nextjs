import mongoose from "mongoose"

export const connectDB = async  () => {
    await mongoose.connect("mongodb+srv://alyahmedrbk:wuGLSCL3n8NzvLBe@cluster0.ezhx9.mongodb.net/Todo-App");
    console.log("Database Connected");
} 