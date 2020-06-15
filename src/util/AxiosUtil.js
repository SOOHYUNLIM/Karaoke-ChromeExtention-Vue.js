import Axios from "axios"

class AxiosUtil {
    get(url) {
        // let result
        // Axios.get(url).then(response => response.data)
        return Axios.get(url).then(response => response.data)
    }
}

export default new AxiosUtil()