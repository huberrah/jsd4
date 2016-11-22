//Set the State
//Set the Prop


console.log('hello america');

var Contacts = React.creatClass({

        render:function() {

        return (
                <div class="Contacts">
                        <h1>Contacts</h1>
		<div className = "contacts">
		<div className ="wrapper">
		<ContactList
			changeHandler={this.changeContact}
		/>
		<h1> Contacts</h1>
			name ={ this.state.name }
			phone="(617) 555-1234"
			email = "hu@gmail.com"
				
                </div>
		</div>

         )
        }

});

//Contact Details
var ContactDetails = React.createClass({

	
	getInitialState: function() {
	return {
		isFave: false,
		name: 'Anna'
		};
	},

	changeContact: function(){
	this.setState({isFave: true, name: 'Chris'});

	},
        render: function() {
        return(
        <div className="contacts">
                <h1>Contacts </h1>

		<h1 onClick={this.changeContact}>Contacts</h1>
                 <ContactDetails>
		isFave {this.state.isFave }
		<div className = { this.props.isFave ? 'fave' : ''}">
		<p> name = {this.props.name}}
		<p>Phone: {this.props.phone}></p>
                <p>Email: {this.props.email}></p>
        </div>
	</div>
        )
        {
});

ReactDOM.render(<Contacts />, container);

//var ContactList = React.createClass({

        render: function() {
                return (
                <ul className="list" onClick={this.props.changeHandler}>
                        <li>Jack</li>
                        <li>Jill</li>
                        <li>Joan</li>
                </div>
        }

        }
});


