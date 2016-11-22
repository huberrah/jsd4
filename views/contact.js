console.log('hello america');

var Cotnacts = React.creatClass({

	render:function() {

	return (
		<div class="Contacts">
			<h1>Contacts</h1>
		</div>

	 )
	}

});

//Contact Details
var ContactDetails = React.createClass({
	
	render: function() {
	return(
	<div className="contacts">
		<h1>Contacts </h1>
		<ContactDetails>
		<p>Phone: {this.props.phone}></p>
		<p>Email: {this.props.email}></p>
	</div>
	)
	{
});

ReactDOM.render(<Contacts />, container);

//var ContactList = React.createClass({

	render: function() {
		return (
		<ul className="list">
			<li>Jack</li>
			<li>Jill</li>
			<li>Joan</li>
		</div>
	}

	}
});
	
