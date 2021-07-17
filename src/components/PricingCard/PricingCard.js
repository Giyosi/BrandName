import { faCheckCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import "./PricingCard.css";


export default class PricingCard extends Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = props.value;
    }

    render() {
        return (
            <div className="bg-white text-center m-2 p-5  card rounded">
                <h4 className="fw-bold">{this.state.title}</h4>
                <p className=" m-4 text-secondary">Organize across all apps by hand</p>
                <h2 className="text-primary">{this.state.price}</h2>
                <p className="text-primary">Per Month</p>
                <button className="bg-primary text-white fw-bold border-0 p-2 rounded-1">Try for free</button>
                <ul className="p-0 text-start text-secondary">
                    <li> <FontAwesomeIcon icon={faCheckCircle} className="text-success" /> Unlimited product updates</li>
                    <li> <FontAwesomeIcon icon={faCheckCircle} className="text-success" /> Unlimited product updates</li>
                    <li> <FontAwesomeIcon icon={faCheckCircle} className="text-success" /> Unlimited product updates</li>
                    <li> <FontAwesomeIcon icon={faCheckCircle} /> 1GB  Cloud storage</li>
                    <li> <FontAwesomeIcon icon={faCheckCircle} /> Email and community support</li>
                </ul>
            </div>
        )
    }
}
