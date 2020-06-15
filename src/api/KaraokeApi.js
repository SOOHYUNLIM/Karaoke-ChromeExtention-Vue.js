import AxiosUtil from "../util/AxiosUtil";

const BASE_URL = "https://tv3czyoqsh.execute-api.ap-northeast-2.amazonaws.com/karaoke/"

class KaraokeApi {
    getChart(category, callBack) {
        AxiosUtil.get(BASE_URL + "getchart/"+category).then(arr => callBack(arr.sort((a, b) => a.rank - b.rank)))
    }
}

export default new KaraokeApi()
