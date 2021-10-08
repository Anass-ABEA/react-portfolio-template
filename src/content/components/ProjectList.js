import React from "react";
import SingleProject from "../pages/Projects/SingleProject";

export default function ProjectListItem(props) {

    const proj: SingleProject = props.project

    return (
        <div className="card p-2 mx-1 my-3 c-pointer " onClick={props.onClick}>
            <div className="d-flex">
                <div style={{fontSize: "1.5rem",margin:"0 15px 0 10px"}} className="align-self-center">
                    {proj.getTypeIcon()}
                </div>
                <div className="f-1">
                    <div>
                        <strong>
                            {proj.title}
                        </strong>
                    </div>

                    <div className="text-muted">
                        {proj.type}
                    </div>

                    <div className="text-muted">
                        {proj.techno} • {proj.context}
                    </div>

                    <div className="text-muted">
                        {proj.getDates()}
                    </div>

                </div>
            </div>
        </div>
    )

}
