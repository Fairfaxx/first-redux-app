import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './main.css';

const WithdrawPage = () => {
    const balance = useSelector((state) => state.balanceReducer.balance);
    const dispatch = useDispatch()
    function onWithdrawHandle(){
        dispatch({
            type: 'WITHDRAW',
            payload: 10
        })
    }
    return (
        <div>
            <h1>Balance: {balance}</h1>
            <button className="mainBtn" onClick={onWithdrawHandle}>Withdraw</button>
        </div>
    )
}

export default WithdrawPage;