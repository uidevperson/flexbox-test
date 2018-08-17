// Presentational Component
import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import "./App.css";

const App = () => (
  <div class="flex-container">
    <div style={{flexGrow: 1}}>1</div>
    <div style={{flexGrow: 1}}>2</div>
    <div style={{flexGrow: 2}}>3</div>
    <div style={{flexGrow: 3}}>4</div>
  </div>

)

export default App
