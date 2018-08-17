// Presentational Component
import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import "./App.css";

const App = () => (
  <div class="flex-container">
    <div style={{order: 3}}>1</div>
    <div style={{order: 4}}>2</div>
    <div style={{order: 1}}>3</div>
    <div style={{order: 2}}>4</div>
  </div>

)

export default App
