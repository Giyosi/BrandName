import React from 'react';
import "./Title.css";

class Title extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = props;
    }

    render() {
        return <>
            <h2 className="text-center fw-bold">{this.state.heading}</h2>
            <p className="text-center">{this.state.subtitle}</p>
        </>
    }
}

export default Title;