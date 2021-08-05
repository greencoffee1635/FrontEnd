import { createAction, handleActions } from 'redux-actions';

const INIT = 'option/INIT';
export const init = createAction(INIT);

const optionState = {
    category: "",
    startDate: "",
	// 이외의 것들 추가..
}

const option = handleActions({
	[INIT]: (state, action) => {
		const { category, startDate } = action.payload;
		return {
			...state,
			category,
            startDate,
		};
	}
}, optionState);

export default option;
