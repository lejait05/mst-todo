import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {types, getSnapshot} from "mobx-state-tree"
import {types} from "mobx-state-tree"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const Todo = types.model({
//     name: types.optional(types.string,""),
//     done: types.optional(types.boolean,  false)
// })
// const User = types.model({
//     name: types.optional(types.string, "")
// })
// const john = User.create()
// const eat = Todo.create({name: "eat"})
// console.log("John:", getSnapshot(john))
// console.log("Eat TODO:", getSnapshot(eat))

const Todo = types.model({
    name: types.optional(types.string,""),
    done: types.optional(types.boolean,  false)
})
const User = types.model({
    name: types.optional(types.string, "")
})
const RootStore = types.model({
    users: types.map(User),
    todos: types.optional(types.map(Todo), {})
})
const store = RootStore.create({users: {}
})








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
