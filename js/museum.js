let camera, scene, renderer;

var mapbtn = document.getElementById("mapbtn");
var bigmap = document.getElementById("bigmap");
var burger = document.getElementById("burger");
var mapmenu = document.getElementById("mapmenu");
var menuburger = document.getElementById("menuburger");
mapbtn.addEventListener("click",function(){
    bigmap.classList.toggle("show");
    if(mapbtn.style.opacity === "1" || mapbtn.style.opacity === ""){
        mapbtn.style.opacity = 0.5;
    }
    else{
        mapbtn.style.opacity = 1;
    }
})

mapmenu.onblur = function() {
    bigmap.classList.remove("show");
    mapbtn.style.opacity = 1;
}



// #PANOSECTION
var GPSicons = document.querySelectorAll("g.point");
var pano = document.querySelectorAll(".panolink")

GPSicons.forEach(function(ele, index){
    ele.addEventListener("click",function(){
        changeview(index+1)
    })
    
})

function mapGPS(index){
GPSicons.forEach(function(ele){
    ele.classList.remove("checked");
})

GPSicons[index-1].classList.add("checked");
}


// 4917.05, -745.58, -490.88

var panocontainer = document.getElementById("panocontainer")
const viewer = new PANOLENS.Viewer({container: panocontainer, output: 'console',controlBar: false});
var panorama = new PANOLENS.ImagePanorama( '../img/ROOMMOOM2.jpg' );
var panorama2 = new PANOLENS.ImagePanorama( '../img/ROOMMOOM1.jpg' );
var panorama3 = new PANOLENS.ImagePanorama( '../img/ROOMMOOM5.jpg' );
var panorama4 = new PANOLENS.ImagePanorama( '../img/ROOMMOOM6.jpg' );

var infospot, infospot2, infospot3, infospot4;
infospot = new PANOLENS.Infospot( 250, '../img/infoimg/infoIC.png' );
console.log(infospot)

// add sound file
var sound1 = new Howl({
src: ['../sound/1.m4a']
});
var sound2 = new Howl({
src: ['../sound/2.m4a']
});
var sound3 = new Howl({
src: ['../sound/3.mp3']
});

infospot.position.set( 4868.14, -850.78, 802.44 );
infospot.addHoverElement( document.getElementById( 'contentbox1' ), 300 );
infospot2 = new PANOLENS.Infospot( 500, '../img/Mup.png' );
infospot2.position.set( -4434.87, -2281.75, 258.53 );
infospot3 = new PANOLENS.Infospot( 300, '../img/infoimg/infoIC2.png' );
infospot3.position.set( 3508.15, -1270.81, 3316.87 );
infospot3.addHoverElement( document.getElementById( 'contentbox2' ),300 );
infospot4 = new PANOLENS.Infospot( 300, '../img/infoimg/infoIC3.png' );
infospot4.position.set( -333.58, -915.72, 4894.40 );
var infospot5 = new PANOLENS.Infospot( 300, '../img/infoimg/infoIC4.png' );
infospot5.position.set( 4111.69, -601.14, 2784.48 );
var infospot6 = new PANOLENS.Infospot( 300, '../img/infoimg/infoIC5.png' );
infospot6.position.set( 2745.35, 515.44, -4135.09 );
var soundspot1 = new PANOLENS.Infospot( 300, '../img/icon/heaphone.png');
soundspot1.position.set( 4917.05, -850.58, -550.88 );

soundspot1.addEventListener("click",function(){
    stopvideo()
    // sound1.play()
    if(sound2.playing() == true){
        sound2.stop()
    }
    else{
        sound2.play()
    }
})
panorama.add( soundspot1 );
panorama.add( infospot );
panorama.add( infospot2 );
panorama.add( infospot3,infospot4,infospot5,infospot6 );
viewer.add( panorama );

// panorama.src = "ROOMMOOM6.jpg"
infospot2.addEventListener("click",function(){
    changeview(2)
})

