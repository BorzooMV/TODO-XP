import React from "react";
import users from "../../assets/users";
import dateConvertor from "../../modules/dateConvertor";

const Profile = () => {
    return(
        <>
            <section id="profile" className="Profile">
                <h2>Your Information</h2>
                <hr className="hr-l" />
                <div className="profileContainer">
                    <div className="profilePicture">
                        <img src={users[0]["image"]} alt={users[0]["username"]} />
                    </div>
                    <div className="information">
                        <span className="profileName">{users[0]["username"]}</span>
                        <span className="rank">{users[0]["rank"]}</span>
                        <hr className="hr-s" />
                        <div className="states">
                            <div className="state">
                                <span className="value">{users[0]["point"]}</span>
                                <span className="key">Points</span>
                            </div>
                            <div className="state">
                                <span className="value">{dateConvertor(users[0]['date-joined'])}</span>
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