import React,{useContext} from 'react';
import AnimatedNumber from "animated-number-react";
import '../App.css';
import {TransactionContext} from '../context/TransactionContext';
import {FormattedNumber} from "react-intl";

const Balance=()=>{
    const {totalBalance}=useContext(TransactionContext);

    return(
        <div className='balance'>
            
            <p>
                <h2 style={{marginBottom: '60px'}}>Balance</h2> 
                <AnimatedNumber 
                value={totalBalance} 
    formatValue={n=><FormattedNumber value={n} style="currency" currency="jod"/>}
                />
            </p>
        </div>
    );
}

export default Balance;