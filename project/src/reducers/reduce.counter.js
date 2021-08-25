let reducer=(state,action)=>{
    switch (action.type){
        case 'INC_BY_10':
            return {...state,obj:state.obj+10}
        case 'DEC_BY_2':
            return {...state,obj: state.obj-2}
        default:
            return {...state}
    }
}
export default reducer;