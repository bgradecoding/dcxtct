import React from 'react'


function Table() {


    return (
        <>
        <div>table</div>

<table width={'500px'}> {/* width는 상황에 맞게 조절 */}
  <thead>  {/* thead 첫 행의 장식이 필요하면 쓰고 아니면 없애기 */}
    <tr>
      <th style={{'textAlign': 'center'}}>textAlign center</th>
      <th style={{'textAlign': 'left'}}>222</th>
    </tr>
  </thead>
  <tbody> {/* 필요한 줄만큼 tr td 붙여서 사용 */}
    <tr>
      <td style={{'textAlign': 'left'}}>textAlign left</td>
      <td style={{'textAlign': 'right'}}>textAlign right</td>
    </tr>
  </tbody>
</table>
        </>
    )
}

export default Table