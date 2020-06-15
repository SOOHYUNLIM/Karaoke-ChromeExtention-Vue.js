import Axios from "axios"

class AxiosUtil {
    get(url) {
        return Axios.get(url).then(response => response.data)
    }
}

export default new AxiosUtil()
