import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { addTodo, deleteTodo } from './todoSlice';

function MyApp(props) {

    const [todoText, setTodoText] = useState("");

    const count = useSelector((state) => state.counter.value);
    const todoList = useSelector((state) => state.todo.list);

    const dispatch = useDispatch();

    const handleClickAddTodo = () => {
        dispatch(addTodo(todoText));
        setTodoText("");
    }

    return (
        <>  
            <h1>{count}</h1>
            <button onClick={() => {dispatch(increment())}}>1 더하기</button>
            <button onClick={() => {dispatch(decrement())}}>1 빼기</button>
            <hr />
            <input type='text' onChange={(e) => setTodoText(e.target.value)} value={todoText} placeholder='할 일을 입력해주세요.' />
            <button onClick={handleClickAddTodo}>Todo 생성</button>
            {todoList.map((todo) => (
                <div key={todo.id}>
                    <p>{todo.text}</p>
                    <button onClick={() => {dispatch(deleteTodo(todo.id))}}>Todo 삭제</button>
                </div>
            ))}
        </>
    );
}

export default MyApp;