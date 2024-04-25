import React from 'react'
import { Link } from 'react-router-dom'

const TeamSection = () => {
  return (
    <div className="fz-team-member-section">
        <div className="container">
            <h2 className="section-title">Our Team Member</h2>

            <div className="row g-3 g-md-4 justify-content-center">
                <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
                    <div className="fz-single-team-member">
                        <div className="fz-single-team-member__img">
                            <img src="assets/images/anne.jpg" alt="Person Picture"/>
                        </div>

                        <div className="fz-single-team-member__txt">
                            <div className="fz-single-team-member__info">
                                <h5 className="fz-single-team-member__name">Anne Baricaua</h5>
                                <span className="fz-single-team-member__label">Founder</span>
                            </div>

                            <ul className="fz-single-team-member__socials">
                                <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                <li><Link to="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                <li><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
                    <div className="fz-single-team-member">
                        <div className="fz-single-team-member__img">
                            <img src="assets/images/siraldrin.jpg" alt="Person Picture"/>
                        </div>

                        <div className="fz-single-team-member__txt">
                            <div className="fz-single-team-member__info">
                                <h5 className="fz-single-team-member__name">Aldrin John Tamayo</h5>
                                <span className="fz-single-team-member__label">Manager</span>
                            </div>

                            <ul className="fz-single-team-member__socials">
                                <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                <li><Link to="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                <li><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
                    <div className="fz-single-team-member">
                        <div className="fz-single-team-member__img">
                            <img src="assets/images/roseanne.jpg" alt="Person Picture"/>
                        </div>

                        <div className="fz-single-team-member__txt">
                            <div className="fz-single-team-member__info">
                                <h5 className="fz-single-team-member__name">Rose Anne Almeda</h5>
                                <span className="fz-single-team-member__label">CEO</span>
                            </div>

                            <ul className="fz-single-team-member__socials">
                                <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                <li><Link to="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                <li><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
                    <div className="fz-single-team-member">
                        <div className="fz-single-team-member__img">
                            <img src="assets/images/anne2.jpg" alt="Person Picture"/>
                        </div>

                        <div className="fz-single-team-member__txt">
                            <div className="fz-single-team-member__info">
                                <h5 className="fz-single-team-member__name">Judy Baricaua</h5>
                                <span className="fz-single-team-member__label">Acountant</span>
                            </div>

                            <ul className="fz-single-team-member__socials">
                                <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                <li><Link to="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                <li><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamSection