import {BiDesktop, BiGlobe, CgSmartphoneChip, FaAndroid, FaChevronRight, FaProjectDiagram} from "react-icons/all";
import SingleProject from "./SingleProject";
import ProjectListItem from "../../components/ProjectList";
import ProjectDescription from "../../components/ProjectDescription";
import React, {useEffect, useState} from "react";
import {useParams,useHistory} from "react-router-dom";


export default function Projects(props) {

    document.title = "Projects | Anass AIT BEN EL ARBI";

    const [selectedIndex, setSelectedIndex] = useState(0);

    const [marked, setMarked] = useState([]);
    const [render, setRender] = useState(false);

    const dataCpy = props.data

    const params = useParams();
    useEffect(()=>{
        if(params.name){
            dataCpy.map((e:SingleProject,index)=>{
                if(e.title === params.name){
                    setSelectedIndex(index);
                }
            })
        }
    },[])

    const history = useHistory();


    function markedHas(e) {
        for (let i = 0; i < marked.length; i++) {
            if (marked[i] === e) return true;
        }
        return false;
    }

    function addOrDeleteMarked(f) {
        let temp;
        if (markedHas(f)) {
            temp = marked.filter(e => e !== f);
            setMarked(temp);
        } else {
            temp = [...marked]
            temp.push(f);
            setMarked(temp);
        }
        setRender(!render);
    }

    return (
        <div className="row m-lg-5 m-md-3">
            <div className="col-12 col-md-4 col-lg-4 col-xl-3 p-list">
                <h3>
                    <FaChevronRight className="anim"/>
                    Project List
                </h3>
                <div className="row">
                    <div className="col p-1">
                        <button className={markedHas(SingleProject.ANDROID) ? "btn w-100 btn-primary" : "btn w-100"}
                                onClick={() => {
                                    addOrDeleteMarked(SingleProject.ANDROID);
                                }}>
                            <FaAndroid style={{color: "#3ddc84"}}/><br/>
                            Android
                        </button>
                    </div>
                    <div className="col p-1">
                        <button className={markedHas(SingleProject.DESKTOP) ? "btn w-100 btn-primary" : "btn w-100"}
                                onClick={() => {
                                    addOrDeleteMarked(SingleProject.DESKTOP);
                                }}>
                            <BiDesktop style={{color: "#3d72dc"}}/><br/>
                            Desktop
                        </button>
                    </div>
                    <div className="col p-1">
                        <button className={markedHas(SingleProject.WEB) ? "btn w-100 btn-primary" : "btn w-100"}
                                onClick={() => {
                                    addOrDeleteMarked(SingleProject.WEB);
                                }}>
                            <BiGlobe style={{color: "#b0b0b0"}}/><br/>
                            Web
                        </button>
                    </div>
                    <div className="col p-1">
                        <button className={markedHas(SingleProject.ROBOTICS) ? "btn w-100 btn-primary" : "btn w-100"}
                                onClick={() => {
                                    addOrDeleteMarked(SingleProject.ROBOTICS);
                                }}>
                            <CgSmartphoneChip style={{color: "#dcd93d"}}/><br/>
                            Robotics
                        </button>
                    </div>
                    <div className="col p-1">
                        <button className={markedHas(SingleProject.DEFAULT) ? "btn w-100 btn-primary" : "btn w-100"}
                                onClick={() => {
                                    addOrDeleteMarked(SingleProject.DEFAULT);
                                }}>
                            <FaProjectDiagram style={{color: "#3d4ddc"}}/><br/>
                            Others
                        </button>
                    </div>
                </div>

                {dataCpy.length !== 0 &&
                <div style={{overflowY: "auto", height: "90vh"}}>
                    {
                        dataCpy.map((e: SingleProject, i) => {
                            if (marked.length === 0 || markedHas(e.TypeInt))
                                return <div className={i === selectedIndex ? "addAfter" : ""}>
                                    <ProjectListItem
                                        onClick={() => {
                                            setSelectedIndex(i);
                                            history.push("/projects/"+e.title);
                                            document.getElementById("projDesc").scrollIntoView();
                                        }}
                                        project={e}/>
                                </div>
                        })
                    }
                </div>
                }

            </div>

            <div className="col-12 col-md-8 col-lg-8 col-xl-9">
                <h3>
                    <FaChevronRight className="anim"/>
                    Project Description
                </h3>

                <ProjectDescription
                    project={dataCpy[selectedIndex]}
                />
            </div>

        </div>
    )
}
