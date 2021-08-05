export const INIT = 'option/INIT';

export const initOption = (payload) => ({
	type: INIT,
	payload,
});

const optionState = {
	category: null,
    startDate: null,

	// 이외의 것들 추가..
}

const optionReducer = (state = optionState, action) => {
	switch (action.type) {
		case INIT:
			const { category,startDate } = action.payload;
			return {
				...state,
                category,
                startDate,
			};
		default:
			return state;
	}
}

export default optionReducer;
