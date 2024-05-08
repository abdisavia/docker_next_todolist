import prisma from "@/lib/prisma";

export async function POST(req,res){
    try{
        const {title,status} = await req.json() ;
        const result = await prisma.listtodo.create({
            data:{
                title: title,
                status: status
            }
        })
        return Response.json(result);
    }catch(e) {
        return Response.json(e.message,{status:500,statusText:"Server Error"});
    }
}