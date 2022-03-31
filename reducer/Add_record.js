// define function in reducer for Adding record //
export const changeCurStock=(stock)=>
(
    {
        type:"changeCurStock",
        stock
    }
)
// define init state in reducer for Adding record //
const initialState={
    curStock:{
        stock:''
    },
    allRecord:[]
}
export default AddRecord=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "changeCurStock":
            {
                state.curStock.stock=action.stock
                return state
            }
        default:
            return state
    }
}