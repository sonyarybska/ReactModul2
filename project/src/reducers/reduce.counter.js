let reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            if (action.payload === 'a') {
                return {...state, a: state.a + 1}
            } else if (action.payload === 'b') {
                return {...state, b: state.b + 1}
            } else if (action.payload === 'c') {
                return {...state, c: state.c + 1}
            }
            break;
        case 'DEC':
            if (action.payload === 'a') {
                return {...state, a: state.a - 1}
            } else if (action.payload === 'b') {
                return {...state, b: state.b - 1}
            } else if (action.payload === 'c') {
                return {...state, c: state.c - 1}
            }
            break;
        default:
            return {...state};
    }
}
export default reducer;