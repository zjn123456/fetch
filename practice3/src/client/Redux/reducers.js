import { combineReducers } from "redux";


const initData = {
    listData:[],
}
const  setData = (state=initData.listData,action) =>{
    switch(action.type){
    case "SET_DATA":
        return action.data
        break;
    default :
        return state;
    }
}
export default combineReducers({
    list:setData,
})