import React from 'react'
import {useHistory, useParams} from 'react-router-dom'


export default function Page2(){

    const history = useHistory()
    const {param} = useParams()


    function backButton(){
        history.push('/')
    }

    return (
        <>
        <a href=' ' onClick={()=>backButton()}>뒤로가기</a>
        <div>page2</div>
        <div>받음 param : {param}</div>
        </>
    )
}