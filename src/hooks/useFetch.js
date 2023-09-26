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
    }, [url]); // everytime the url changes, the useEffect will be triggered and i get the new books, i use this on the book details page

    return { data, isLoading, error }
}

export default useFetch;