function changeview(moom){
    offallsound();
    if(moom == 1){
    renderer.domElement.style.zIndex =0;
    viewer.setPanorama(panorama)
    viewer.add(panorama)
    mapGPS(1)
    panocheck(1)
    }
    else if(moom == 2){
    renderer.domElement.style.zIndex = -10000;
    viewer.setPanorama(panorama2)
    viewer.add(panorama2)
    mapGPS(2)
    panocheck(2)
    }
    else if(moom == 3){
    renderer.domElement.style.zIndex = -10000;
    viewer.setPanorama(panorama3)
    viewer.add(panorama3)
    mapGPS(3)
    panocheck(3)

    }
    else if(moom == 4){
    renderer.domElement.style.zIndex = -10000;
    viewer.setPanorama(panorama4)
    viewer.add(panorama4)
    mapGPS(4)
    panocheck(4)

    }
}

function offallsound(){
    sound1.stop()
    sound2.stop()
    sound3.stop()
}
// -4093.31, -2767.70, -708.75
var spot1M2,spot2M2
spot1M2 = new PANOLENS.Infospot( 300, '../img/Mup2.png' );
spot1M2.position.set( 4844.74, -1215.75, 65.30 );
spot2M2 = new PANOLENS.Infospot( 300, '../img/Mrightup.png' );
spot2M2.position.set( 1978.43, -2134.83, -4054.90 );
var soundspot2 = new PANOLENS.Infospot( 400, '../img/icon/heaphone2.png');
soundspot2.position.set(-4311.19, -2394.82, -773.35 );
soundspot2.addEventListener("click",function(){
    // sound1.play()
    if(sound3.playing() == true){
        sound3.stop()
    }
    else{
        sound3.play()
    }
})
panorama2.add(spot1M2,spot2M2,soundspot2)
spot1M2.addEventListener("click",function(){
    changeview(1)
})
spot2M2.addEventListener("click",function(){
    changeview(3)
})
// 1133.70, -1542.29, -4613.32
var spot1M3,spot2M3,spot3M3
spot1M3 = new PANOLENS.Infospot( 300, '../img/Mup3.png' );
spot1M3.position.set( 171.00, -1189.70, 4846.55 );
spot2M3 = new PANOLENS.Infospot( 300, '../img/Mleft.png' );
spot2M3.position.set( 4463.20, 546.30, -2164.83 );
spot3M3 = new PANOLENS.Infospot( 300, '../img/infoimg/3DIC.png' );
spot3M3.position.set( 1556.20, -1563.40, -4482.02 );
spot3M3.addHoverElement( document.getElementById( 'contentbox3' ),200 );
var soundspot3 = new PANOLENS.Infospot( 300, '../img/icon/heaphone3.png');
soundspot3.position.set(1133.70, -1542.29, -4613.32 );
soundspot3.addEventListener("click",function(){
    // sound1.play()
    if(sound1.playing() == true){
        sound1.stop()
    }
    else{
        sound1.play()
    }
})
// spot2M3 = new PANOLENS.Infospot( 300, '../img/Mleft.png' );
// spot2M3.position.set( 4463.20, 546.30, -2164.83 );
panorama3.add(spot1M3,spot2M3,spot3M3,soundspot3)
spot1M3.addEventListener("click",function(){
    changeview(2)
})
spot2M3.addEventListener("click",function(){
    changeview(4)
})

var spot1M4,spot2M4
spot1M4 = new PANOLENS.Infospot( 300, '../img/Mup5.png' );
spot1M4.position.set( -3969.77, -2049.67, -2231.88 );
spot2M4 = new PANOLENS.Infospot( 300, '../img/Mrightup2.png' );
spot2M4.position.set( -3913.90, -1764.34, 2543.92 );
panorama4.add(spot1M4,spot2M4)
spot1M4.addEventListener("click",function(){
    changeview(3)
})
spot2M4.addEventListener("click",function(){
    changeview(2)
})



