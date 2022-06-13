import React from 'react'
const date=['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']
function Headings() {
  return (
    <>
        <tr>
            <th>Pay Items</th>
            <th>Total</th>
            {date.map((i)=>{
                return(
                    <th>{i} 2021</th>
                )
            })}
        </tr>
        </>
  )
}

export default Headings