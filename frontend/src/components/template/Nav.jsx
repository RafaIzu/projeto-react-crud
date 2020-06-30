import './Nav.css'
import React from 'react'
import NavItens from './NavItens'

export default props =>
    <aside className="menu-area">
        <NavItens icon1="home" icon2="users" item1="Início" item2="Usuários" />
    </aside>