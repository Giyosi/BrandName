import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinAlt, faArrowRight, faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { Bounce } from "react-awesome-reveal";


class Header extends React.Component {

    state = { hideHeader: true }

    toggleHeader = () => {
        this.setState((state) => {
            console.log(state)
            return { hideHeader: !state.hideHeader }
        })
    }

    render() {
        return <header className="container  text-white">
            <div className="nav px-2 d-flex flex-wrap justify-content-between align-items-center">
                <h3>BrandName</h3>
                <div className="navmenu d-flex  d-none d-lg-flex ms-lg-5 ">
                    <a href=""><p className="fw-bold m-4 text-white">Home</p></a>
                    <a href=""><p className="fw-bold m-4 text-white">Product</p></a>
                    <a href=""><p className="fw-bold m-4 text-white">Pricing</p></a>
                    <a href=""><p className="fw-bold m-4 text-white">Contact</p></a>
                </div>
                <div className="registration ms-5 d-flex  d-none d-lg-flex">
                    <a href="" className="fw-bold d-flex align-items-center">Login</a>
                    <a href="" className="btn btn-primary fw-bold p-3 ms-3">Become a member
                        <FontAwesomeIcon icon={faArrowRight} className="ms-2 fw-bold" /></a>
                </div>
                <div className="d-lg-none">
                    <button className="btn text-white">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className="btn text-white">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                    <button className="btn text-white" onClick={this.toggleHeader}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <div className={`d-block d-lg-none w-100 text-end ${this.state.hideHeader && "hide-header" || ""}`}>
                    <Bounce>
                        <a href=""><p className="fw-bold m-4 text-white">Home</p></a>
                        <a href=""><p className="fw-bold m-4 text-white">Product</p></a>
                        <a href=""><p className="fw-bold m-4 text-white">Pricing</p></a>
                        <a href=""><p className="fw-bold m-4 text-white">Contact</p></a>
                    </Bounce>
                </div>
            </div>
            <section className=" text-center">
                <h1 className="fw-bold">Creating a Beautifull <br /> & Usefull Solutitons</h1>
                <p className="mt-5 mb-5">We know how large objects will act, but things on a <br />
                    small scale just do not act that way.</p>
                <a href="" className="btn btn-primary me-2 rounded-pill fw-bold p-2 px-4">Get Quote Now</a>
                <a href="" className="btn text-white border rounded-pill fw-bold p-2 px-4">Learn More</a>
            </section>
        </header>
    }
}

export default Header;



// constructor(props) {
//     super(props);
//     console.log(props);

//     this.state = props;
// }