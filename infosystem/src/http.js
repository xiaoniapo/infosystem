import axios from "axios";

// axios.defaults.baseURL = "http://open.duyiedu.com";

// axios.interceptors.request.use(config => {
//     config.url += ".json";
//     return config;
// });

axios.interceptors.response.use(res => {
    if(res.status === 200) {
        return res.data
    }
});

export default axios;