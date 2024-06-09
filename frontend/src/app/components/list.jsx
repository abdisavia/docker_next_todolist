"use client";
import { getALLData, handleDelete } from "@/lib/action";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";


export default function List({title,statusDef,id}) {

    const [status, setStatus] = useState();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if(statusDef != ""){
            setStatus(statusDef);
            console.log(status);
        }else{
            setStatus("pending")
        }
    },[])

    function statusColor(){
        switch(status){
            case "pending":
                return " text-yellow-600 border-yellow-600";
            case "in progress":
                return " text-blue-600 border-blue-600";
            case "done":
                return " text-green-600 border-green-600";
        }
    }

    function containerColor() {
        switch(status){
            case "pending":
                return " shadow-yellow-200  border-b-[4px] border border-yellow-500";
            case "in progress":
                return " shadow-blue-200  border-b-[4px] border border-blue-500";
            case "done":
                return " shadow-green-200  border-b-[4px] border border-green-500";
        }
    }

    function handleStatusChange(e){
        setStatus(e.target.value)
    }

    async function handleActionDelete(id){
        try{
            setLoading(true);
            await handleDelete(id);
            setTimeout(async() => {
                setLoading(false);
                // window.location.href = "/"
            },5000)
        }catch(e){
            console.log(e.message);
        }
    }

    return(
        <div className={" w-3/4 h-28 p-5 mx-auto shadow-xl bg-white rounded-xl grid grid-cols-7 mb-5".concat(containerColor())}>
            <div className="col-span-5 flex items-center ">
                <h1 className="block max-w-full text-clamp-1 truncate break-all font-bold text-3xl text-black">{title}</h1>
            </div>
            <div className="flex items-center justify-end col-span-2 gap-5 px-5 text-black">
                <select className={" bg-transparent w-full py-2 border-b-2 outline-none".concat(statusColor())} onChange={handleStatusChange} value={status}>
                    <option value="" disabled={true}>status</option>
                    <option value="done">Done</option>
                    <option value="pending">Pending</option>
                    <option value="in progress">In Progress</option>
                </select>
                <button onClick={() => handleActionDelete(id)} disabled={loading} className="col-span-1 border-2 disabled:bg-slate-500  border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-3 py-2 rounded-md">Delete</button>
            </div>
        </div>
    )
}