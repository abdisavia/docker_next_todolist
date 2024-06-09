import prisma from "@/lib/prisma";


export async function GET(req,res){
    try{
        const todolist = await prisma.listtodo.findMany({})
        return Response.json(todolist);
    }catch(e){
        return Response.json(e.message,{status:500, statusText:"Internal Server Error"});
    }
}