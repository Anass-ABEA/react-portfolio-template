import SingleProject from "./SingleProject";
import React from "react";


// types
const MD = "Mobile Development";
const WD = "Web Development";
const ROBOTICS = "Robotics";
const DESKTOP = "Desktop";


// technologies
const FSA = "Full-Stack Android";
const FSW = "Full-Stack Web";
const AND = "Android";
const MC = "MicroControllers";
const BED = "Back End Development";
const AUTO = "Script Automation";
const LIB = "Library";
const APP = "Application";


// contexts
const PP = "Personal Project";
const FR = "Freelance";
const IN = "Internship";
const COMP = "Competition";
const SP = "School Project";
const VOL = "Volunteer";

const Tags = {
    FireBase:
        <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"/>,
    MYSQL:
        <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>,
    AdobeXD:
        <img
        src="https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6"/>,
    ROS:
        <img src="https://img.shields.io/badge/ros-%230A0FF9.svg?style=for-the-badge&logo=ros&logoColor=white"/>,
    JWT:
        <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>,
    DOTNET:
        <img src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white"/>,
    Android:
        <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white"/>,
    Java:
        <img src="https://img.shields.io/badge/-Java-06305b?style=for-the-badge&logo=java&logoColor=white"/>,
    XML:
        <img src="https://img.shields.io/badge/-XML-black?style=for-the-badge"/>,
    React:
        <img src="https://img.shields.io/badge/-React-161616?style=for-the-badge&logo=react&logoColor=00d9ff"/>,
    Angular:
        <img
        src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"/>,
    GitHub:
        <img
        src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>,
    Jira:
        <img src="https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white"/>,
    Trello:
        <img
        src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white"/>,
    Arduino:
        <img src="https://img.shields.io/badge/-Arduino-gray?style=for-the-badge&logo=arduino&color=gray"/>,
    Python:
        <img src="https://img.shields.io/badge/-Python-black?style=for-the-badge&logo=python&logoColor=white"/>,
    Spring:
        <img
        src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white"/>,
    MongoDB:
        <img
        src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>,
    SQLITE:
        <img
        src="https://img.shields.io/badge/sqlite-%2307405e.svg?&style=for-the-badge&logo=sqlite&logoColor=white"/>,
    Laravel:
        <img src="https://img.shields.io/badge/-LARAVEL-f35045?style=for-the-badge&logo=laravel&logoColor=white"/>,
    PHP:
        <img src="https://img.shields.io/badge/-PHP-5466b8?style=for-the-badge&logo=php&logoColor=white"/>,
    BootStrap:
        <img
        src="https://img.shields.io/badge/-Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/>,
    CSharp:
        <img src="https://img.shields.io/badge/-C%23-659ad2?style=for-the-badge&logo=c-sharp&logoColor=ffffff"/>,
    C:
        <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"/>,
    Raspberry:
        <img src="https://img.shields.io/badge/-RaspberryPi-C51A4A?style=for-the-badge&logo=Raspberry-Pi"/>
}


export const data = [
    new SingleProject("Uni-Scheduler", WD, FSW, PP,
        "After a study of a need in many of the Moroccan universities, I have started the design, UI, and development of the web application allowing any university to manage the schedules created by its employees or teaching staff. The application facilitates the generation of the schedules by requesting the availabilities of the different teachers that will be added. Teachers will be notified by email to fill in their availability that will be displayed to the staff responsible for making the schedule. Once the schedule is finished, it can be exported as PDF or XLSX file.",
        new Date("2021-06"), new Date("2021-10")
    )
        .buildImages("UniScheduler", 1, 13)
        .setVideo("https://www.youtube.com/watch?v=_E8-5-5S1GQ")
        .setUrl("https://unischeduler.thexcoders.net/")
        .setTags([Tags.React, Tags.Laravel, Tags.PHP, Tags.MongoDB, Tags.JWT, Tags.BootStrap]),

]
