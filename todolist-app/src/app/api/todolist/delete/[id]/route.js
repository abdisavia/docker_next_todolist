import prisma from "@/lib/prisma";

export async function DELETE(req,{params}){
    try{
        const id = Number(params.id)
        
        const response = await prisma.listtodo.delete({
            where:{
                id:id
            }
        })
        return Response.json(response);
    }catch(e){
        return Response.json(e.message,{status:500,statusText:e.message});
    }
}