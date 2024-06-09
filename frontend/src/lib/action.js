
export async function getALLData(){
    try{
        const response = await fetch(`http://172.20.95.3:8080/api/todolist/getAllData`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        })
        return await response.json();
    }catch(e){
        console.log(e.message)
    }
}

export async function handleCreate(e){
    // e.preventDefault();
    const data = {
        title:e.get("title"),
        status:"pending"
    }
    console.log(data);
    const response = await fetch(`http://172.20.95.3:8080/api/todolist/add`,{
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
        const response = await fetch(`http://172.20.95.3:8080/api/todolist/delete/${id}`,{
            method:"DELETE",
        })
        return response;
    }catch(e){
        console.log(e.message)
    }
}