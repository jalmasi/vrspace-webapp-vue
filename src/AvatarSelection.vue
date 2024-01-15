<template>
  <!-- 
  3D scene rendering canvas. 
  A canvas is not focusable by default, tabIndex does that. 
  -->
  <canvas id="renderCanvas" touch-action="none" tabIndex=0 style="width:100vw;height:96vh;padding-left:0;padding-right:0;margin-left:auto;margin-right:auto;"></canvas>

  <!-- Debug button to turn on/off babylon.js inspector -->
  <div style="position:absolute;bottom:10px;right:50%;">
    <button id="debugOnOff">Debug</button>
  </div>

  <!-- Placeholder for audio/video streams -->
  <div id="videos" hidden>
  </div>
  
  <!-- Ready Player Me avatar creator goes into this frame (custom avatars) -->
  <div id="iframe" style="position:absolute;top:0px;width:100%;">
    <iframe id="customAvatarFrame" allow="camera *; microphone *" width="100%" height="800" hidden="true"></iframe>
  </div>

</template>
<style>
	html, body, #app {
	  width: 100%; 
	  height: 100%;
      margin: 0px;
      padding: 0px;
      max-width: 100%;
	}
</style>
