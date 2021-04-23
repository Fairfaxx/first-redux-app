import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './main.css';

function DepositePage(){
    const balance = useSelector((state) => state.balanceReducer.balance);
    const dispatch = useDispatch()
    function onDepositHandle(){
        dispatch({
            type: 'DEPOSIT',
            payload: 10
        })
    }
    return(
        <div>
            <h1>Balance: {balance}</h1>
            <button className="mainBtn"  onClick={onDepositHandle}>Deposit</button>
        </div>
    )
}

export default DepositePage;