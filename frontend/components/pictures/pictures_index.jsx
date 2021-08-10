import React from 'react';
import pictures_index_container from './pictures_index_container';
import { Link } from "react-router-dom";

class PictureIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPictures()
    }
    
    render() {
        const {pictures, loggedIn, session} = this.props
        if (!pictures) return null; 
    
        return (
            <div className="upload-container">
                <div className="discover-container">
                    <ul className="picture-container">
                        <h2>testing</h2> 
                        {/* {pictures.map((picture,index) => (
                            <PictureIndex key={index} 
                            picture={picture} 
                            loggedIn={loggedIn}
                            session={session} />
                        ))} */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PictureIndex; 