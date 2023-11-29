export const agentStored = JSON.parse(localStorage.getItem('agent_values'));

export const SaveToLocal_With_navigate =(arg,nextRoute)=>{
    if(agentStored){
        localStorage.setItem(
            "agent_values",
            JSON.stringify({
                ...agentStored,
                ...arg
            })
        )
        window.location.replace(nextRoute)
        
    }else{
        localStorage.setItem(
            "agent_values",
            JSON.stringify(arg)
        )
        window.location.replace(nextRoute)
    }
}