import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  oneline: {
    width:'150px',  //얼마나 글자가 나오고 ...을 만들것인지 그 넓이를 결정하는 요소
    padding:'0 5px',
    overflow:'hidden', 
    textOverflow:'ellipsis', 
    whiteSpace:'nowrap',
  },
  multiline:{
    display: '-webkit-box',
    display: '-ms-flexbox', 
    display: 'box',
    marginTop:'1px', 
    maxHeight:'80px', 
    overflow:'hidden', 
    verticalAlign:'top', 
    textOverflow: 'ellipsis', 
    wordBreak:'break-all',
    webkitBoxOrient:'vertical', 
    webkitLineClamp:3

  }
}));


function CssEx() {

    const classes = useStyles();

    return (
        <>
<div className={classes.oneline} >통영의 신흥보물 강구안의 동쪽벼랑인 동피랑의 벽화마을을 다녀왔다</div>

<p class="txt_post">통영의 신흥보물 강구안의 동쪽벼랑인 동피랑의 벽화마을을 다녀왔다.&nbsp; 비도 추적추적 내리고 일정상 늦으막해서 그런지 사람이 많지는 않았다. 덕분에 보통때는 한참을 기다려야 겨우 날개달린 사진을 찍을 수 있었을 텐데, 이번에는 바로 천사날개를 달고 사진을 찍을 수 있는 행운까지 얻었다. 이번이 동피랑 벽화마을 방문 3번째인데 예전에 왔을때에 비해서 벽화가 많이 바뀌어 있었다</p>

        </>
    )
}

export default CssEx