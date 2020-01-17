import React from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'

const  AppUi = (props)=> {
    return ( 
        <div>
            <h1>这是一个React文本</h1>
            <Input value={props.inputValue} style={{ width : '250px'}}  onChange={props.inputValuePut}/>
            <Button type='primary' onClick={props.ClickBtn}>确认</Button>
            <div>
                <List bordered  dataSource={props.List} renderItem={(item,index)=>(<List.Item onClick={()=>props.ItemDelete(index)}>{item}</List.Item>)}/>
            </div>
        </div>
    );
}
 
export default AppUi;