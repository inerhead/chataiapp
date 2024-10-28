import { useEffect, useState } from 'react';
import { json } from '../data/ai'


const useCustomFetchAI = (msg) => {     
    const url = import.meta.env.AZURE_AI_URL  
    const apiKey = import.meta.env.AZURE_AI_KEY  
    const [respMsg, setRespMsg] = useState('')
    useEffect(() => {              
        json.messages[1].content[0].text = msg
        const respAI = async () =>{
            const resp = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': apiKey,
                },
                body: JSON.stringify(json)
            }) 
            
            if (!resp.ok) {                
                console.log('error')
                setRespMsg('Error del servicio')
                return
                
            }
            const {choices} = await resp.json()

            const data = choices?.map((c)=> c.message?.content ).join()
            setRespMsg(data)

        }
        respAI()
        console.log(msg)
    }, [msg])

    return respMsg
}

export default useCustomFetchAI