import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchTodos} from '../../actions/todosPage/index';


class TodosPage extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        const url = './test.json';
        const {fetchTodos} = this.props;
        fetchTodos(url);
    }
   /* componentDidMount(){
        const url = './test.json';
        const {fetchTodos} =  this.props;
        fetchTodos(url);
    }*/
    handleClick(){
        const url = './test.json';
        const {fetchTodos} = this.props;
        fetchTodos(url);
    }
    renderData(){
        const {todos} = this.props;
        if(todos.isLoading){
            return (
                <span>loading</span>
            )
        }
        if (todos.error) {
            return (
                <h4>something error</h4>
            )
        }
        if (todos.data.length > 0){
            return (
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>capital</th>
                        <th>region</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        todos.data.map((todo,index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{todo.name}</td>
                                    <td>{todo.capital}</td>
                                    <td>{todo.region}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            )
        }
    }

    render() {
        return (<div className="container" id="todo-list">
            <h3>Hello,world.</h3>
            <button className="btn btn-default" onClick={this.handleClick.bind(this)}>获取数据</button>
            <div>
                {this.renderData()}
            </div>
        </div>)
    }

}
export default connect(state => ({
    todos: state.todos
}),dispatch => ({
    fetchTodos: bindActionCreators(fetchTodos,dispatch)
}))(TodosPage);