(function(u,r){"use strict";const{DCDSoundManager:t}=r.ReactNative.NativeModules,l="https://raw.githubusercontent.com/Rico040/meine-themen/master/sounds/discordo-discord.mp3",n=6970;let c=-1;const s=function(){return new Promise(function(i){t.prepare(l,"notification",n,function(p,m){i(m)})})};let e=null,o=!1;async function d(){o&&(e!=null&&clearTimeout(e),t.stop(n),o=!1),o=!0,await t.play(n),e=setTimeout(function(){o=!1,t.stop(n),e=null},c)}let a=!1;var f={onLoad:function(){a||s().then(function(i){a=!0,c=i.duration,d()})}};return u.default=f,Object.defineProperty(u,"__esModule",{value:!0}),u})({},vendetta.metro.common);
