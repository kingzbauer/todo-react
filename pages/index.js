import Layout from "../components/Layout";
import NewTodo from "../components/NewTodo";
import Main from "../components/Main";
import "../styles/style.scss";
import fetch from "isomorphic-unfetch";

class Page extends React.Component {
    constructor(props) {
	super(props);

	this.state = {
	    todos: props.todos
	};

	this.refresh = this.refresh.bind(this);
    }

    static async getTodos() {
	let resp = await fetch('http://localhost/api/v1/todos/');
	let todos = await resp.json();
	
	console.log(`async Todos: ${todos.length}`);

	return { todos };
    }

    async refresh() {
	let { todos } = await Page.getTodos();
	console.log(todos);
	this.setState({ todos });
    }

    render() {
	return (
	    <Layout>
	      <div className="columns is-mobile is-centered">
		<div className="column is-half">
		  <Main todos={ this.state.todos } refresh={this.refresh} />
		</div>
	      </div>
	    </Layout>
	);
    }
}

Page.getInitialProps = async () => {
    let resp = await fetch('http://localhost/api/v1/todos/');
    let todos = await resp.json();
    
    console.log(`Todos: ${todos.length}`);

    return { todos };
};

export default Page;
