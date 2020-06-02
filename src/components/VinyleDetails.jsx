import React from "react";
import Axios from "axios";

class VinyleDetails extends React.Component() {
    constructor(props) {
        super(props);
        this.state = {
            lp: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        const lpId = this.props.match.params.lpId;
        this.getInfo(lpId);
    }

    getInfo(lpId) {
        const url = `https://api.discogs.com/releases/${lpId}`;
        Axios.get(url)
            .then((res) => res.data)
            .then((data) => {
                console.log(data);
                this.setState({
                    lp: data,
                });
            });
    }

    componentDidUpdate(prevState) {
        const lpId = this.props.match.params.lpId;
        if (prevState !== lpId) {
            this.getInfo(lpId);
        }
    }
    render() {
        return <p> Oi!
            
        </p>;
    }
}

export default VinyleDetails;
