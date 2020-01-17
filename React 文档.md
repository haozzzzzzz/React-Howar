# 1.	React--入门	 (`学习之路`)

### 1	React跟Vue的对比

#### 	React 优点                                                                      Vue优点

- React的生态强大										有丰富的API,实现起来更简单快速		
- 上手简单                                                     响应式编程-组件化-双向数据绑定-轻量级框架
- 社区强大
- 函数式编程-组件化-单项数据流-轻量级框架      
- **函数式编程:代码更清晰,每个功能都是一个函数,更容易实现前端自动化测试**

#### React跟Vue的共同点

- 都是**Virtual Dom** (**虚拟Dom**)

- 提供 **响应式** 和 **组件化** 的视图组件

- 上手简单,利于开发

### 2	React  环境搭建

  ```jsx
// 安装步骤
1. npm install -g create-react-app (全局安装官方脚手架)
2. 进入项目目录  cd 项目名字
3. create-react-app react-01-demo  (使用官方脚手架.名字不能小写)
4. 第一个React项目创建完成!
  ```

### 3.	脚手架生成文件详细介绍

```javascript
1.	node_modules	项目的依赖包
2.	public	公共模板 图标 css 等静态资源
3.	src		主要代码编写文件
4.	gitignore	这个是git的选择性上传的配置文件，
5.	package.json	这个文件是webpack配置和项目包管理文件
6.	README.md	主要作用就是对项目的说明
```

### 4.	React-Jsx  的小知识点

