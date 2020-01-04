const Todo = ({todo}) => (
    <div className="panel-block">
      <div class="field">
	<label className="checkbox">
	  <input className="Control"
		 type="checkbox"
		 checked={todo.completed}
		 onChange={()=>{}}/>
	</label>
      </div>
      { todo.title }
    </div>
);

export default Todo;