// #controls_panomenu
viewer.camera.position.set(0.9959545915187218,0.08376295032060595,0.032530290290184755);
viewer.OrbitControls.autoRotate = true;
viewer.OrbitControls.autoRotateSpeed = 0.3;
var lvlbtn = document.getElementById("pbtn13");
var zoomin = document.getElementById("pbtn1");
var zoomout = document.getElementById("pbtn2");
var rotateup = document.getElementById("pbtn3");
var rotatedown = document.getElementById("pbtn4");
var rotateleft = document.getElementById("pbtn5");
var rotateright = document.getElementById("pbtn6");
var homebtn = document.getElementById("pbtn7");
var sound = document.getElementById("pbtn8");
var autorotate = document.getElementById("pbtn9");
var fullscreen = document.getElementById("pbtn10");
var vr = document.getElementById("pbtn11");
var hidden = document.getElementById("pbtn12");
var zoomN = false;
var zoomO = false;
var rotateU = false, rotateD = false, rotateL = false, rotateR = false;
zoomin.addEventListener("mousedown",function(){
    zoomN = true;
})
zoomin.addEventListener("mouseup",function(){
    zoomN = false;
})
zoomin.addEventListener("blur",function(){
    zoomN = false;
})

zoomout.addEventListener("mousedown",function(){
    zoomO = true;
})
zoomout.addEventListener("mouseup",function(){
    zoomO = false;
})
zoomout.addEventListener("blur",function(){
    zoomO = false;
})

rotateup.addEventListener("mousedown",function(){
    rotateU = true;
})
rotateup.addEventListener("mouseup",function(){
    rotateU = false;
})
rotateup.addEventListener("blur",function(){
    rotateU = false;
})

rotatedown.addEventListener("mousedown",function(){
    rotateD = true;
})
rotatedown.addEventListener("mouseup",function(){
    rotateD = false;
})
rotatedown.addEventListener("blur",function(){
    rotateD = false;
})

rotateleft.addEventListener("mousedown",function(){
    rotateL = true;
})
rotateleft.addEventListener("mouseup",function(){
    rotateL = false;
})
rotateleft.addEventListener("blur",function(){
    rotateL = false;
})

rotateright.addEventListener("mousedown",function(){
    rotateR = true;
})
rotateright.addEventListener("mouseup",function(){
    rotateR = false;
})
rotateright.addEventListener("blur",function(){
    rotateR = false;
})

homebtn.addEventListener("click",function(){
    viewer.camera.position.set(0.9959545915187218,0.08376295032060595,0.032530290290184755);
})

autorotate.addEventListener("click",function(){
    viewer.OrbitControls.autoRotate = !viewer.OrbitControls.autoRotate;
    if(viewer.OrbitControls.autoRotate){
    document.querySelector("#pbtn9 img").src = "../img/rotateautoOFF.png";
    }
    else{
    document.querySelector("#pbtn9 img").src = "../img/rotateautoON.png";
    }
})

function muteorunmute(x){
    sound1.mute(x)
    sound2.mute(x)
    sound3.mute(x)
}



var soundON = false;
sound.addEventListener("click",function(){
    soundON = !soundON;
    console.log(soundON)
    if(soundON){
    document.querySelector("#pbtn8 img").src = "../img/soundoff.png";
    muteorunmute(true)
    var browser = document.getElementById('videoplayer');
    browser.src = browser.src;
    }
    else{
        muteorunmute(false)
    document.querySelector("#pbtn8 img").src = "../img/soundon.png";
    }
})

var fullscn = false;
fullscreen.addEventListener("click",function(){
    fullscn = !fullscn;
    if(fullscn){
    document.querySelector("#pbtn10 img").src = "../img/zoomin.png";
    }
    else{
    document.querySelector("#pbtn10 img").src = "../img/zoomout.png";
    }
    var elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        

        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
})

vr.addEventListener("click",function(){
    if(viewer.mode == 1){
        viewer.mode = 2;
        }
        else if(viewer.mode == 2){
        viewer.mode = 1;
    }
})

