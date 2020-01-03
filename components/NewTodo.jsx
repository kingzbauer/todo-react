import fetch from "isomorphic-unfetch";

class NewTodo extends React.Component {
    constructor(props) {
	super(props);

	this.initialState = {
	    title: '',
	    loading: false
	}

	this.state = this.initialState;

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.uploadTodo = this.uploadTodo.bind(this);
    }

    handleChange(e) {
	this.setState({title: e.target.value});
    }

    handleSubmit(e) {
	e.preventDefault();
	this.uploadTodo();
    }

    async uploadTodo() {
	let payload = {title: this.state.title};

	let resp = await fetch(`http://${process.env.apiHost}/api/v1/todos/`, {
	    body: JSON.stringify(payload),
	    method: 'POST',
	    headers: {
		'Content-Type': 'application/json'
	    }
	    
	});
	this.props.refresh();

	this.setState(this.initialState);
    }

    render() {
	let buttonDisabled = this.loading || this.state.title.length == 0;
	
	return (
	    <form onSubmit={this.handleSubmit}>
	      <div className="field has-addons columns is-gapless">
		<div className="control column">
		  <input className="input" value={this.state.title}
			 type="text" placeholder="New todo"
			 onChange={this.handleChange }/>
		</div>
		<div className="control column is-narrow">
		  <button className="button" disabled={buttonDisabled}>Add</button>
		</div>
	      </div>
	    </form>
	);
    }
}

export default NewTodo;
