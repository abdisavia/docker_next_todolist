export async function getALLData(){
    const response = await fetch("/api/todolist/getAllData",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
    })
    return await response.json();
}

export async function handleCreate(e){
    // e.preventDefault();
    const data = {
        title:e.get("title"),
        status:"pending"
    }
    console.log(data);
    const response = await fetch("/api/todolist/add",{
        method:"POST",
        header:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
    return (await response.json());
}

export async function handleDelete(id){
    try{
        const response = await fetch(`/api/todolist/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        return response;
    }catch(e){
        console.log(e.message)
    }
}