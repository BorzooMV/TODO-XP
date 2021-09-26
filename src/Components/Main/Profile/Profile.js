import React from "react";
import profileImg from '../../../assets/IMG_5925.JPG'

const Profile = () => {
    return(
        <>
            <section className="Profile">
                <h2>Your Information</h2>
                <hr className="hr-l" />
                <div className="profileContainer">
                    <div className="profilePicture">
                        <img src={profileImg} alt="Borzoo Moazami" />
                    </div>
                    <div className="information">
                        <span className="profileName">Borzoo Moazami</span>
                        <span className="rank">Advance</span>
                        <hr className="hr-s" />
                        <div className="states">
                            <div className="state">
                                <span className="value">90</span>
                                <span className="key">Points</span>
                            </div>
                            <div className="state">
                                <span className="value">20</span>
                                <span className="key">Days joined</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile;