// Write your code here
import "./index.css"

const TodoItem =props=>{
    const {todoDetails, deleteTodo}=props
    const {id,title}=todoDetails

    const onDelete=()=>{
        deleteTodo(id)
    }

    return(
        <li className="Todo-item">
        <p className="Title">{title}</p>
        <button type="button" className="button" onClick={this.onDelete}>Delete</button>
        </li>
    )
}

export default TodoItem