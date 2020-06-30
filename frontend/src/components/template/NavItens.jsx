import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
<nav className="menu">
    <Link to="/">
        <i className= {`fa fa-${props.icon1}`}></i> {props.item1}
    </Link>
    <Link to="/users">
        <i className={`fa fa-${props.icon2}`}></i> {props.item2}
    </Link>
</nav>