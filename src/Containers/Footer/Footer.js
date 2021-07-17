import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css"



class Column extends React.Component {
    render() {
        const { column: { title, list, colProps } } = this.props;
        console.log(title, list);
        return (
            <div className={colProps || `col-sm-6 col-md-4 col-lg-2`}>
                <p className="fw-bold text-white">{title}</p>
                {list.map((value, index) => {
                    return <a href={value.url} className={`d-block my-2 text-secondary ${value.className || ""}`}>{`${value.title}`}</a>
                })}
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        const { colProps, data } = this.props;
        return (<div className="footer py-4">
            <div className="container">
                <div className="d-flex justify-content-between mb-5">
                    <h3>BrandName</h3>
                    <div className="icons">
                    <FontAwesomeIcon icon={faInstagram} className="me-4 text-primary" />
                    <FontAwesomeIcon icon={faFacebook} className="me-4 text-primary" />
                    <FontAwesomeIcon icon={faTwitter} className="me-4 text-primary" />
                    </div>
                </div> <hr className="d-none d-lg-block" />
                <div className="row my-5">
                    {this.props.data.map((column, index) => {
                        return <Column column={column} colProps={colProps} />
                    })}
                    <div className=" col-sm-6 col-md-4 col-lg-2">
                    <p className="fw-bold text-white">Get In</p>
                    <p className="fw-bold text-white">Touch</p>
                    <div className="d-flex ">
                    <input type="text" placeholder="Your Email" className="p-3 rounded border-0" /> <button className="btn btn-primary border-white">Subscribe</button>
                    </div>
                    <p className=" text-white"> Lorem impsum dolor amit</p>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Footer;