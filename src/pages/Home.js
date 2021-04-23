import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './main.css';

function HomePage() {
	const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch()
  function onLoanHandle(){
    dispatch({
      type: 'APPLY',
      payload: 100,
    })
  }
	return (
		<div>
			<h1>Your balance is: {balance}</h1>
      { loan ? <h2>Loan applied</h2> : <h2>Apply for Loan</h2>}
      <button className="mainBtn"  onClick={onLoanHandle} disabled={loan ? true : false}>{loan ? "Loan Applied" : "I need a Loan"}</button>
		</div>
	);
}

export default HomePage;
