import axios from "axios";

const fetcher = (url: string) =>axios.get(url).then((res) => res.data).then((res) => res.results);
export default fetcher;