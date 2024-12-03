import { useState } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import './App.css'
import Search from './components/Search'
import Filter from './components/Filter'

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ])
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Asc');

  // Actions
  // Todos - State
  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    }]

    setTodos(newTodos)
  }
  const completeTodo = (id) => {
    const newTodos = [...todos]
    
    newTodos.map((todo) => todo.id === id 
      ? todo.isCompleted = !todo.isCompleted 
      : todo)

    setTodos(newTodos)
  }
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id != id)

    setTodos(filteredTodos)
  }

  return (
    <div className='app'>
      <h1> Lista de Tarefas </h1>

      <Search search={search} setSearch={setSearch} />

      <Filter 
        filter={filter} 
        setFilter={setFilter} 
        setSort={setSort}
      />

      <div className="todo-list">
        {todos
          .filter((todo) => {
            if(filter === 'Completed') return todo.isCompleted

            if(filter === 'Incompleted') return !todo.isCompleted

            return todo
          })
          .filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .sort((a, b) => sort === 'Asc' 
            ? a.text.localeCompare(b.text) 
            : b.text.localeCompare(a.text))
          .map((todo) => <Todo
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />)}
      </div>

      <TodoForm addTodo={addTodo} />
    </div>
  );
}


// filter === 'All' 
// ? todo 
// : filter === 'completed' 
//   ? todo.isCompleted 
//   : !todo.isCompleted