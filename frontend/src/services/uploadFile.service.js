import API_ENDPOINTS from "../constants/apiEndpoints";
import api from "./api.service";


const uploadFile = async (payload) => {
    try {
        const res = await api.post(API_ENDPOINTS.UPLOAD_FILE_API, payload)
        return res.data
    } catch (e) {
        console.log(e);
    }
}


const uploadFileServices = {
    uploadFile
}

export default uploadFileServices