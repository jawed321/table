import React from 'react'

function Letout() {
  return (
    <>
    <tr>
        <th>Property No</th>
        <th>Annual Rent Received</th>
        <th>Municipal Taxes</th>
        <th>Unrealized Rent</th>
        <th>Net Annual Value(2-(3+4))</th>
        <th>Standard Deduction@30%</th>
        <th>Interest on housing Loan</th>
        <th>Income/Loss(5-(6+7))</th>
        <th>Considered Amount</th>
    </tr>
    <tr>
        <th>{"("}1{")"}</th>
        <th>{"("}2{")"}</th>
        <th>{"("}3{")"}</th>
        <th>{"("}4{")"}</th>
        <th>{"("}5{")"}</th>
        <th>{"("}6{")"}</th>
        <th>{"("}7{")"}</th>
        <th>{"("}8{")"}</th>
        <th>{"("}9{")"}</th>
    </tr>
    <tr>
        <th colSpan={8} style={{textAlign:'right'}}>Total:</th>
        <th></th>
    </tr>
    </>
  )
}

export default Letout