import React, { Component } from 'react'
import "./AboutUs.css"
import Container from '../../components/Container'
import Title from '../../components/Title'

import AboutUsCard from '../../components/AboutUsCard/AboutUsCard'

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Title heading="About Us" subtitle="111Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics " />
                    <div className="row">
                        <div className="col-md- mt-5 ">
                            <AboutUsCard ustitle="Most trusted in our field" ussubtitle="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule." />
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
