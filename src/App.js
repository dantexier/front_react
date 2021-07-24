import './App.css';
import {cleanup} from "@testing-library/react";
import React, { useEffect, useState } from "react";

function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const [todos, setTodos] = useState()
  const fetchApi = async () =>{
    const response = await fetch (url)
    console.log(response.status)
    const responseJSON = await response.json()
    setTodos (responseJSON)
    console.log(responseJSON)
  }
  useEffect(() => {
    fetchApi()
  },[])
  return (
    <div className="App">
      <div className="App-HI">
          Hola Mundo en Herramientas de IS
          <ul>
            {!todos?'Cargando...':
                todos.map((todo,index)=>{
                  return<li key={index}>{todo.title}</li>
                    }

                )

            }
          </ul>
      </div>
    </div>
  );
}

export default App;
