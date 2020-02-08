import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () =>
    <div style={{color: `grey`}}>
        <Link to="/">Home</Link>
        <Header text="Contact"/>
        <p>This is a contact page.</p>
    </div>