export const apiBaseUrl = "https://patrick.5starcompany.com.ng/api/v1/"

export const setHeaders = ()=>{
    const user = JSON.parse(localStorage.getItem('paylonyToken'))
    const headers ={
        headers: {
            "Authorization":`Bearer Bearer ${user?.authorization?.token}`
        }
    }
    return headers
}