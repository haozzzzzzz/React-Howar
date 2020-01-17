import {INPUT_VALUE_PUT,ADD_ITEM,ITEM_DELETE,GET_LIST} from './actionTypes'
const defaultState ={
    inputValue:'测试文本',
    List:[]
}
export default (state=defaultState,action)=>{
    if(action.type===INPUT_VALUE_PUT){
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }
    if(action.type===ADD_ITEM){
        let  newState=JSON.parse(JSON.stringify(state))
        newState.List.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type===ITEM_DELETE){
        let  newState=JSON.parse(JSON.stringify(state))
        newState.List.splice(action.index,1)
        return newState
    }
    if(action.type===GET_LIST){
       let newState=JSON.parse(JSON.stringify(state))
       newState.List = action.data.List.data
       return newState
    }
    return state
}