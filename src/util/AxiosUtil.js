import Axios from "axios"

class AxiosUtil {
    get(url) {
        let result
        Axios.get(url).then(response => result = response.data)
        return result
    }
}

export default new AxiosUtil()