import {
    BiDesktop,
    BiGlobe,
    CgSmartphoneChip,
    FaAndroid,
    FaProjectDiagram,
} from "react-icons/all";
import React from "react";

export default class SingleProject {

    static WEB = 1;
    static ROBOTICS = 2;
    static DESKTOP = 5;
    static ANDROID = 3;
    static MOBILE = 4;
    static DEFAULT = -1;

    tags = [];

    title;
    type;
    techno;
    context;
    description;
    _extras;
    _images = [];
    start: Date;
    end: Date;
    videoURL = null;
    projectURL = null;

    TypeInt = SingleProject.DEFAULT;


    constructor(title, type, techno, context, description, start, end) {
        this.title = title;
        this.type = type;
        this.techno = techno;
        if (type.includes("Mobile")) {
            this.TypeInt = SingleProject.MOBILE;
        }
        if (techno.includes("Android")) {
            this.TypeInt = SingleProject.ANDROID;
        }
        if (techno.includes("Robotics")) {
            this.TypeInt = SingleProject.ROBOTICS;
        }
        if (type.includes("Web")) {
            this.TypeInt = SingleProject.WEB;
        }
        if (type.includes("Desktop")) {
            this.TypeInt = SingleProject.DESKTOP;
        }
        if (techno.includes("Lib")) {
            this.TypeInt = SingleProject.DEFAULT;
        }
        this.context = context;
        this.description = description;
        this.start = start;
        this.end = end;
    }


    setExtras(value) {
        this._extras = value;
        return this;
    }

    setImages(value) {
        this._images = value;
        return this;
    }


    setTags(tags){
        this.tags = tags;
        return this;
    }


    /**
     * example :
     * buildImages("myProject",1,3);
     * the function returns a list of
     * [ "/myProject/Picture1.jpg", "/myProject/Picture2.jpg", "/myProject/Picture3.jpg"]
     * */
    buildImages(prefix, start, end) {
        let lst = [];
        for (let i = start; i <= end; i++) {
            lst.push(prefix + "/Picture" + i + ".jpg");
        }
        this._images = lst;
        return this;
    }

    /**
     * if you want to add other image types, just add the path of the image like :
     * pushImages("MyProject", ["gif/vid1.gif","gif/vid2.gif","png/image.png"]);
     * the function will add the strings :
     * • "MyProject/gif/vid1.gif"
     * • "MyProject/gif/vid2.gif"
     * • "MyProject/png/image.png"
     * to the list of images
     * */
    pushImages(prefix,img) {
        img.map(e => this._images.push(prefix+"/"+e));
        return this;
    }

    /**
     * Adding the URL of the video you want to add
     * the url should be the same as the URL to be embedded.
     * */
    setVideoEmbeddedLink(url) {
        this.videoURL = url;
        return this;
    }

    /**
     * Adding the URL of the video you want to add
     * the url should have this format :
     * https://www.youtube.com/watch?v=[YOUR_VIDE_CODE]
     * */
    setVideo(url){
        this.setVideoEmbeddedLink(url.replace("/watch?v=","/embed/"))
        return this;
    }

    /**
     * Adding the Code of the video you want to add
     * the code can be taken from the URL :
     * https://www.youtube.com/watch?v=[videoCode]
     * */

    setVideoFromCode(videoCode){
        this.setVideoEmbeddedLink("https://www.youtube.com/embed/"+videoCode);
        return this;
    }


    /**
     * Adding a link to your project Github, Website, ...
     * */
    setUrl(link) {
        this.projectURL = link;
        return this;
    }

    /**
     * Gets Icon Based on the Project Type
     * for more icons visit
     * https://react-icons.github.io/react-icons/search
     * */
    getTypeIcon() {
        switch (this.TypeInt) {
            case SingleProject.ANDROID:
                return <FaAndroid style={{color: "#3ddc84"}}/>
            case SingleProject.ROBOTICS:
                return <CgSmartphoneChip style={{color: "#dcd93d"}}/>
            case SingleProject.WEB:
                return <BiGlobe style={{color: "#b0b0b0"}}/>
            case SingleProject.DESKTOP:
                return <BiDesktop style={{color: "#3d72dc"}}/>
            default:
                return <FaProjectDiagram style={{color: "#3d4ddc"}}/>
        }
    }

    getDates() {
        let a = [{month: 'short'}, {year: 'numeric'}];
        if (this.end == null) {
            return this.join(this.start, a, ' ') + " — now";
        }
        if (this.start.getTime() === this.end.getTime()) {
            return this.join(this.start, a, ' ');
        }
        return this.join(this.start, a, ' ') + " — " + this.join(this.end, a, ' ')
    }

    join(t, a, s) {
        function format(m) {
            let f = new Intl.DateTimeFormat('en', m);
            return f.format(t);
        }

        return a.map(format).join(s);
    }


}
