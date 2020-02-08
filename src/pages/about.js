import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () =>
    <div style={{color: `teal`}}>
        <Link to="/">Home</Link>
        <Header text="About Gatsby"/>
        <p>This is an about page.</p>
    </div>