import React, { useEffect, useState } from 'react'
import BaseService from '../service/baseService'


function Page1() {

    const baseService = BaseService.getInstance()
    async function init(){
        const result = await baseService.fnRest('', '', '')
    }
    const [count, setCount] = useState(0);
    
    

    useEffect(()=>{
        init()
    }, [] )

    return (
        <>
        <div>page1</div>
        {/* <img src='images/captain.jpg' /> 이미지명 바꿔서 이미지 로드에 사용 */}
        </>
    )
}

export default Page1