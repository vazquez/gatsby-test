import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default () =>
    <div style={{color: `purple`}}>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Container>
            <Header text="Aww yeah..."/>
            <p>What a world!</p>
            <img src="https://source.unsplash.com/random/400x200" alt="Random unsplash" />
        </Container>
    </div>