```jsx
1.	当遇到 `< ，JSX就当作HTML解析，遇到 { 就当JavaScript解析`
2.	React跟Vue一样,`组件最外层要加div包裹` 如果用flex布局,不需要外部包裹div,可以使用`<Fragment>标签`
    import React,{Component,Fragment } from 'react' 引入使用即可  `该标签==>检查元素并没有外部包裹的div`
3.	类名 需要用 `className='my-class'` 固定写法
4.	需要将`js`通过`export`暴露给外部
5.	render(){ 
    	return (
            <div calssName='my-class'>
                XXXX  // 通常写法
            </div>
        )
	}
6.	自定义`组件开头首字母需要大写`
7.	React是禁止直接操作state的,操作state请使用  this.setState({}) 注意 this.setState是异步操作
	 this.state = {
         inputValue:'',
         list:['急速飞车','侠盗飞车']
     }
	操作state 如下:
    this.setState({
        list:[...this.state.list,this.state.inputValue],
        inputValue:''
    })
8.	写注释记得换行 或者 使用vs code 快捷键 ctrl+ / 
9.	支持输入 富文本编辑 dangerouslySetInnerHTML 用法查看react-01-demo
10.	label标签的踩坑 React中推荐使用HtmlFor 而不是for
11.	快捷键插件 Simple React Snippets 贼好用!!!
12. this指向的方式 
    1. 函数=()=>{} 
    2. 在构造器里面  this.函数=this.函数.bind(this)
    3. 在申明的时候  onChange={()=>this.函数(传参)} 即可 
```

### 5.	React  父子通讯==>进阶

```javascript
// 父组件向子组件传递内容，靠属性的形式传递。 
父到子 <Test01 content={item}/>   子接收属性 {this.props.content}
// 子组件向父组件传递内容,
先父给子传方法 然后子调用父的方法
//		属性:文本内容		Key值	索引	父传过来的方法
<Test01 content={item} key={index} index={index} deleteItem={this.deleteLi.bind(this)}/>
// 	子组件调用父组件方法
handleClick(){
    this.props.deleteLi(this.props.index)
}
```

### 6.	React  单项数据流

- 通过父子组件传值,子组件接收父组件传递过来的值,只能使用,并不能修改 -- 叫做单向数据流

### 7.     React  的调试工具安装

```
// 这里请看 16 讲  react-tool-dev
```

### 8. 	PropTypes  的使用==>高级

```jsx
// 传值校验 避免后期混乱 保证业务逻辑清晰  校验传值过来的属性是什么类型的  类似TypeScript
Test01.propTypes={
    content:PropTypes.string.isRequired, // .isRequired表示必传
    deleteItem:PropTypes.func,
    index:PropTypes.number
} // 这边传过来的是默认值   了解请前往 官方文档
Test01.defaultProps = {
    index:1
}
```

### 9.	React -ref的使用方法

```jsx
// 不适用 ref     取值 input框改变的值 
inputChange(e){
    this.setState({
        inputValue:e.target.value       //   <===
    })
}
<input value={this.state.inputValue} onChange={ this.inputChange }/>
// 使用ref  取值 input框改变的值    不太推荐使用 React是数据驱动 Ref是操作Dom
inputChange(e){
    this.setState({
        inputValue:this.input.value      //   <===
    })
}
<input value={this.state.inputValue} onChange={ this.inputChange } 
    ref={(input)=>{this.input=input}} />
```

### 10. 	React- 生命周期 

```jsx
// 挂载阶段   挂载前 挂载后 在页面刷新的时候 执行一次  render 只会在props跟state发生变化才会执行
1. componentWillMount() {
     console.log('componentWillMount----组件将要挂载到页面的时刻')
}
2. render(){
    console.log('render---组件挂载中.......')
}
3. componentDidMount(){
    console.log('componentDidMount----组件挂载完成的时刻执行')
}
// 更新阶段  
4. shouldComponentUpdate(){ // 有两个参数 nextProps nextState 变化后的属性/状态  
    //  一般在这里优雅解决性能问题 return true / false 
    console.log('shouldComponentUpdate---组件发生改变前执行')
    return true    // 返回true 同意组件更新  false 不同意组件更新
}
5. componentWillUpdate(){   // 更新生命周期同意之后执行,将被更新 更改
    console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
}   // 一般是 同意更新吗 4-> 将要被更新 5 -> render 2-> 更新完毕 6   数字代表生命周期函数钩子
6. componentDidUpdate(){  // 组件更新的最后一个环节 组件更新完毕了
    console.log('componentDidUpdate----组件更新之后执行')
}
7. componentWillReceiveProps(){ // 子组件接收到父组件传递过来的值 就会触发这个钩子函数
    console.log('child - componentWillReceiveProps')
}
8. //当组件从页面中删除的时候执行 结束整个生命周期
componentWillUnmount(){
    console.log('child - componentWillUnmount')
}
```

### 11. React - Axios的请求使用

```jsx
这边推荐使用RAP2 / easy-mock 模拟请求假数据
// 官方地址  ===> http://rap2.taobao.org/account/login
步骤:1. 注册 2.新建 3. 创建接口 4. 编辑-写数据 5. 保存 6.点击 测试 生成链接 7. 项目中引入即可 
```

# 2.	React--进阶 (`进阶之路`)

### 1. 	Redux 了解工作原理

```jsx
1.	安装redux yarn add redux --save (`网不好用cnpm下载`)
2.	在src下创建store仓库文件夹,编写index.js 仓库文件      //  store只是一个仓库 没有管理能力
    import { createStore } from 'redux'  // 引入createStore方法
    const store = createStore()          // 创建数据存储仓库
    export default store                 //	暴露出去	
3.	在store文件夹下创建reducers.js 数据管理文件      //  reducers 管理数据的
    const defaultState = {}  //	默认数据
    export default (state = defaultState,action)=>{  //	就是一个方法函数
        //state: 指的是原始仓库里的状态 action: 指的是action新传递的状态。
        console.log(state,action)   //   <==== 从步骤6传递上来的更改的数据
        if(action.type === 'changeInput'){
            // !!!!  Reducer里只能接收state，不能改变state。
            let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
            newState.inputValue = action.value
            return newState 
        }
        return state 
    }    
4.	在store中进入reducers,并且以传参方式传给createStore(reducers)
	import { createStore } from 'redux'  //  引入createStore方法
    import reducer from './reducer'    
    const store = createStore(reducer) // 创建数据存储仓库
    export default store   //	暴露出去
5.	在要使用数据的组件中,引入并使用
	import store from './store'    //  import store from './store/index'  都可以
    class TodoList extends Component {
    constructor(props){
        super(props)
        //关键代码-----------start
        this.state=store.getState();   // 通过store.getState()获取到值,并传值给组件的state仓库
        //关键代码-----------end
        console.log(this.state)    //1-5 是redux的数据影响组件    6- 10是组件变动影响redux//
    }
6.	constructor(props){
        super(props)
        this.state=store.getState();
        this.changeInputValue= this.changeInputValue.bind(this)
    }
	changeInputValue(e){   // 组件内 input框改变触发的时间
        console.log(e.target.value)
        const action ={     //  改变redux的值 需要创建Action 两个值 1.对Action的描述 2.要改变的值
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action) // 通过dispatch()方法传递给store
    }
7.	// 第6步,组件已经把更新的数据 传递给redux了, 组件更新了数据  组件视图也要更新
	constructor(props){
        super(props)
        this.state=store.getState();
        this.changeInputValue= this.changeInputValue.bind(this)
        //----------关键代码-----------start
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
        //----------关键代码-----------end
    }
	storeChange() { // 上面订阅redux的状态  达到更改同步
        this.setState(store.getState())   // 重新改变store的值 重写 
    }
```

### 2. 	使用antd

```jsx
1.	这边建议使用cnpm i antd -save 下载 推荐使用yarn cnpm  npm install -g yarn   yarn add antd --save
2.	引入样式文件 引入组件
3.	调用即可 具体使用查看 antd 官网
4.	把Ui组件改成无状态组件    // UI组件改成无状态组件可以 ====> 提高程序性能  
```

### 3.	使用	redux-thunk 