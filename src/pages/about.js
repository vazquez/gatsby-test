import React from "react"
import styles from "./about.module.scss"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
console.log(styles)

// Creating a component inline
const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="Avatar"></img>
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default () =>
    <div style={{color: `teal`}}>
        <Link to="/">Home</Link>
        <Container>
            <Header text="About Gatsby"/>
            <p>This is an about page.</p>
            <User 
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                username="Jane Doe"
                excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <User
                username="Bob Smith"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
                excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        </Container>
    </div>