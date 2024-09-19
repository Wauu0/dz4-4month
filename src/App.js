import React, { useState, useEffect } from 'react';
import MainPage from "./mainpage/MainPage";
import Error from "./error/Error";


function User() {
        const [user, setUser] = useState({ name: '', lastname: '' });
        const [page, setPage] = useState('');
        useEffect(() => { const name = prompt("Введите ваше имя:");
        const lastname = prompt("Введите вашу фамилию:");
        if (name === 'john' && lastname === 'johns') { setUser({ name, lastname });
            setPage('main'); } else { setUser({ name, lastname }); setPage('error'); } }, []);


    return (
        <div> {page === 'main' ? (<MainPage user={user} /> ) : ( <Error user={user} /> )} </div>
    );
    }
export default User;