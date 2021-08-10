// import React from 'react';
// import {Redirect} from 'react-router-dom';

// class ShowPicture extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: ""
//         }
//         // this.handleback = this.handleback.bind(this);
//     }

//     componentDidMount() {
//         // this.props.fetchCurrentUser(this.props.picture.userId)
//         this.props.fetchPicture(this.props.match.params.pictureId)
//         //will later add fetching likers 
//     }

//     // handleback() {
//     // }

//     //Like() {

//     }

//     // whichUser() {
//     //     if (this.props.session === null) {
//     //         return null;
//     //     } else if (this.props.session.id === this.props.picture.user_id) {
//     //         return nulkl
//     //         else {}
//     //     }
//     // }
        
//     render() {
//         const { picture } = this.props
//         if (!picture) return null
//         return (
//             <div>
//                 <div className="show-picture">
//                     {/* <div className="show-picture-1"> */}
//                         <i className="fas fa-arrow-left" onClick={this.handleback}></i>
//                     </div>
//                     <div className="show-picture-container">
//                         <div>
//                             <img className="picture" src={picture.pictureUrl} alt="" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="picture_show_info">
//                     <div className="picture_info">
//                         {/* {this.isUser()} */}
//                         <div className="picture-info">
//                                 {/* {this.handleUser()} */}
//                                 {/* <i onClick={() => this.props.history.push(`/users/${picture.ownerId}`)} className="fas fa-user-circle profile_logo"></i> */}
//                                 <h5>{picture.title}</h5>
//                             </div>
//                             <p>{picture.description}</p>
//                         </div>
//                     </di>
//         )
//     }
// }

// export default ShowPicture;


import React from "react";
import { Redirect } from 'react-router-dom';

class PictureShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
        }
        this.handleback = this.handleback.bind(this)
        // this.handleprofile = this.handleprofile(this)
    }

    componentDidMount() {
        this.props.fetchPicture(this.props.match.params.pictureId)
        this.props.fetchlikes()
        // this.props.fetchUser(this.props.picture.ownerId)
    }

    handleback() {
        this.props.history.goBack()
    }


    toggleLike() {
        let liked = false
        let pictureLiked = []
        for (let i = 0; i < this.props.likes.length; i++) {
            if (this.props.likes && this.props.picture.id === this.props.likes[i].pictureId && this.props.session.id == this.props.likes[i].userId) {
                pictureLiked.push(this.props.likes[i].id)
                liked = true
            }
        }
        return (
            <div className="like_button_box">
                {
                    liked ?
                        <button className="like_button" onClick={() => this.props.deleteLike(pictureLiked[0])}>
                            <i className="fas fa-heart"></i>
                        </button> :
                        <button className="like_button" onClick={() => this.props.createLike(this.props.session.id, this.props.picture.id)}>
                            <i className="far fa-heart"></i>
                        </button>
                }
            </div>
        )
    }

    isUser() {
        // debugger
        if (this.props.session === null) {
            return null
        } else if (this.props.session.id === this.props.picture.ownerId) {
            return null
        } else {
            return this.toggleLike()
        }
    }

    // handleUser() {
    //     if (this.props.picture === null) {
    //         return null
    //     }

    //     return (
    //         <div>
    //             Username: { }
    //         </div>
    //     )
    // }

    render() {
        const { picture } = this.props
        if (!picture) return null
        // console.log(`I am in the picture show page`)
        // console.log(this.props)
        return (
            <div>
                <div className="picture_show_container">
                    <div className="picture_show_box1">
                        <i className="fas fa-arrow-left" onClick={this.handleback}></i>
                    </div>
                    <div className="picture_show_box2">
                        <div>
                            <img className="picture_show_img" src={picture.pictureUrl} alt="" />
                        </div>
                    </div>
                </div>
                <div className="picture_show_info">
                    <div className="picture_info">
                        {this.isUser()}
                        <div className="picture_info_box1">
                            <div className="picture_info_box2">
                                {/* {this.handleUser()} */}
                                <i onClick={() => this.props.history.push(`/users/${picture.ownerId}`)} className="fas fa-user-circle profile_logo"></i>
                                <h5>{picture.title}</h5>
                            </div>
                            <p>{picture.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default PictureShow