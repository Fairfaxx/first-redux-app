const initialState = {
	loan: false,
	balance: 0
};

function loanReducer(state = initialState, action) {
	switch (action.type) {
		case 'APPLY':
			return { loan: true, balance: state.balance + action.payload };
		default:
			return state;
	}
}

export default loanReducer;
