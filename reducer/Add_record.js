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
            return {...state,curStock: {...curStock, stock:action.stock}}
        default:
            return state
    }
}