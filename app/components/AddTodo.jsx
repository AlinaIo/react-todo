var React = require('react');

var AddTodo = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var text = this.refs.myTodo.value;
        if (text !== '') {
            this.refs.myTodo.value = '';
            this.props.onAddTodo(text);
        } else {
            this.refs.myTodo.focus();
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="myTodo" placeholder="enter what you want to do" />
                    <button className="button hollow">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;
