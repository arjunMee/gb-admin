import { useState, useEffect } from 'react'
import axios from 'axios'
import { config } from 'src/config/ApiName'

// defining useFetch hook
export const useFetch = (url, setState, ...other) => {
  // state to keep track of loading
  const [loadingData, setLoadingData] = useState(false)

  // state for data itself
  const [data, setData] = useState(null)

  // effect to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // set data to loading
        setLoadingData(true)

        // request to load data, you can use fetch API too
        const { data } = await axios.get(url, config, ...other)

        // set data in state and loading to false
        setLoadingData(false)
        if (setState) {
          setState(data)
        } else {
          setData(data)
        }
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [url])

  // return the data and loading state from this hook
  return [data, loadingData]
}
