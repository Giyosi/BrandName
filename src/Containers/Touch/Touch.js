import React, { Component } from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import "./Touch.css"
import TouchCard from '../../components/TouchCard'

export default class Touch extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Title heading="Get In Touch" subtitle="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics " />
                    <div className="row mt-5">
                        <TouchCard />
                    </div>
                </Container>
            </div>
        )
    }
}
