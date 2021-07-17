import { faEnvelope, faMapMarked, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import "./TouchCard.css"

export default class TouchCard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <div className="bg-white text-center m-2 p-5  cardon rounded">
                        <FontAwesomeIcon icon={faPhoneAlt} className="icon1" />
                        <p className="fw-bold text-secondary mt-5">georgia.young@example.com</p>
                        <p className=" text-secondary">georgia.young@ple.com</p>
                        <h5 className="text-dark get">Get Support</h5>
                        <button className="border border-primary bg-white text-primary fw-bold p-2 rounded-pill w-100">Submit Request</button>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bg-white  text-center m-2 p-5  cardon rounded">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon1" />
                        <p className="fw-bold text-secondary mt-5">georgia.young@example.com</p>
                        <p className=" text-secondary">georgia.young@ple.com</p>
                        <h5 className="text-dark get">Get Support</h5>
                        <button className="border border-primary bg-white text-primary fw-bold p-2 rounded-pill w-100 ">Submit Request</button>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bg-white text-center text-sm-center m-2 p-5  cardon rounded">
                        <FontAwesomeIcon icon={faEnvelope} className="icon1" />
                        <p className="fw-bold text-secondary mt-5">georgia.young@example.com</p>
                        <p className=" text-secondary">georgia.young@ple.com</p>
                        <h5 className="text-dark get">Get Support</h5>
                        <button className="border border-primary bg-white text-primary fw-bold p-2 rounded-pill w-100">Submit Request</button>

                    </div>
                </div>
            </div>
        )
    }
}
