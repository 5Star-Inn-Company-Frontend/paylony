const itemStored = JSON.parse(localStorage.getItem('auth_input_values'));

export const SavaToLocal_With_navigate =(arg,nextRoute)=>{
    if(itemStored){
        localStorage.setItem(
            "auth_input_values",
            JSON.stringify({
                ...itemStored,
                ...arg
            })
        )
        window.location.replace(nextRoute)
        
    }else{
        localStorage.setItem(
            "auth_input_values",
            JSON.stringify(arg)
        )
        window.location.replace(nextRoute)
    }
}