import React, { Component } from 'react';
import Container from '../../components/Container';
import Title from '../../components/Title';
import "./Pricing.css"
import PricingCard from '../../components/PricingCard';

const data = [
    {
        title: "FREE",
        price: "0$"
    },
    {
        title: "Silver",
        price: "9.99$"
    },
    {
        title: "GOLD",
        price: "19.99$"
    },
]

export default class Pricing extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Title heading="Pricing" subtitle="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics " />
                    <div className="row  text-dark fw-bold">
                        <div className="row mt-5">
                            {data.map((value, index) => {
                                return  <div className="col-md-6 col-lg-4 m-0 p-0">
                                    <PricingCard value={value} />
                                </div>
                            })}
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
