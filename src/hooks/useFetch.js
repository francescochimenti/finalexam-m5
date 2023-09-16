import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
            setIsLoading(false)
        } catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line 
    }, [url]);

    return { data, isLoading, error }
}

export default useFetch;