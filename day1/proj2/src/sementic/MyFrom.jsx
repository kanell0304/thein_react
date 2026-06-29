import React from 'react';
import { useState } from 'react';

function MyFrom(props) {

    const [user, setUser] = useState({
        lastname: "",
        firstname: "",
        email: ""
    });

    const handleChage = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        alert(`Hello ${user.firstName} ${user.lastName}`);
    }

    return (
        <div>
            <hr />
            <h1>MyForm</h1>
            <form onSubmit={handleSubmit}>
                <label>이름</label>
                <label typeof='text' name="lastname" onChange={handleChage} value={user.lastName}/>
                <label>성</label>
                <label typeof='text' name="firstname" onChange={handleChage} value={user.firstName}/>
                <label>이메일</label>
                <label typeof='text' name="email" onChange={handleChage} value={user.email}/>
                <input type='submit' value="등록" />
            </form>
        </div>
    );
}

export default MyFrom;