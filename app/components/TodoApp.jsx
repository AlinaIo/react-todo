var React = require('react');
var TodoList = require('TodoList');
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
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        )
    }
});

module.exports = TodoApp;
