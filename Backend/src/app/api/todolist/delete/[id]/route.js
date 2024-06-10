import prisma from "@/lib/prisma";

export async function DELETE(req, {params}){
    try{
        const id =  params.id ;

        console.log(id);
        
        // return Response.json(id);

        // // console.log(id)
        // // if(isNaN(id)){
        // //     throw new Error("Invalid Id")
        // // }

        const response = await prisma.listtodo.delete({
            where:{
                id:Number(id)
            }
        })
        return Response.json(response);
    }catch(e){
        return Response.json(e.message,{status:500,statusText:e.message});
    }
}