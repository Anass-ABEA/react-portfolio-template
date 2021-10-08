import React from "react";
import "./homepage.css";
import {
    AiFillMobile,
     AiOutlineSafetyCertificate,
    FaChevronRight,
    FaDownload, FaEnvelope, FaGithub, FaLaptop, FaLinkedin,
    FaProjectDiagram, FaYoutube,
} from "react-icons/all";
import {Link} from "react-router-dom";

export default function HomePage(props) {
    document.title = "Portfolio | Anass AIT BEN EL ARBI";

    return (
        <div className="home-page">
            <div className="container-fluid  my-5">
                <div className="row flex-md-row-reverse card p-3 mb-3">
                    <div className="col-12 col-md-6 text-center align-self-center">
                        <img className="profile-picture" src="/me.jpg" alt=""/>
                    </div>

                    <div className="col-12 col-md-6 p-3 p-md-5">
                        <h2 className="mb-3">
                            Anass <br/>
                            <strong>AIT BEN EL ARBI</strong>
                        </h2>
                        <h5 className="mb-3">
                            3rd Year Computer Science Engineering Student | Option IQL<br/>
                            <small><a target="_blank" rel="noopener" href="https://www.emi.ac.ma">@Mohammadia School of
                                Engineers</a></small>
                        </h5>
                        <h5>
                            Web and Mobile Engineer | Volunteer <br/>
                            <small><a target="_blank" rel="noopener" href="https://www.sustain-healthcare.org/">@Healthcare
                                Sustainability and Relief Effort</a></small>
                        </h5>
                        <Link to={"/projects/"+props.first} className="my-3 btn btn-primary text-white">
                            Check out my projects →
                        </Link>
                    </div>

                </div>

                <div className="row p-3 flex-md-row card p-3 mb-3">
                    <div className="col-12 px-5 ">
                        <h3>
                            <FaChevronRight className="anim"/>
                            About me
                        </h3>
                        <p style={{textAlign: "justify"}}>
                            I am a meticulous and motivated student, with a personal drive toward development and
                            continuous
                            learning. Eager to be part of a team as a developer to learn, contribute, collaborate and to
                            produce clean, and understandable code as well as optimized programs.

                        </p>
                        <p style={{textAlign: "justify"}}>
                            With the high ability to adapt, good problem-solving skills, impeccable time management, and
                            the
                            talent to transform complex ideas and problems into a simple working code. I will be a
                            valuable
                            contributor to a team.
                        </p>
                    </div>

                    <div className="col-12 col-md-6 px-5">
                        <h3>
                            <FaChevronRight className="anim"/>
                            Awards & Distinctions
                        </h3>
                        My latest achievements are :
                        <ul className="list-unstyled">
                            <li>
                                <FaChevronRight style={{fontSize: "0.8rem"}}/> Top Rated (100% job success rate) |
                                Upwork <span> - awarded on the 7th of September 2021</span>
                            </li>
                            <li>
                                <FaChevronRight style={{fontSize: "0.8rem"}}/> Rising Talent | Upwork <span> - awarded on the 20th of April 2021</span>
                            </li>
                            <li>
                                <FaChevronRight style={{fontSize: "0.8rem"}}/> Global rank of 511 out of 3702 in the
                                Extreme programming competition IEEEXtreme 14.0
                            </li>
                            <li>
                                <FaChevronRight style={{fontSize: "0.8rem"}}/> National rank of 215 out of 2485 in the
                                Preparatory Classes National Exam (CNC)
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 px-5">
                        <h3>
                            <FaChevronRight className="anim"/>
                            Competitions
                        </h3>
                        My latest competitions are :
                        <ul className="list-unstyled">
                            <li>
                                <FaChevronRight style={{fontSize: "0.8rem"}}/> Best Mobile App (Android) | Covid Care Tech
                                <span> - Aug 2021 </span>
                            </li>
                            <li>
                                <FaChevronRight style={{fontSize: "0.8rem"}}/> Finalist in Hult Prize Meknes Impact summit 2021
                                <span> - Mar 2021 • Hult Prize</span>
                            </li>
                            <li>
                                <FaChevronRight style={{fontSize: "0.8rem"}}/> Team Leader of winning team in Hult Prize on campus EMI 2021
                                <span> - Mar 2020 • Hult Prize</span>
                            </li>
                            <li>
                                <FaChevronRight style={{fontSize: "0.8rem"}}/> First Prize NASA Space apps challenge Morocco
                                <span> - Oct 2020 • NASA Space Apps Challenge</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="row p-3 flex-md-row card p-3 mb-3">

                    <h3>
                        <FaChevronRight className="anim"/>
                        Downloads
                    </h3>

                    <div className="col-12 col-md-6 px-5 ">
                        <h4 className="mt-4"><FaLaptop/> | My Web & Mobile Development Resume</h4>
                        <div className="text-center m-1">
                            <a className="btn btn-primary text-white download-button"
                               href="/download/Cv_Anass_AIT_BEN_EL_ARBI.pdf">
                                <FaDownload/> Download - EN
                            </a>
                        </div>
                        <h4 className="mt-4"><FaProjectDiagram/> | My Projects List</h4>
                        <div className="text-center m-1">
                            <a className="btn btn-primary text-white download-button"
                               href="/download/Projects_Anass AIT BEN EL ARB.pdf">
                                <FaDownload/> Download - EN
                            </a>
                        </div>

                    </div>

                    <div className="col-12 col-md-6 px-5 ">
                        <h4 className="mt-4"><AiFillMobile/> | My Mobile Development Resume</h4>
                        <div className="text-center m-1">
                            <a className="btn btn-primary text-white download-button"
                               href="/download/Cv_Anass_AIT_BEN_EL_ARBI.pdf">
                                <FaDownload/> Download - EN
                            </a>
                        </div>
                        <div className="text-center m-1">
                            <a className="btn btn-primary text-white download-button"
                               href="/download/fr/Cv_Anass_AIT_BEN_EL_ARBI_Mobile.pdf">
                                <FaDownload/> Download - FR
                            </a>
                        </div>


                    </div>

                </div>

                <div className="row p-3 flex-md-row card p-3 mb-3">
                    <div className="col-12 col-md-6 px-5 ">
                        <h3>
                            <FaChevronRight className="anim"/>
                            Contact
                        </h3>
                        <h4 className="mt-4"><FaEnvelope color={"#cacaca"}/> Email</h4>
                        <a href="mailto:annassabe@gmail.com">annassabe@gmail.com</a><br/>
                        <a href="mailto:anass@sustain-healthcare.org">anass@sustain-healthcare.org</a>

                        <h4 className="mt-4"><FaLinkedin color={"#0a66c2"}/> LinkedIn</h4>
                        <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/anass-abea/">https://www.linkedin.com/in/anass-abea/</a><br/>

                    </div>

                    <div className="col-12 col-md-6 px-5">
                        <h3>
                            <FaChevronRight className="anim"/>
                            Other links
                        </h3>
                        <h4 className="mt-4"><FaGithub /> Github</h4>
                        <a target="_blank" rel="noopener" href="https://github.com/anass-abea/">https://github.com/anass-abea/</a><br/>

                        <h4 className="mt-4"><FaYoutube color="red"/> Youtube</h4>
                        <a target="_blank" rel="noopener" href="https://www.youtube.com/c/AnassAITBENELARBI">https://www.youtube.com/c/AnassAITBENELARBI</a><br/>

                        <h4 className="mt-4"><AiOutlineSafetyCertificate color="green"/> Credly Badges</h4>
                        <a target="_blank" rel="noopener" href="https://www.credly.com/users/anass-ait-ben-el-arbi">https://www.credly.com/users/anass-ait-ben-el-arbi</a><br/>

                    </div>

                </div>

            </div>
        </div>
    )
}
