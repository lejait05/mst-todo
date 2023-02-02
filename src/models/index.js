// import {types, getSnapshot} from "mobx-state-tree"
import {types} from "mobx-state-tree"

const Todo = types.model({
    name: types.optional(types.string,""),
    done: types.optional(types.boolean,  false)
})
const User = types.model({
    name: types.optional(types.string, "")
})
// const john = User.create()
// const eat = Todo.create({name: "eat"})
// console.log("John:", getSnapshot(john))
// console.log("Eat TODO:", getSnapshot(eat))


const RootStore = types.model({
users: types.map(User),
    todos: types.optional(types.map(Todo), {})
})
const store = RootStore.create({users: {}
})
