import axios from "axios";


export function GetApiRequestHeader(customHeader={}){
    return{
        Accept: 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Cache-Control':'no-cache, no-store, must-revalidate',
        Pragma:'no-cache',
        Expires: 0,
        ...customHeader,
    }
}


const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: GetApiRequestHeader(),
  });


export function get(url, params) {
    return instance.get(url,params)
}

export function post(url, body, params) {
    return instance.post(url, body, params)
}

instance.interceptors.request.use(
    async config => {
        return config;
    },
    error ={},
);

inctance.interceptors.response.use(
    function (response) {
        //console api response here
        return response;
    },
    function (error){
        //console api response error here
        return Promise.reject(error);
    }
)












