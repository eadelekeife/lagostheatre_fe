import Axios from "axios";

const axiosCall = Axios.create({
    baseURL: "https://backend.lagostheatreigando.com/api/v1/lagostheatre/"
})

export default axiosCall;