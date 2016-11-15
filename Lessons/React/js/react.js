//create a real react component

var contacts = document.querySelector("#contacts");

var App = React.createClass({
	render: function() {
		console.log('render');
		return(
		<p>Hello world!</p>
		)
	}
});

ReactDOM.render(<App/>, contacts);


