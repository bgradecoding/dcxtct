import React, { useEffect, useState } from 'react'
import BaseService from '../service/baseService'
import {useHistory, useParams} from 'react-router-dom'

function Page1() {

    const baseService = BaseService.getInstance()
    async function init(){

        //fnRest(method, url, requestBody)
        const result = await baseService.fnRest('', '', '')
    }
    const history = useHistory()

    const [list, setList] = useState([]);
    const listex = [
        { name : 'aaa', age :10 },
        { name : 'bbb', age :20 },
        { name : 'ccc', age :10 },
        { name : 'ddd', age :10 },
    ]
    function page2Move(){
        history.push('/page2/넘어간다파라미터')
    }

    useEffect(()=>{
        init()
        setList(listex)
    }, [] )

    return (
        <>
        <div>page1</div>
        <a href=' ' onClick={page2Move}>page2 이동</a>
        {/* <img src='images/captain.jpg' /> 이미지명 바꿔서 이미지 로드에 사용 */}

        {/* list 뿌릴때 사용하는 map 함수 사용법 */}
        {
            list.map((v,i)=>(
                <div key={i}>
                    <span>{v.name}</span>
                    <span>{v.age}</span>
                </div>
            ))
        }

        </>
    )
}

export default Page1