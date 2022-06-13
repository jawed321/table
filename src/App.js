import './App.css';
import Headings from './Component/Headings';
import MonthlyIncomeData from './Component/MonthlyIncomeData';
import Total from './Component/Total';
import EmployeeDetail from './Component/EmployeeDetail';
import RentHeading from './Component/RentHeading';
import MonthlyRentData from './Component/MonthlyRentData';
import ItemExemption from './Component/ItemExemption';
import IncomePreviousEmployer from './Component/IncomePreviousEmployer';
import Section16 from './Component/Section16';
import OtherIncome from './Component/OtherIncome';
import Letout from './Component/Letout';
import ChapterVI from './Component/ChapterVI';
import Taxtobepaid from './Component/Taxtobepaid';
import Taxpaid from './Component/Taxpaid';

function App() {
  return (
    <div className="App">
      <div className="headingstart">
        <h2 style={{ margin: '2px' }}>DGRAPH LABS INDIA PVT LIMITED</h2>
        <p style={{ margin: '2px', fontSize: '20px' }}>Prestige Atlanta,80 feet Road,Koramangala 1A Block,Koramangala 1A Block, Bengaluru-560034</p>
        <h2 style={{ margin: '2px' }}>INCOME TAX COMPUTATION FOR THE FINANCIAL YEAR 2020-2021</h2>
      </div>
      <table className='table1' border="1">
        <EmployeeDetail />
      </table>
      <div className="tableheading">
        <h4 style={{ margin: '2px' }}>A{")"} Taxable Income</h4>
        <h4 style={{ margin: '2px 0px 2px 25px' }} className="subpoint">i{")"} Monthly Income</h4>
      </div>
      <table className='table2'>
        <Headings />
        <MonthlyIncomeData />
        <Total />
      </table>
      <div className="tableheading">
        <h4 style={{ margin: '2px 0px 2px 25px' }} className="subpoint">ii{")"} Adhoc Income</h4>
      </div>
      <table className='table3'>
        <Headings />
        <MonthlyIncomeData />
        <Total />
      </table>
      <div className="tableheading">
        <h4 style={{ margin: '12px 2px 2px' }}>B{")"} Deduction</h4>
      </div>
      <table className='table4'>
        <Headings />
        <MonthlyIncomeData />
        <Total />
      </table>
      <div className="tableheading">
        <h4 style={{ margin: '12px 2px 2px' }}>C{")"} PreRequisites</h4>
      </div>
      <table className='table5'>
        <Headings />
        <Total />
      </table>
      <div className="tableheading">
        <h4 style={{ margin: '12px 2px 2px' }}>D{")"} Gross Salary{"("}A+C{")"}
          ........................................................
          <span style={{ marginLeft: '150px' }}>2222298.00</span></h4>
      </div>
      <div className="tableheading">
        <h4 style={{ margin: '12px 2px 2px' }}>E{")"} Less Exemption Under Section 10</h4>
      </div>
      <table style={{ marginLeft: '5%' }} className='table6'>
        <RentHeading />
        <MonthlyRentData />
      </table >
      <table style={{ marginLeft: '5%' }} className='table7'>
        <ItemExemption />
      </table>
      <div className="tableheading">
        <h4 style={{ margin: '12px 2px 2px' }}>F{")"} Income from Previous Employer</h4>
      </div>
      <table style={{ marginLeft: '5%' }} className="table8">
        <IncomePreviousEmployer />
      </table>
      <div className="tableheading">
        <h4 style={{ margin: '12px 2px 2px' }}>G{")"} Income after Exemption {"("}D-E+F{")"}
          ........................................................
          <span style={{ marginLeft: '130px' }}>1989345.00</span></h4>
      </div>
      <div className="tableheading">
        <h4 style={{ margin: '12px 2px 2px' }}>H{")"} Less Deduction Under Section 16
          ........................................................
          <span style={{ marginLeft: '125px' }}>1989345.00</span></h4>
      </div>
      <table style={{ marginLeft: '5%' }} className='table9'>
        <Section16 />
      </table>
      <div className="tableheading">
        <h4 style={{ margin: '12px 2px 2px' }}>I{")"} Income after Exemption {"("}D-E+F{")"}
          ........................................................
          <span style={{ marginLeft: '130px' }}>1989345.00</span></h4>
      </div>
      <div className="tableheading">
        <h4 style={{ margin: '12px 2px 2px' }}>J{")"} Less Deduction Under Section 16
          ........................................................
          <span style={{ marginLeft: '125px' }}>0.00</span></h4>
      </div>
      <div className="tableheading">
        <h4 style={{ margin: '2px 0px 2px 25px' }} className="subpoint">a{")"} Other Income</h4>
      </div>
      <table className='table10'>
        <OtherIncome />
      </table>
      <div className="tableheading">
        <h4 style={{ margin: '2px 0px 2px 25px' }} className="subpoint">b{")"}
          Income Loss From house Property
          ........................................................
          <span style={{ marginLeft: '125px' }}>0.00</span>
        </h4>
        <h4 style={{ margin: '2px 0px 2px 45px' }} className="subpoint">i{")"}
          Interest on Housing Loan
          ...................................................................
          <span style={{ marginLeft: '125px' }}>0.00</span>
        </h4>
        <h4 style={{ margin: '2px 0px 2px 45px' }} className="subpoint">ii{")"}
          Income/Loss From letout property
        </h4>
        <table style={{ margin: '2px 0px 2px 45px' }} className='table11'>
          <Letout />
        </table>
      </div>
      <div className="tableheading">
          <h4 style={{ margin: '12px 2px 2px' }}>K{")"} Gross Total Income {"("}I+J{")"}
            ........................................................
            <span style={{ marginLeft: '130px' }}>1989345.00</span></h4>
        </div>
        <div className="tableheading">
          <h4 style={{ margin: '12px 2px 2px' }}>L{")"} Deduction Under Chapter VI A
            ...............................................
            <span style={{ marginLeft: '125px' }}>1500000.00</span></h4>
        </div>
        <table style={{ marginLeft: '5%' }} className='table12'>
          <ChapterVI/>
        </table>
        <div className="tableheading">
          <h4 style={{ margin: '12px 2px 2px' }}>M{")"} Taxable Income
            .....................................................
            <span style={{ marginLeft: '130px' }}>1989345.00</span></h4>
        </div>
        <div className="tableheading">
          <h4 style={{ margin: '12px 2px 2px' }}>N{")"} Total Tax to be Paid
            ...............................................
            <span style={{ marginLeft: '125px' }}>1500000.00</span></h4>
        </div>
        <table style={{ marginLeft: '5%' }} className="table13">
          <Taxtobepaid/>
        </table>
        <div className="tableheading">
          <h4 style={{ margin: '12px 2px 2px' }}>O{")"} Tax paid till date
            ....................................................
            <span style={{ marginLeft: '125px' }}>1500000.00</span></h4>
        </div>
        <table style={{ marginLeft: '5%' }} className="table14">
          <Taxpaid/>
        </table>
        <div className="tableheading">
          <h4 style={{ margin: '12px 2px 2px' }}>P{")"} Relief under Section 89
            ..........................................................................................
            <span style={{ marginLeft: '125px' }}>0.00</span></h4>
        </div>
        <table style={{ marginLeft: '5%' }} className="table15">
          <Taxtobepaid/>
        </table>
        <div className="tableheading">
          <h4 style={{ margin: '12px 2px 2px' }}>Q{")"} Annual Tax Balance
            ................................................................................................
            <span style={{ marginLeft: '125px' }}>0.00</span></h4>
        </div>
        <table style={{ marginLeft: '5%' }} className="table16">
          <Taxtobepaid/>
        </table>
        <div className="tableheading">
          <h4 style={{ margin: '12px 2px 2px' }}>R{")"} TDS recovered in current month
            ...........................................................................
            <span style={{ marginLeft: '125px' }}>0.00</span></h4>
        </div>
        <table style={{ marginLeft: '5%' }} className="table17">
          <Taxtobepaid/>
        </table>
        <div className="tableheading">
          <h4 style={{ margin: '12px 2px 2px' }}>S{")"} Excess Tax deducted.Refund to be claimed through Form 16
            ............................
            <span style={{ marginLeft: '125px' }}>0.00</span></h4>
        </div>
    </div>
  );
}

export default App;
