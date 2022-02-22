import { useEffect, memo } from "react"

const Button =({children})=>{
    useEffect(()=>{
        console.log('button rendered')
    })

    return (

<button>
    {children}
</button>
    )
}
// export default Button
export default memo(Button)