import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
     NavLink
} from "react-router-dom";
import React from "react";
import {
     FaHome,
     FaProjectDiagram,
} from "react-icons/all";
import Projects from "./content/pages/Projects/Projects";
import HomePage from "./content/pages/HomePage/HomePage";
import Header from "./content/components/Header";
import Footer from "./content/components/Footer";
import {data} from "./content/pages/Projects/projectsData";

function App() {

    const dataCpy = [...data];
    dataCpy.sort((a, b) => b.start.getTime() - a.start.getTime())

    return (
        <div className="container-fluid ">
            <Header/>
            <Router>
                <div className="text-center nav-links">
                    <NavLink to="/" exact activeClassName="activeClass">
                        <buton className=" btn px-3 first-item">
                            <FaHome/> Home
                        </buton>
                    </NavLink>

                    {
                        /*

                        <NavLink to="/ok" activeClassName="activeClass">
                            <buton className=" btn px-3 mid-item">
                                <FaCoffee/> midItem
                            </buton>
                        </NavLink>

                        * */
                    }

                    <NavLink to={"/projects/"+dataCpy[0].title} activeClassName="activeClass">
                        <buton className="btn px-3 last-item">
                            <FaProjectDiagram/> Projects
                        </buton>
                    </NavLink>

                </div>
                <Switch>
                    <Route path={["/projects/:name"]}>
                        <Projects data = {dataCpy}/>
                    </Route>
                    <Route path="/">
                        <HomePage
                        first = {dataCpy[0].title}/>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
