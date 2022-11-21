import React,{useContext} from 'react';
import '../App.css';    
import AnimatedNumber from "animated-number-react";
import {TransactionContext} from '../context/TransactionContext';
import {FormattedNumber} from "react-intl";

const IncomeExpense=()=>{
    const {income,expense}=useContext(TransactionContext);
   
    return(
        <div className='income-expense'>
            <div className='income'>
                <h3>Income</h3>
                <h4>  
                    <AnimatedNumber 
                    value={income} 
                    formatValue={n=><FormattedNumber value={n} style="currency" currency="jod"/>}
                    />
                </h4>
            </div>
            <div className='expense'>
                <h3>Expense</h3>
                <h4>
                    <AnimatedNumber 
                    value={expense} 
                    formatValue={n=><FormattedNumber value={n} style="currency" currency="jod"/>}
                    />
                </h4>
            </div>
        </div>
    );
}

export default IncomeExpense;