import React, { Component } from 'react';
import AppUi from './AppUi'
// import 'antd/dist/antd.css'
// import {Button,Input,List} from 'antd'

// import axios from 'axios'
import store from './store'
// import {INPUT_VALUE_PUT,ADD_ITEM,ITEM_DELETE} from './store/actionTypes'
import { changeValuePutAction,AddItemAction,IteMDeleteAction
    // ,GetListAction
    ,getListTodo} from './store/actionCreators'
// const data=[
//     // '急速飞驰','飞驰人生','人生如戏','入戏人生'
// ]
class App extends Component {
    componentDidMount() {
        const action =getListTodo()
        store.dispatch(action) 
        // axios.get('http://rap2api.taobao.org/app/mock/242751/movielistinfo').then((res)=>{
        //     let data=res.data
        //     const action =GetListAction(data)
        //     store.dispatch(action)
        // })
    }
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.storeChange=this.storeChange.bind(this)  // 转变this指向
        this.ClickBtn=this.ClickBtn.bind(this)
        store.subscribe(this.storeChange) // 订阅redux的状态
    }
    inputValuePut(e) {
        const action=changeValuePutAction(e.target.value)
        // const action={
        //     type:INPUT_VALUE_PUT,
        //     value:e.target.value
        // }
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    ClickBtn() {
        const action = AddItemAction()
        // const action={
        //     type:ADD_ITEM,
        // }
        store.dispatch(action)
    }
    ItemDelete (index){
        console.log(index)
        const action=IteMDeleteAction(index)
        // const action ={
        //     type:ITEM_DELETE,
        //     index:index
        // }
        store.dispatch(action)
    }
    render() { 
        return ( 
            <div> 
                <AppUi inputValue={this.state.inputValue} List={this.state.List} inputValuePut={this.inputValuePut}
                ClickBtn={this.ClickBtn} ItemDelete={this.ItemDelete.bind(this)} />
            </div>
            // <div>
            //     <h1>这是一个React文本</h1>
            //     <Input value={this.state.inputValue} style={{ width : '250px'}}  onChange={this.inputValuePut}/>
            //     <Button type='primary' onClick={this.ClickBtn}>确认</Button>
            //     <div>
            //         <List bordered  dataSource={this.state.List} renderItem={(item,index)=>(<List.Item onClick={this.ItemDelete(index)}>{item}</List.Item>)}/>
            //     </div>
            // </div>
         );
    }
}
 
export default App;