import './App.css';

function App() {
  
  const Task = (value) => {
    return (
      <li key={value}>{value}</li>
    );
  }

  const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

  return (
    <div className="App">
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    </div>
  );
}

export default App;
