import { createApp } from 'vue'
import App from './AvatarSelection.vue'
import * as VRSpace from '@vrspace/babylonjs'
// we can import most of the stuff, but not DynamicTerrain
//import * as BABYLON from 'babylonjs'
//import 'babylonjs-materials'
//import 'babylonjs-gui'
//import 'babylonjs-loaders'

createApp(App).mount('#app')

var canvas = document.getElementById("renderCanvas"); // Get the canvas element
// focus canvas so we get keyboard events, otherwise need to click on it first
canvas.focus();
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
var scene;

// all content loaded from vrspace.org server
// all API calls made to vrspace.org server
VRSPACEUI.contentBase='https://www.vrspace.org/';
var world = new VRSpace.AvatarSelection();
// ... and connecting websocket to vrspace.org server
world.serverUrl='wss://www.vrspace.org/vrspace/client';


world.init(engine, 'avatar').then((s) => {
  scene = s;
  world.createSelection((avatar)=>{
   console.log("Selected avatar: "+avatar.getUrl());
  });
  world.showPortals();
  world.afterExit = () => {
    console.log('Exit:'+world.worldManager.error);
    //setTimeout(() => document.location.reload(), 5000);
  }
});

// drag and drop to chat
document.getElementById('renderCanvas').ondragover = (e) => {
  return false;
}
document.getElementById('renderCanvas').ondrop = (e) => {
  e.preventDefault();
  for ( var i = 0; i < e.dataTransfer.items.length; i++ ) {
  	var item = e.dataTransfer.items[i];
  	if ( item.kind == 'string') {
  		if ('text/plain' == item.type) {
  			// say that
  			item.getAsString(s=>{
          world.write(s);
  			});
  		}
      // text/html ignored, text/urilist is the same as plain text
  	//} else {
  		// file upload unsafe
  		//console.log('Unsupported kind: '+item.kind);
  	}
  };
}

document.getElementById('debugOnOff').onclick = (e) => {
  console.log("Debug: "+scene.debugLayer.isVisible());
  if ( scene.debugLayer.isVisible() ) {
    scene.debugLayer.hide();
  } else {
    scene.debugLayer.show();
  }
}

//Watch for browser/canvas resize events
window.addEventListener("resize", function () {
  engine.resize();
});
