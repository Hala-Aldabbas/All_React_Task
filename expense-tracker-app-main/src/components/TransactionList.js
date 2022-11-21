import React, { useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPen } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import {TransactionContext} from '../context/TransactionContext';
import {FormattedNumber} from "react-intl";


const TransactionList=()=>{
    const {transactions,deleteTransaction,update}=useContext(TransactionContext);
    function deleteList(id){
        deleteTransaction(id);
    }

    function updateList(id){
        update(id);
    }

    return(
        <div className="transaction">
                    <h2>Expense Info</h2>
            <div className="transaction-list">
                {transactions.map(transaction=>(
                <ul className="list" >
                    <li className="list-item-history" style={{color:transaction.amount<0?'red':''}}>
                        <span className="description">{transaction.description}</span>
                        <span className="amount">
                            <FormattedNumber value={transaction.amount} style="currency" currency="USD"/>
                        </span>
                    </li>
                    <li className="list-item-actions">
                        <div onClick={()=>deleteList(transaction.id)} className="delete"><FontAwesomeIcon icon={faTrash}/> Delete</div>
                        <div onClick={()=>updateList(transaction.id)} className="update"><FontAwesomeIcon icon={faPen}/> Edit</div>
                    </li>
                </ul>))} 
            </div>
        </div>
    );
}

export default TransactionList;