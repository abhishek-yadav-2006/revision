import { useEffect, useState } from "react";

export function useFetchPost(url) {
    const [data, setData] = useState({});

    async function fetchData(params) {
        const res =  await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json = await res.json();
        setData(json);
    }

    useEffect(()=>{
        fetchData();
    }, []);

    return data.title
}

export function useFetch(url){
   
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);
    async function fetchData(){
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setFinalData(json);
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    }, [url]);

    return {
        finalData,
        loading
    }
}