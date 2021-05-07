import axios from "axios";
import url from "./URL";

const appkey = "18271562112_1598363415528";

axios.interceptors.response.use(res => {
    console.log(res)
    if (res.status === 200) {
        return res.data;
    } else {
        return res;
    }
});

const api = {};

for (const prop in url) {
    api[prop] = ajax(url[prop].address, url[prop].methods)
}

function connect(obj) {
    let str = `?appkey=${appkey}&`;
    for (const prop in obj) {
        str += prop + "=" + obj[prop] + "&"
    }
    return str.slice(0, str.length - 1);
}

function ajax (url, methods) {
    if(methods === "get") {
        return (params = {}) => axios.get(url, { params: {
            appkey,
            ...params
        } });
    } else if(methods === "post") {
        return params => axios.post(url + connect(params));
    }
}

export default api;