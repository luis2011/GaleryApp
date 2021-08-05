
import { useCallback, useEffect, useState } from 'react'
  export const useFetchImages = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true)
    //[] vacio para poder usar map

    const peticion = useCallback(async()=>{
        const key = "client_id=px55_iY2HPLQ_R-SeMqQec86Ae-V26VvD7AeNKpK-x8"

        let route = `https://api.unsplash.com/photos/?${key}`
        
        if (input !== "") {
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`
        }

        setLoading(true)
        //{encodeURI esto concatena mis string
        const res = await fetch(route)

        const data = await res.json();
        //console.log(data)

        if (data.results) {
             setImages(data.results)
        }else{
            setImages(data)
        }
        setLoading(false)
   },[input])
    

    useEffect(() => {
        peticion();
    }, [peticion])


    

    const handleSubmit = (e)=>{
        e.preventDefault();
        const text = e.target[0].value;

        setInput(text)
    }

    return [images, loading, handleSubmit]
}

 
