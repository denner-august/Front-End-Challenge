import axios from "axios";
import useSWR from "swr";

export function useFetch(url:string){
    const fetcher = (url: string) => axios.get(url).then((res) => res.data)

    const {data, error, } = useSWR(url, fetcher);

    return {data, error};
}