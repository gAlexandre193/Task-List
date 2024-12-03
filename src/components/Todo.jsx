export default function Todo({ todo, completeTodo, removeTodo }) {
  return (
    <div key={todo.id} className="todo">
      <div className="content">
        <p> {todo.text} </p>

        <p className="category">{todo.category}</p>
      </div>

      <div>
        <button 
          className="complete"
          onClick={() => completeTodo(todo.id)}
        > 
          Completar 
        </button>

        <button 
          className="remove"
          onClick={() => removeTodo(todo.id)}
        > 
          X 
        </button>
      </div>
    </div>
  );
}