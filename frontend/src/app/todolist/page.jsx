"use client"
import { useEffect, useState } from "react";
import List from "../components/list";
import Layout from "./layout";
import {handleCreate,getALLData} from "@/lib/action";

export default function Todolist() {
    const [data,setData] = useState();
    const [loading,setLoading] = useState(true);
    
    const getData = async () => {
        setLoading(true);
        const data = await getALLData();
        setData(data);
        setLoading(false);
    }

    useEffect(()=>{
        getData();
    },[])



    const formSubmit = async(e) => {
        setLoading(true);
        const res = await handleCreate(e)
        getData();
        setLoading(false);
    }

    // const RenderList = () => {
    // }

    return(
        <Layout>
            <div className="p-5 w-auto ">
                <div className="flex justify-center mt-12 sticky top-14" >
                    <form className="bg-white p-5 shadow-md border-b-2 border-cyan-600 rounded-md" action={formSubmit}>
                        <input type="text" name="title" className="w-[500px] h-[40px] text-xl ps-2 border-b-2 border-cyan-600 focus:outline-none text-black" placeholder="ketik disini" required/>
                        <button type="submit" disabled={loading} className="w-[100px] h-[40px] border-2 border-cyan-600 hover:border-transparent disabled:opacity-35 hover:bg-green-400 hover:text-white ms-2 rounded-md text-cyan-600">Tambah</button>
                    </form>
                </div>
                <div className="p-10">
                    {
                        loading ? 
                        <h1 className="text-white text-center text-2xl font-bold animate-pulse">Loading...</h1>
                        :data.length != 0 ? (data.map((list,index) => {
                                    return <List key={index} id={list.id} statusDef={list.status} title={list.title}/>
                                    }
                                )
                            ):(
                            <h1 className="text-center text-2xl font-bold text-white">To do list masih kosong</h1>
                        )
                        }
                </div> 
            </div>
        </Layout>
    )
}