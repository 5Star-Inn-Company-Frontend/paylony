import Cookies from "universal-cookie";
export const apiBaseUrl = "https://patrick.5starcompany.com.ng/api/v1/"

export const setHeaders = ()=>{
    const cookies = new Cookies(null, { path: '/' });
    const user = cookies.get('paylonyToken')
    const headers ={
        headers: {
            "Authorization":`Bearer Bearer ${user?.authorization?.token}`
        }
    }
    return headers
}