import React from "react";
import SingleProject from "../pages/Projects/SingleProject";
import Carousel from 'react-bootstrap/Carousel'
import {FaExternalLinkAlt} from "react-icons/all";


export default function ProjectDescription(props) {
    const project: SingleProject = props.project;

    return (
        <div className="card" id="projDesc">
            <div className="d-flex  bg-light">
                <div className="mx-4" style={{fontSize: "4rem"}}>
                    {project.getTypeIcon()}
                </div>
                <div className="f-1 align-self-center">
                    <h2 className="text-center">
                        {project.title} | {project.techno} | {project.context}
                    </h2>
                </div>
            </div>
            {
                project.tags.length !== 0 &&
                <div className="px-4 py-2 tags text-center">
                    {project.tags}
                </div>
            }
            {
                project.projectURL != null &&
                <div className="px-4 content text-end">
                    <h5>
                        <a href={project.projectURL} target="_blank" rel="noopener">View
                            Project <FaExternalLinkAlt/></a>
                    </h5>
                </div>
            }

            <div className="px-4 content">
                <h5>Project Duration:</h5>
                {project.getDates()}

                <h5>Project Description:</h5>
                <p style={{whiteSpace: "pre-line"}}>
                    {project.description}
                </p>

                {
                    project._images.length !== 0 &&
                    [
                        <h5>Project Screenshots:</h5>,


                        <Carousel fade={true} interval={2000} slide={true} className="image-list bg-dark p-2">
                            {
                                project._images.map((e, i) => {
                                    return (
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={"/images/" + e}
                                                alt={"Projet ScreenShot" + i}
                                            />
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>


                    ]
                }

                {project.videoURL != null &&
                [
                    <h5>Video Demo:</h5>,
                    <div className="videoWrapper">
                        <iframe width="560" height="315" src={project.videoURL}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </div>
                ]
                }

            </div>
        </div>
    )

}
