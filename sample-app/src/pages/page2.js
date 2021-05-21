import React from 'react'
import {useHistory} from 'react-router-dom'


export default function Page2(){

    const history = useHistory()

    function backButton(){
        history.push('/')
    }

    return (
        <>
        <a href=' ' onClick={()=>backButton()}>뒤로가기</a>
        <div>page2</div>
        </>
    )
}