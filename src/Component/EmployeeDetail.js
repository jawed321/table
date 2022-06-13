import React from 'react'

function EmployeeDetail() {
  return (
    <>
    <tr>
          <th>Employee No.</th>
          <td>0041</td>
          <th>Name:</th>
          <td colspan="3">Mohan Iyer</td>
        </tr>
        <tr>
          <th>PAN No.</th>
          <td>004154654</td>
          <th>Gender</th>
          <td>Male</td>
          <th>Location</th>
          <td>Bangalore</td>
        </tr>
        <tr>
          <th>Date of join</th>
          <td>01-Apr-2020</td>
          <th>Date of Birth</th>
          <td>09-Dec-1982</td>
          <th>Date of Leaving</th>
          <td>09-Dec-1982</td>
        </tr>
        <tr>
          <th>Tax Regime</th>
          <td>OLD</td>
          <th></th>
          <td></td>
          <th></th>
          <td></td>
        </tr>
    </>
  )
}

export default EmployeeDetail