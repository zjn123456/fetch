import React, { Component } from 'react'
import {combineReducers} from 'redux'
import {connect} from 'react-redux'
class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div className='box'>
                <h1>购物车</h1>
            </div>
        )
    }
    componentDidMount(){
        this.props.getData()
    }
}
const mapStateToProps = (state) =>{
    console.log(state)
    return {
        list:state.list,
    }
}
function mapDispatchToProps(dispatch){
    return{
        getData(){
            console.log(111)
            fetch("./data/data.json").then(res=>res.json()).then(res=>{
                console.log(res);
                dispatch({
                    type:"SET_DATA",
                    data:res.aa,
                })
            })
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop);
