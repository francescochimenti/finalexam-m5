import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useComment = () => {
    const currentID = useSelector(state => state.idTaker.id)

    const URL = `https://striveschool-api.herokuapp.com/api/comments/${currentID}`;
    const TOKEN =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZiOTgyYzMyYWYyNzAwMTQ5ODYxMTQiLCJpYXQiOjE2OTQyMTAwOTIsImV4cCI6MTY5NTQxOTY5Mn0.FiyvuJpyWQ2fPmBNRuOZwJW73vb7Pa3PASf3iDOiiVo";

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
    }, [URL]);

    return { data, isLoading, error }
}

export default useComment;