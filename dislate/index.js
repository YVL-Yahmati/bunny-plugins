(function(p,D,m,t,M,k,l,d,$,P,z,K,N,T){"use strict";const V="https://deeplx.vercel.app/translate";var x={translate:async function(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",n=arguments.length>2?arguments[2]:void 0,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;try{if(s)return{source_lang:r,text:e};const a=await(await fetch(V,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:e,source_lang:r,target_lang:n})})).json();if(a.code!==200)throw Error(`Failed to translate text from DeepL: ${a.message}`);return{source_lang:r,text:a.data}}catch(a){throw Error(`Failed to fetch from DeepL: ${a}`)}}},v={translate:async function(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",n=arguments.length>2?arguments[2]:void 0,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;try{if(s)return{source_lang:r,text:e};const a="https://translate.googleapis.com/translate_a/single?"+new URLSearchParams({client:"gtx",sl:r,tl:n,dt:"t",dj:"1",source:"input",q:e}),h=await(await fetch(a)).json();return console.log(h),{source_lang:r,text:h.sentences.map(function(b){return b.trans}).join("")}}catch(a){throw Error(`Failed to fetch from Google Translate: ${a}`)}}},w;const O=m.findByProps("openLazy","hideActionSheet"),U=((w=m.findByProps("ActionSheetRow"))===null||w===void 0?void 0:w.ActionSheetRow)??d.Forms.FormRow,q=m.findByStoreName("MessageStore"),Y=m.findByStoreName("ChannelStore"),J=t.stylesheet.createThemedStyleSheet({iconComponent:{width:24,height:24,tintColor:k.semanticColors.INTERACTIVE_NORMAL}});let y=[];function X(){return M.before("openLazy",O,function(e){let[r,n,s]=e;const a=s?.message;n!=="MessageLongPressActionSheet"||!a||r.then(function(h){const b=M.after("default",h,function(Te,ce){t.React.useEffect(function(){return function(){b()}},[]);const _=$.findInReactTree(ce,function(o){var u,g;return(o==null||(g=o[0])===null||g===void 0||(u=g.type)===null||u===void 0?void 0:u.name)==="ButtonRow"});if(!_)return;const ue=Math.max(_.findIndex(function(o){return o.props.message===t.i18n.Messages.MARK_UNREAD}),0),c=q.getMessage(a.channel_id,a.id);if(!c?.content&&!a.content)return;const B=c?.id??a.id,ge=c?.content??a.content,E=y.find(function(o){return Object.keys(o)[0]===B},"cache object"),C=E?"Revert":"Translate",H=C==="Translate"?l.getAssetIDByName("ic_locale_24px"):l.getAssetIDByName("ic_highlight"),he=async function(){try{const u=i.target_lang,g=C==="Translate";var o;switch(i.translator){case 0:console.log("Translating with DeepL: ",c.content),o=await x.translate(c.content,null,u,!g);case 1:console.log("Translating with GTranslate: ",c.content),o=await v.translate(c.content,null,u,!g)}t.FluxDispatcher.dispatch({type:"MESSAGE_UPDATE",message:{...c,content:`${g?o.text:E[B]} ${g?`\`[${u?.toLowerCase()}]\``:""}`,guild_id:Y.getChannel(c.channel_id).guild_id},log_edit:!1,otherPluginBypass:!0}),g?y.unshift({[B]:ge}):y=y.filter(function(de){return de!==E},"cached data override")}catch(u){T.showToast("Failed to translate message. Please check Debug Logs for more info.",l.getAssetIDByName("Small")),P.logger.error(u)}finally{return O.hideActionSheet()}};_.splice(ue,0,t.React.createElement(U,{label:`${C} Message`,icon:t.React.createElement(U.Icon,{source:H,IconComponent:function(){return t.React.createElement(t.ReactNative.Image,{resizeMode:"cover",style:J.iconComponent,source:H})}}),onPress:he}))})})})}var I;(function(e){e[e.BUILT_IN=0]="BUILT_IN",e[e.BUILT_IN_TEXT=1]="BUILT_IN_TEXT",e[e.BUILT_IN_INTEGRATION=2]="BUILT_IN_INTEGRATION",e[e.BOT=3]="BOT",e[e.PLACEHOLDER=4]="PLACEHOLDER"})(I||(I={}));var R;(function(e){e[e.SUB_COMMAND=1]="SUB_COMMAND",e[e.SUB_COMMAND_GROUP=2]="SUB_COMMAND_GROUP",e[e.STRING=3]="STRING",e[e.INTEGER=4]="INTEGER",e[e.BOOLEAN=5]="BOOLEAN",e[e.USER=6]="USER",e[e.CHANNEL=7]="CHANNEL",e[e.ROLE=8]="ROLE",e[e.MENTIONABLE=9]="MENTIONABLE",e[e.NUMBER=10]="NUMBER",e[e.ATTACHMENT=11]="ATTACHMENT"})(R||(R={}));var L;(function(e){e[e.CHAT=1]="CHAT",e[e.USER=2]="USER",e[e.MESSAGE=3]="MESSAGE"})(L||(L={}));const G={arabic:"AR",bulgarian:"BG",czech:"CS",danish:"DA",german:"DE",greek:"EL",english:"EN",spanish:"ES",estonian:"ET",finnish:"FI",french:"FR",hungarian:"HU",indonesian:"ID",italian:"IT",japanese:"JA",korean:"KO",lithuanian:"LT",latvian:"LV",norwegian:"NO",dutch:"NL",polish:"PL",portuguese:"PT",romanian:"RO",russian:"RU",slovak:"SK",slovenian:"SL",swedish:"SV",turkish:"TR",ukrainian:"UK","chinese-simplified":"ZH"},W={Afrikaans:"af",Albanian:"sq",Amharic:"am",Arabic:"ar",Armenian:"hy",Assamese:"as",Aymara:"ay",Azerbaijani:"az",Bambara:"bm",Basque:"eu",Belarusian:"be",Bengali:"bn",Bhojpuri:"bho",Bosnian:"bs",Bulgarian:"bg",Catalan:"ca",Cebuano:"ceb",Chichewa:"ny","Chinese (Simplified)":"zh-CN","Chinese (Traditional)":"zh-TW",Corsican:"co",Croatian:"hr",Czech:"cs",Danish:"da",Dhivehi:"dv",Dogri:"doi",Dutch:"nl",English:"en",Esperanto:"eo",Estonian:"et",Ewe:"ee",Filipino:"tl",Finnish:"fi",French:"fr",Frisian:"fy",Galician:"gl",Georgian:"ka",German:"de",Greek:"el",Guarani:"gn",Gujarati:"gu","Haitian Creole":"ht",Hausa:"ha",Hawaiian:"haw",Hebrew:"iw",Hindi:"hi",Hmong:"hmn",Hungarian:"hu",Icelandic:"is",Igbo:"ig",Ilocano:"ilo",Indonesian:"id",Irish:"ga",Italian:"it",Japanese:"ja",Javanese:"jw",Kannada:"kn",Kazakh:"kk",Khmer:"km",Kinyarwanda:"rw",Konkani:"gom",Korean:"ko",Krio:"kri","Kurdish (Kurmanji)":"ku","Kurdish (Sorani)":"ckb",Kyrgyz:"ky",Lao:"lo",Latin:"la",Latvian:"lv",Lingala:"ln",Lithuanian:"lt",Luganda:"lg",Luxembourgish:"lb",Macedonian:"mk",Maithili:"mai",Malagasy:"mg",Malay:"ms",Malayalam:"ml",Maltese:"mt",Maori:"mi",Marathi:"mr","Meiteilon (Manipuri)":"mni-Mtei",Mizo:"lus",Mongolian:"mn","Myanmar (Burmese)":"my",Nepali:"ne",Norwegian:"no","Odia (Oriya)":"or",Oromo:"om",Pashto:"ps",Persian:"fa",Polish:"pl",Portuguese:"pt",Punjabi:"pa",Quechua:"qu",Romanian:"ro",Russian:"ru",Samoan:"sm",Sanskrit:"sa","Scots Gaelic":"gd",Sepedi:"nso",Serbian:"sr",Sesotho:"st",Shona:"sn",Sindhi:"sd",Sinhala:"si",Slovak:"sk",Slovenian:"sl",Somali:"so",Spanish:"es",Sundanese:"su",Swahili:"sw",Swedish:"sv",Tajik:"tg",Tamil:"ta",Tatar:"tt",Telugu:"te",Thai:"th",Tigrinya:"ti",Tsonga:"ts",Turkish:"tr",Turkmen:"tk",Twi:"ak",Ukrainian:"uk",Urdu:"ur",Uyghur:"ug",Uzbek:"uz",Vietnamese:"vi",Welsh:"cy",Xhosa:"xh",Yiddish:"yi",Yoruba:"yo",Zulu:"zu"},Z=m.findByProps("sendBotMessage"),Q=Object.entries(G).map(function(e){let[r,n]=e;return{name:r,displayName:r,value:n}});Object.entries(v).map(function(e){let[r,n]=e;return{name:r,displayName:r,value:n}});function ee(){return z.registerCommand({name:"translate",displayName:"translate",description:"Send a message using Dislate in any language chosen.",displayDescription:"Send a message using Dislate in any language chosen.",applicationId:"-1",type:L.CHAT,inputType:I.BUILT_IN_TEXT,options:[{name:"text",displayName:"text",description:"The text/message for Dislate to translate. Please note some formatting of mentions and emojis may break due to the API.",displayDescription:"The text/message for Dislate to translate. Please note some formatting of mentions and emojis may break due to the API.",type:R.STRING,required:!0},{name:"language",displayName:"language",description:"The language that Dislate will translate the text into. This can be any language from the list.",displayDescription:"The language that Dislate will translate the text into. This can be any language from the list.",type:R.STRING,choices:[...Q],required:!0}],async execute(e,r){const[n,s]=e;try{var a;switch(i.translator){case 0:a=await x.translate(n.value,null,s.value);case 1:a=await v.translate(n.value,null,s.value)}return await new Promise(function(h){return K.showConfirmationAlert({title:"Are you sure you want to send it?",content:React.createElement(d.Codeblock,null,a.text),confirmText:"Yep, send it!",onConfirm:function(){return h({content:a.text})},cancelText:"Nope, don't send it"})})}catch(h){return P.logger.error(h),Z.sendBotMessage(r.channel.id,"Failed to translate message. Please check Debug Logs for more info.",l.getAssetIDByName("Small"))}}})}const{FormRow:S}=d.Forms,{ScrollView:j}=t.ReactNative;function te(){N.useProxy(i);const[e,r]=t.React.useState("");return i.translator==0?t.React.createElement(j,{style:{flex:1}},t.React.createElement(d.Search,{style:{padding:15},placeholder:"Search Language",onChangeText:function(n){r(n)}}),Object.entries(G).filter(function(n){let[s,a]=n;return s.includes(e)}).map(function(n){let[s,a]=n;return t.React.createElement(S,{label:s,trailing:function(){return t.React.createElement(S.Arrow,null)},onPress:function(){i.target_lang!=a&&(i.target_lang=a,T.showToast(`Saved ToLang to ${s}`,l.getAssetIDByName("check")))}})})):t.React.createElement(j,{style:{flex:1}},t.React.createElement(d.Search,{style:{padding:15},placeholder:"Search Language",onChangeText:function(n){r(n)}}),Object.entries(W).filter(function(n){let[s,a]=n;return s.includes(e)}).map(function(n){let[s,a]=n;return t.React.createElement(S,{label:s,trailing:function(){return t.React.createElement(S.Arrow,null)},onPress:function(){i.target_lang!=a&&(i.target_lang=a,T.showToast(`Saved ToLang to ${s}`,l.getAssetIDByName("check")))}})}))}const{FormRow:A}=d.Forms,{ScrollView:ae}=t.ReactNative;function ne(){return N.useProxy(i),t.React.createElement(ae,{style:{flex:1}},t.React.createElement(A,{label:"DeepL",trailing:function(){return t.React.createElement(A.Arrow,null)},onPress:function(){i.translator!=0&&(i.translator=0,T.showToast("Saved Translator to DeepL",l.getAssetIDByName("check")))}}),t.React.createElement(A,{label:"Google Translate",trailing:function(){return t.React.createElement(A.Arrow,null)},onPress:function(){i.translator!=1&&(i.translator=1,T.showToast("Saved Translator to Google Translate",l.getAssetIDByName("check")))}}))}const{ScrollView:re,Text:ie}=t.ReactNative,{FormRow:f}=d.Forms,se=t.stylesheet.createThemedStyleSheet({subheaderText:{color:k.semanticColors.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:t.constants.Fonts.PRIMARY_BOLD,fontSize:14}});function le(){var e;const r=t.NavigationNative.useNavigation();return N.useProxy(i),t.React.createElement(re,null,t.React.createElement(f,{label:"Translate to",subLabel:(e=i.target_lang)===null||e===void 0?void 0:e.toLowerCase(),leading:t.React.createElement(f.Icon,{source:l.getAssetIDByName("ic_activity_24px")}),trailing:function(){return t.React.createElement(f.Arrow,null)},onPress:function(){return r.push("VendettaCustomPage",{title:"Translate to",render:te})}}),t.React.createElement(f,{label:"Translator",subLabel:i.translator?"Google Translate":"DeepL",leading:t.React.createElement(f.Icon,{source:l.getAssetIDByName("ic_locale_24px")}),trailing:function(){return t.React.createElement(f.Arrow,null)},onPress:function(){return r.push("VendettaCustomPage",{title:"Translator",render:ne})}}),t.React.createElement(ie,{style:se.subheaderText,onPress:function(){return t.url.openURL("https://github.com/Rico040/bunny-plugins")}},`Build: (${D.manifest.hash.substring(0,7)})`))}const i=D.storage;i.target_lang??="EN",i.translator??=0;let F=[];var oe={onLoad:function(){return F=[X(),ee()]},onUnload:function(){for(const e of F)e()},settings:le};return p.default=oe,p.settings=i,Object.defineProperty(p,"__esModule",{value:!0}),p})({},vendetta.plugin,vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.ui,vendetta.ui.assets,vendetta.ui.components,vendetta.utils,vendetta,vendetta.commands,vendetta.ui.alerts,vendetta.storage,vendetta.ui.toasts);