var hidemenu = false;
hidden.addEventListener("click",function(){
    hidemenu = !hidemenu;
    if(hidemenu){
        document.querySelector("#panoramamenu").style.display="none";
        document.querySelectorAll(".panomenu").forEach(function(ele)
        {
            ele.style.display = "none"
        })
        document.querySelector(".iconmenu").style.background="none";
        this.style.display = "inline-block";
    }
    else{
        document.querySelector("#panoramamenu").style.display="block";
        document.querySelectorAll(".panomenu").forEach(function(ele){
        ele.style.display = "inline-block"
    })
        document.querySelector(".iconmenu").style.background="rgba(24, 24, 24, 0.589)";
        this.style.display = "inline-block";
    }


})

viewer.addUpdateCallback(function(){
    if(zoomN == true && viewer.camera.fov != 30){
        viewer.camera.fov -= 1;
    }
    if(zoomO == true && viewer.camera.fov != 120){
        viewer.camera.fov += 1;
    }
    if(rotateU == true){
        viewer.getControl().rotateUp(-0.01);
    }
    if(rotateD == true){
        viewer.getControl().rotateUp(+0.01);
    }
    if(rotateL == true){
        viewer.getControl().rotateLeft(-0.01);
    }
    if(rotateR == true){
        viewer.getControl().rotateLeft(+0.01);
    }
    viewer.camera.updateProjectionMatrix();

})

document.getElementById("classlvls").style.display = "none"
lvlbtn.addEventListener("click",function(){
    if(document.getElementById("classlvls").style.display == "none"){
        document.getElementById("classlvls").style.display = "block"
    }
    else{
        document.getElementById("classlvls").style.display = "none"

    }
})

function panocheck(c){
    pano.forEach(function(ele, index){
        ele.classList.remove("checked")
    })
    pano[c-1].classList.add("checked")
}
pano.forEach(function(ele, index){
    ele.addEventListener("click",function(){
        changeview(index+1)
    })
    
})

// #videoto3D


let controls;

function Element( id, x, y, z, rx ,ry ,rz) {

const div = document.createElement( 'div' );
div.style.width = '1850px';
div.style.height = '680px';
div.style.background = "transparent";
div.style.cursor = "pointer";
div.style.pointerEvents = "none";
const iframe = document.getElementById("video")
// iframe.addEventListener("mouseover",function(){
//     alert("HEYYYYYYYYYYY");
// })
iframe.style.width = '2000px';
iframe.style.height = '650px';
iframe.style.zIndex = "10000"
// iframe.style.border = '0px';
iframe.style.cursor = "pointer";
// iframe.src ='https://streamable.com/b01yv1';
iframe.style.pointerEvents = "auto";
div.appendChild( iframe );

const object = new THREE.CSS3DObject( div );
object.position.set( x, y, z );
object.rotation.set( rx, ry, rz)

return object;

};


function stopvideo(){
var iframe = document.getElementById("videoplayer");
iframe.src = iframe.src;
}

init();

function init() {

const container = document.querySelector( '#panocontainer' );
camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 5000 );
camera.position.set( 0, 0, 750 );

scene = new THREE.Scene();
// renderer =viewer.getRenderer)

renderer = new THREE.CSS3DRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.style.position = 'absolute';
renderer.domElement.style.top = 0;
renderer.domElement.style.backgroundColor = 'transparent';
renderer.domElement.style.zIndex =0;
// renderer.domElement.style.pointerEvents = "none!important";
renderer.domElement.style.pointerEvents = "none";

console.log(renderer)
container.appendChild( renderer.domElement );


var video = new Element( 'SJOz3qjfQXU', -3080, -600, -4900, 0, -100.5 ,0 ) ;

console.log("helloworld")
console.log(video)
scene.add( video );

viewer.add(panorama)

}




animate()

function animate() {
requestAnimationFrame( animate );
renderer.render( scene, viewer.getCamera() );
renderer.domElement.style.pointerEvents = "none!important";

viewer.camera.updateProjectionMatrix();



}






// window.addEventListener( 'resize', onWindowResize, false );

// function onWindowResize() {

// camera.aspect = window.innerWidth / window.innerHeight;
// camera.updateProjectionMatrix();
// renderer.setSize( window.innerWidth, window.innerHeight );

// }



