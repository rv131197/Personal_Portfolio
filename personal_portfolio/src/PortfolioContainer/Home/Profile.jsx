import React from 'react'
import Typical from 'react-typical';
import './Profile.css';

function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='col'>
                        <div className='col-icon'>
                        <a href='www.google.com'>
                            <i className='fa fa-globe'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/ramya-v-385660108/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://www.instagram.com/_ramya.venkatesh_/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://github.com/rv131197'>
                            <i className='fa fa-github-square'></i>
                        </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello I'm, <span className="highlighted-text">Ramya!</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                loop={Infinity}
                                steps={[
                                    "Coding Enthusiast 😎",
                                    1000,
                                    "Full-Stack Developer 💻 ",
                                    1000,
                                    "Love Coding ❤️",
                                    1000
                                ]}
                                />
                            </h1>
                                <span className='profile-role-tagline'>
                                    Knack of building web applications with front-end and back-end technologies.
                                </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                                {""}
                                Hire Me{" "}
                        </button>
                        <a href="RamyaProfessionalCVE.pdf" download='Ramya Cv.pdf'>
                        <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>           
        </div>
    )
}

export default Profile;
