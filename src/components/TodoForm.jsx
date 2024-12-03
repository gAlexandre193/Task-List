import { useState } from 'react'

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')
  const [category, setCategory] = useState('')

  // Actions
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || !category) return;

    // Adicionar Tarefa
    addTodo(value, category)

    // Limpar Campos
    setValue('')
    setCategory('')
  }

  return (
    <div className="todo-form">
      <h2> Criar tarefa: </h2>
    
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Digite o título" 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value=""> Selecione uma categoria </option>
          <option value="Trabalho"> Trabalho </option>
          <option value="Pessoal"> Pessoal </option>
          <option value="Estudos"> Estudos </option>
        </select>

        <button type="submit"> Enviar Tarefa </button>
      </form>
    </div>
  )
}