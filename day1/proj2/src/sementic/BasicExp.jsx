import React from 'react';
import './Basic.css';

const name = '홍길동';
const isLoggedIn = true;
const items = ['사과', '바나나', '체리'];


function BasicExp(props) {
    return (
        <div className='container'>
            <h1>좋은 오후</h1>
            <p>{isLoggedIn ? "로그인 상태입니다." : "로그아웃 상태입니다."}</p>
            <p style={{color: 'orange', fontSize: '30px'}}>스타일은 그대로 사용하기</p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default BasicExp;