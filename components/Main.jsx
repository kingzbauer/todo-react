import NewTodo from "./NewTodo";
import Todo from "./Todo";

const Component = props => (
    <nav className="panel">
      <p className="panel-heading">My Todo List</p>
      <div className="panel-block">
	<div className="container">
	  <NewTodo refresh={props.refresh} />
	</div>
      </div>
      {props.todos.map((todo, i) => (
	  <Todo todo={todo} key={i} />
      ))}
	<br/>
	<div className="panel-block">
	<input id="toggle" name="toggle" type="checkbox"/>
	<label htmlFor="toggle">Show completed</label>
    </div>
    </nav>
);

export default Component;
