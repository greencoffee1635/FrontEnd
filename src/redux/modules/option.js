
export const INIT = 'option/INIT';

export const initOption = (payload) => ({
	type: INIT,
	payload,
});

const optionState = {
	gender: null,
	age: null,
	companion: null,
	// 이외의 것들 추가..
}

const optionReducer = (state = optionState, action) => {
	switch (action.type) {
		case INIT:
			const { gender, age, companion } = action.payload;
			return {
				...state,
				gender,
				age,
				companion,
			};
		default:
			return state;
	}
}

export default optionReducer;

