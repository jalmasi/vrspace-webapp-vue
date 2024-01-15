# vrspace-webapp-vue

VRSpace web app examples with Vue 3 in Vite.

AvatarSelectionRemote.js uses all content and even websockets from vrspace.org - quickest way to get you started.
AvatarSelectionLocal.js requires locally running vrspace server. See how to build or download it at https://github.com/jalmasi/vrspace
These two are all the same, except two lines commented out.
Choose which one to start with by un/commenting appropriate line in index.html

Both feature the same basic world that allows you to select an avatar and enter a world.
More world examples are available in the main vrspace repo.

## ES6 support

While VRSpace, and most of Babylon.js are packaged as ES6 modules, that's not the case with all libraries.
The only way to get full functionality is to include all libraries as scripts, as index.html does.
If you give up dynamic terrain, you may be able to use rest of the babylon as ES6 modules.

## Customize configuration

Vite is configured in vite.config.js as proxy to localhost:8080, where local VRSpace is expected serve.
VRSpace server handles both content and websockets, you may want to use your own content instead, and proxy only websockets under /vrspace.
Both VR device access and audio/video streaming work only with HTTPS, even with localhost, hence basic-ssl plugin.

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
