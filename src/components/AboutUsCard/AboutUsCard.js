import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import "./AboutUsCard.css";
import play from "../../img/Vector.png"
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';


export default class AboutUsCard extends Component {
    render() {
        return (
            <div className="row">
                <div className="aboutUsCardimg col-lg-6 mb-4">
                    <img src="video1.png" className="w-100 video" alt="" />
                    <div className="playicon">
                        <img src={play} alt="rasm" />
                    </div>
                </div>
                <div className="col-lg-6 d-flex  mb-4">
                    <div className="row justify-content-end align-items-center">
                        <div className="col-lg-9">
                            <h3>{this.props.ustitle}</h3>
                            <p>{this.props.ussubtitle}</p>
                            <ul className="p-0">
                                <li className="d-flex align-items-center mb-3">
                                    <FontAwesomeIcon className="address" icon={faAddressCard} />
                                    <div className="ms-3">
                                        <h4 className="subtitle mb-0">the quick fox jumps over the lazy dog</h4>
                                        <p className=" mb-0">Things on a very small scale ...</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <FontAwesomeIcon className="address" icon={faTwitch} />
                                    <div className="ms-3">
                                        <h4 className=" mb-0 subtitle">the quick fox jumps over the lazy dog</h4>
                                        <p className=" mb-0">Things on a very small scale ...</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
