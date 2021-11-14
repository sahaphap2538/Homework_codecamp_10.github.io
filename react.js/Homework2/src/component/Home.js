import React, { useState, useEffect} from 'react'
import axios from 'axios'


export function Home() {
    const [ pikka, setPikka ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect( async () => {
        const respone = await axios.get('https://randomuser.me/api/')
        setPikka(respone.data)
        setIsLoading(false)
    }, [])

    return (
        <div style={{textAlign:'center'}}>
           <h1>Home</h1>
           {(isLoading)?<h1>Loading...</h1> : <p>{pikka.toString()}</p>}
        </div>
    )
}
