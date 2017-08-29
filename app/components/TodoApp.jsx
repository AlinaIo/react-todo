var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'finish the tutorial'
                }, {
                    id: 2,
                    text: 'write the article'
                }, {
                    id: 3,
                    text: 'party'
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        alert('new todo: ' + text);
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;
