import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useComment = () => {
    const currentID = useSelector(state => state.idTaker.id)

    const URL = `https://striveschool-api.herokuapp.com/api/comments/${currentID}`;
    const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExY2ZlN2IyYjJhZTAwMTRiMzQ3MDUiLCJpYXQiOjE2OTU2NjYxNTEsImV4cCI6MTY5Njg3NTc1MX0.y5zScLJr8heKFZpCzn0OB8IJWTE8spbQY-InnwUnM64";

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(URL, {
                    headers: {
                    'Authorization': TOKEN
                }
                    })
            const data = await response.json()
            setData(data)
            setIsLoading(false)
        }catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line 
    }, [URL, currentID]);

    return { data, isLoading, error }
}

export default useComment;