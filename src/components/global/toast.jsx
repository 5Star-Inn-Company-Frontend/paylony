import toast from "react-hot-toast"

export const ToastError=(
    status,data
    )=>{
    if(status !== 401){
        if(data?.error){
            toast.error(data?.error,{
                style:{
                    background:"#fff1f2"
                }
            })
        }else{
            toast.error(data?.message,{
                style:{
                    background:"#fff1f2"
                }
            })
        }
    }
}

export const ToastSucess =(message)=>{
    toast.success(message,{
        style:{
            background:"#ecfdf5",
        },
        iconTheme:{
            primary:"#6ee7b7"
        }
    })
}