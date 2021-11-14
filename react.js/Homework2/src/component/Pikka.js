import React, { useEffect, useState} from 'react'
import axios from 'axios'

const PikkaId = () => {
    return <h2>Pikka Id </h2>
}


export function Pikka() {
    const [ pikkaId, setPikkaId ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect( async () => {
        const respone = await axios.get('https://randomuser.me/api/')
        setPikkaId(respone.data)
        setIsLoading(false)
    }, [])

    return (
        <div>
            <h1>Pikka</h1>
            {(isLoading)?<h1>Loading...</h1> : <PikkaId/>}
        </div>
    )
}
