import { connectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/todoModel";
import { NextResponse } from "next/server";

const loadDb = async () => {
    await connectDB();
}

loadDb();

export async function GET(request){
    return NextResponse.json({
        message : "GET Method Hit"
    });
}

export async function POST(request){

    const {title, description} = await request.json();

    await TodoModel.create({
        title,
        description
    });

    return NextResponse.json({
        message : "Todo Created"
    });
}