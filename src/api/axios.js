import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "35da616420abac41cc95e7767d314337",
    language: "ko-KR",
  },
});

export default instance;
