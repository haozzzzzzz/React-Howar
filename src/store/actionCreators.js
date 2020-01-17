import {INPUT_VALUE_PUT,ADD_ITEM,ITEM_DELETE,GET_LIST} from './actionTypes'
import axios from 'axios'

export const changeValuePutAction =(value)=>({
    type:INPUT_VALUE_PUT,
    value
})

export const AddItemAction =()=>({
    type:ADD_ITEM,
})

export const IteMDeleteAction =(index)=>({
    type:ITEM_DELETE,
    index
})

export const GetListAction =(data)=>({
    type:GET_LIST,
    data
})

export const getListTodo=()=>{
    return  (dispatch)=>{
        axios.get('http://rap2api.taobao.org/app/mock/242751/movielistinfo').then((res)=>{
            const data =res.data
            const action = GetListAction(data)
            dispatch(action)
        })
    }
}