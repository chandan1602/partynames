var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<i;t++)for(var s=arguments[t],a=0,r=s.length;a<r;a++,o++)n[o]=s[a];return n},WidgetMessageType=void 0;!function(e){e.IDENTIFY_USER="identify-user",e.SEND_CHAT_MESSAGE="send-chat-message",e.CLEAR_CHATS="clear-chats",e.ON_CHAT_LOADED="on-chat-loaded",e.SET_CUSTOM_FIELDS="set-custom-fields",e.ON_CHAT_STARTED="on-chat-started",e.CHAT_MESSAGE_RECEIVED="chat-message-received",e.GO_TO_CHAT_ROOM="go-to-chat-room",e.GO_TO_CHAT_CONTACT_PAGE="go-to-chat-contact-page",e.GO_TO_CHAT_CLOSED_VIEW="go-to-chat-closed-view",e.CLOSE_WIDGET="close-widget",e.SET_CUSTOM_KB_HEADER="set-custom-kb-header",e.SET_CUSTOM_HOME_PAGE="set-custom-home-page",e.SET_CUSTOM_HERO_HTML="set-custom-hero-html",e.AUTHENTICATOR_ADDED="authenticator-added",e.VIEW_LOADED="view-loaded",e.AUTHENTICATION_REQUEST="authentication-request",e.AUTHENTICATION_RESPONSE="authentication-response",e.OVERRIDE_GREETING_MESSAGE="override-greeting-message"}(WidgetMessageType||(WidgetMessageType={}));var calculateColorDifference_1=function(e,t){var i=function(e){e=e.replace("#","");var t=parseInt(e.substr(0,2),16),i=parseInt(e.substr(2,2),16),n=parseInt(e.substr(4,2),16);return{r:t,g:i,b:n}},n=i(e),o=i(t);return Math.max(n.r,o.r)-Math.min(n.r,o.r)+(Math.max(n.g,o.g)-Math.min(n.g,o.g))+(Math.max(n.b,o.b)-Math.min(n.b,o.b))},getIdealTextColor_1=function(e){var t=["#ffffff","#445868"],i=t.reduce(function(t,i){var n=calculateColorDifference_1(e,i);return n>t.diff?{diff:n,color:i}:t},{diff:0,color:t&&t[0]});return i.color};!function(){var e,t="answers-widget-launcher-container",i="frame-container",n="answers-widget-frame",o="launcher-icon",s=61,a="15px",r="calc(100% - 166px)",d=580,c=[],h=[],l=function(e,t){for(var i in t)t.hasOwnProperty(i)&&"string"==typeof i&&(e.style[i]=t[i])},p={position:"fixed",top:"0",left:"0",display:"none",width:"100%",height:"100%",transition:"opacity 0.2s ease",backgroundColor:"rgba(0,0,0,0.5)",zIndex:"11",alignItems:"center",justifyContent:"center"},u={border:"0",maxWidth:"80%",maxHeight:"80%"},g={border:"0",maxWidth:"100%",maxHeight:"100%"},m={transition:"transform 0.2s ease",position:"absolute",top:"0",left:"0",width:s+"px",height:s+"px"},f={transition:"transform 0.2s ease",position:"absolute",top:"0",left:"0",width:s+"px",height:s+"px",transform:"rotateZ(-45deg)",opacity:"0"},y={width:"100%",height:"100%",border:"0",overflow:"hidden"},C={background:"white",position:"fixed",bottom:"110px",width:"380px",height:r,maxWidth:"calc(100% - 30px)",maxHeight:"625px",minHeight:"150px",boxShadow:"0 2px 24px 0 rgba(0, 0, 0, 0.48)",display:"none",transition:"opacity 0.2s ease, height 0.3s ease",borderRadius:"6px",overflow:"hidden"},T={background:"white",position:"fixed",bottom:"0",top:"0",right:"0",left:"0",display:"none",transition:"opacity 0.2s ease",overflow:"hidden"},E={bottom:"20px",boxSizing:"border-box",cursor:"pointer",fontSize:"25px",position:"fixed",height:s+"px",minWidth:s+"px",maxWidth:s+"px",textAlign:"center",transition:"all .2s ease-out",boxShadow:"0 2px 4px 0 rgba(0, 0, 0, 0.2)",fill:"currentColor",verticalAlign:"sub",zIndex:"9"},M={position:"fixed",bottom:"0",width:"0",height:"0",zIndex:"999999999"},w={position:"absolute",height:"20px",backgroundColor:"#389eec",borderRadius:"12px",fontSize:"12px",fontWeight:"bold",fontFamily:"sans-serif",lineHeight:"20px",border:"2px solid white",top:"-5px",left:"-5px",padding:"0 7px",display:"none"},_=function(){function e(e){this.baseUrl="",this.radius=15,this.color="",this.textColor="",this.right="",this.left="",this.icon="",this.font={name:"",url:""},this.isLeft=!1,this.articleId="",this.categoryId="",this.isMobile=!1,this.isWasOpen=!1,this.isRestricted=!1,this.closeIcon='<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">\n\t\t\t<g fill-rule="evenodd">\n\t\t\t\t<path d="M30 27.172l4.378-4.378a1.01 1.01 0 0 1 1.422.006l1.4 1.4a1 1 0 0 1 .006 1.422L32.828 30l4.378 4.378A1.01 1.01 0 0 1 37.2 35.8l-1.4 1.4a1 1 0 0 1-1.422.006L30 32.828l-4.378 4.378A1.01 1.01 0 0 1 24.2 37.2l-1.4-1.4a1 1 0 0 1-.006-1.422L27.172 30l-4.378-4.378A1.01 1.01 0 0 1 22.8 24.2l1.4-1.4a1 1 0 0 1 1.422-.006L30 27.172z"/>\n\t\t\t</g>\n\t\t</svg>',this.unreadMessagesCount=0,this.applySettings(e),this.initializeLauncherElements(),this.initializeFrameContainer(),this.initializeMediaViewer(),this.initializeLauncherIcon(),this.initializeOpenLauncherIcon(),this.initializeCloseLauncherIcon(),this.applyStyleToLauncherContainer(),this.hideFrameContainer()}return e.prototype.initializeLauncherElements=function(){var e=this;this.openLauncherIcon=document.createElement("span"),this.unreadMessagesElement=document.createElement("span"),this.closeLauncherIcon=document.createElement("span"),this.launcherIcon=document.createElement("span"),this.widgetFrame=document.createElement("iframe"),this.frameContainer=document.createElement("div"),this.mediaViewer=document.createElement("div"),this.launcherContainerElement=document.createElement("div"),this.launcherContainerElement.id=t,this.launcherContainerElement.addEventListener("click",function(t){e.handleLauncherClick(t),e.isWasOpen||(e.isWasOpen=!0,e.widgetFrame.contentWindow.postMessage({firstOpen:!0},"*"))}),this.launcherIcon.appendChild(this.openLauncherIcon),this.launcherIcon.appendChild(this.closeLauncherIcon),this.launcherContainerElement.appendChild(this.mediaViewer),this.launcherContainerElement.appendChild(this.launcherIcon),this.launcherContainerElement.appendChild(this.frameContainer),document.body.appendChild(this.launcherContainerElement)},e.prototype.initializeOpenLauncherIcon=function(){var e=this.openLauncherIcon;e.id="open-launcher-icon",l(e,m),l(this.unreadMessagesElement,w),this.updateOpenLauncherIcon()},e.prototype.updateOpenLauncherIcon=function(){var e=this.openLauncherIcon;e.innerHTML=""+this.icon,e.appendChild(this.unreadMessagesElement)},e.prototype.updateCloseLauncherIcon=function(){var e=this.closeLauncherIcon;e.innerHTML=""+this.closeIcon},e.prototype.initializeCloseLauncherIcon=function(){var e=this.closeLauncherIcon;e.id="close-launcher-icon",l(e,f),this.updateCloseLauncherIcon()},e.prototype.updateLauncherIcon=function(){var e=this.launcherIcon;e.style.backgroundColor=""+this.color,e.style.color=""+this.textColor,e.style.borderRadius=this.radius+"px",e.style.right=""+this.right,e.style.left=""+this.left},e.prototype.initializeLauncherIcon=function(){var e=this.launcherIcon;return e.id=o,l(e,E),this.updateLauncherIcon(),e},e.prototype.initializeMediaViewer=function(){var e=this,t=this.mediaViewer;t.id="widget-media-viewer",l(t,p);var i=document.createElement("img");return l(i,this.isMobile?g:u),t.appendChild(i),t.addEventListener("click",function(e){e.stopPropagation(),t.style.opacity="0",setTimeout(function(){t.style.display="none"},200)}),window.addEventListener("message",function(n){0===e.baseUrl.indexOf(n.origin)&&n.data.imageSrc&&(i.src=n.data.imageSrc,t.style.display="flex",t.style.opacity="0",setTimeout(function(){t.style.opacity="1"},1))},!1),t},e.prototype.initializeWidgetFrame=function(){var e=this.widgetFrame;return e.id=n,this.isRestricted||(e.src=""+this.baseUrl),e.allowFullscreen=!0,l(e,y),e},e.prototype.initializeFrameContainer=function(){var e=this.frameContainer;if(e.id=i,this.isMobile?l(e,T):l(e,C),this.updateFrameContainer(),!e.innerHTML){var t=this.initializeWidgetFrame();e.appendChild(t)}},e.prototype.updateFrameContainer=function(){var e=this.frameContainer;e.style.right=this.isMobile?"0":this.right,e.style.left=this.isMobile?"0":this.left},e.prototype.hideFrameContainer=function(){this.frameContainer.style.display="none"},e.prototype.applyStyleToLauncherContainer=function(){var e=this.launcherContainerElement;return l(e,M),this.isLeft?e.style.left="0":e.style.right="0",e},e.prototype.handleLauncherClick=function(e){var t=this,i=this.frameContainer,n=this.openLauncherIcon,o=this.closeLauncherIcon,s="none"!==i.style.display;this.widgetFrame.contentWindow.postMessage({isVisible:!s,isTrusted:e.isTrusted},"*"),n&&o&&(s?(i.style.opacity="0",n.style.opacity="1",this.launcherIcon.style.display="block",setTimeout(function(){n.style.transform="rotateZ(0deg) scale(1)",o.style.transform="rotateZ(-45deg)"},1),setTimeout(function(){o.style.opacity="0"},100),setTimeout(function(){i.style.display="none"},200),h.forEach(function(e){return e()})):(this.unreadMessagesCount=0,this.unreadMessagesElement.style.display="none",i.style.display="block",i.style.opacity="0",o.style.opacity=this.isMobile?"0":"1",n.style.transform="rotateZ(90deg) scale(0)",setTimeout(function(){i.style.opacity="1",o.style.transform="rotateZ(0deg)"},1),setTimeout(function(){n.style.opacity="none",setTimeout(function(){t.launcherIcon.style.display=t.isMobile?"none":"block"},100)},200),c.forEach(function(e){return e()})))},e.prototype.applySettings=function(e){this.isMobile=(I.outerWidth||I.screen.width)<=d,this.color=e.color,this.textColor=getIdealTextColor_1(e.color),this.radius=Math.floor(s/2*e.convex),this.isLeft="left"===e.position,this.left=this.isLeft?a:"auto",this.right=e.position&&this.isLeft?"auto":a,this.icon=e.icon?decodeURI(e.icon):"";var t=e.preview?"?preview=true"+(this.isMobile?"&mobile=true":""):this.isMobile?"?mobile=true":"";if(this.baseUrl=""+e.baseUrl+t,this.font=e.font,!this.isWasOpen)if((e.articleId||this.articleId!==e.articleId)&&this.widgetFrame){var i=e.articleId?"/article/"+e.articleId:"";this.widgetFrame.src=""+e.baseUrl+i+t,e.categoryId=""}else if((e.categoryId||this.categoryId!==e.categoryId)&&this.widgetFrame){var n=e.categoryId?"/category/"+e.categoryId:"";this.widgetFrame.src=""+e.baseUrl+n+t,e.articleId=""}this.articleId=e.articleId,this.categoryId=e.categoryId,this.isRestricted=e.restrictedWidget},e.prototype.render=function(e){this.applySettings(e),this.applyStyleToLauncherContainer(),this.updateLauncherIcon(),this.updateOpenLauncherIcon(),this.updateCloseLauncherIcon(),this.updateFrameContainer()},e}(),W=function(){function e(e){var t=this;this.onChatLoadedCallbacks=[],this.didChatLoad=!1,this.onChatStartedCallbacks=[],this.onChatMessageReceivedCallbacks=[],this.chatTicketId="",this.wasOpen=!1,this.sdkMemory={},this.settings=e,this.launcher=new _(e),this.frame=document.getElementById(n);var o=document.getElementById(i);window.addEventListener("message",function(e){if(t.isMessageValid(e)){var i=I.outerWidth>d;if(0===t.settings.baseUrl.indexOf(e.origin))if(e.data.closeWidget)t.close(),t.frame.src=t.frame.src;else if(i&&e.data.kbHomepageSearchOnlyMode===!0)o.style.height="168px";else if(i&&e.data.kbHomepageSearchOnlyMode===!1)o.style.height=r;else if(e.data.__ansWidget){var n=e.data.__ansWidget.type;switch(n){case WidgetMessageType.ON_CHAT_LOADED:t.didChatLoad=!0,t.onChatLoadedCallbacks.forEach(function(e){return e()});break;case WidgetMessageType.ON_CHAT_STARTED:t.chatTicketId=e.data.__ansWidget.data.ticketId,t.onChatStartedCallbacks.forEach(function(e){return e(t.chatTicketId)});break;case WidgetMessageType.CHAT_MESSAGE_RECEIVED:var s="none"!==t.launcher.frameContainer.style.display;s||(t.launcher.unreadMessagesCount+=1,t.launcher.unreadMessagesElement.innerText=""+t.launcher.unreadMessagesCount,t.launcher.unreadMessagesElement.style.display="block"),t.onChatMessageReceivedCallbacks.forEach(function(e){return e()});break;case WidgetMessageType.CLOSE_WIDGET:t.toggle(!1);break;case WidgetMessageType.VIEW_LOADED:t.onViewLoaded();break;case WidgetMessageType.AUTHENTICATION_REQUEST:t.authenticator&&t.authenticator().then(function(e){t.frame.contentWindow&&t.frame.contentWindow.postMessage({__ansWidget:{type:WidgetMessageType.AUTHENTICATION_RESPONSE,data:{token:e}}},"*")})}}}},!1)}return e.prototype.isMessageValid=function(e){return this.frame&&e.source===this.frame.contentWindow},e.prototype.moveFrame=function(e,t){var i=document.getElementById(t),n=document.getElementById(e);if(n&&i)for(;n.childNodes.length>0;)i.appendChild(n.childNodes[0])},e.prototype.onViewLoaded=function(){var e=this.sdkMemory,t=e.customHeroHtml,i=e.customHomePage,n=e.customKbHeader,o=e.customFields,s=e.clearChats,a=e.chatMessage,r=e.user,d=e.labels,c=e.authenticatorAdded,h=e.greetingMessage;c&&this.frame.contentWindow&&this.frame.contentWindow.postMessage({__ansWidget:{type:WidgetMessageType.AUTHENTICATOR_ADDED,data:{}}},"*"),this.launcher.isWasOpen&&(this.launcher.widgetFrame.contentWindow.postMessage({isVisible:!0,isTrusted:!0},"*"),this.launcher.widgetFrame.contentWindow.postMessage({firstOpen:!0},"*")),a&&this.sendChatMessage(a),t&&this.addCustomHeroHtml(t),i&&this.setCustomHomePage(i),n&&this.setCustomKbHeader(n),o&&this.setCustomFields(o),r&&this.identifyUser(r),d&&this.addLabelsOnSubmit(d),s&&this.clearChats(s.endExisting),h&&this.overrideChatGreetingMessage(h)},e.prototype.update=function(e){var t=this,i={};Object.keys(this.settings).forEach(function(e){return i[e]=t.settings[e]}),Object.keys(e).forEach(function(t){return i[t]=e[t]}),this.settings=i,this.launcher.render(this.settings),this.frame.contentWindow&&this.frame.contentWindow.postMessage({previewNewSettings:e},"*")},e.prototype.toggle=function(e){var n=document.getElementById(i),o="none"!==n.style.display;if(e!==o){var s=document.getElementById(t);s.onclick?s.onclick():s.click&&s.click()}},e.prototype.injectToElementById=function(e){var t=this;this.onLoad(function(){t.launcher.widgetFrame.contentWindow.postMessage({isVisible:!0},"*"),t.launcher.isWasOpen||(t.launcher.isWasOpen=!0,t.launcher.widgetFrame.contentWindow.postMessage({firstOpen:!0},"*"))}),this.moveFrame(i,e)},e.prototype.ejectFromElementById=function(e){var t=this;this.onLoad(function(){t.launcher.widgetFrame.contentWindow.postMessage({isVisible:!1},"*")}),this.moveFrame(e,i)},e.prototype.onLoad=function(e){this.frame.onload=function(){e&&e()}},e.prototype.goToKbHome=function(){this.frame.contentWindow&&this.frame.contentWindow.postMessage({goToKbHome:!0},"*")},e.prototype.goToContact=function(){this.frame.contentWindow&&this.frame.contentWindow.postMessage({goToContact:!0},"*")},e.prototype.goToChat=function(){this.frame.contentWindow&&this.frame.contentWindow.postMessage({goToChat:!0},"*")},e.prototype.goToArticle=function(e){this.frame.contentWindow&&this.frame.contentWindow.postMessage({goToArticleId:e},"*")},e.prototype.goToCategory=function(e){this.frame.contentWindow&&this.frame.contentWindow.postMessage({goToCategoryId:e},"*")},e.prototype.open=function(){this.toggle(!0)},e.prototype.close=function(){this.toggle(!1)},e.prototype.hide=function(){this.close();var e=document.getElementById(o);e.style.display="none"},e.prototype.show=function(){var e=document.getElementById(o);e.style.display="block"},e.prototype.destroy=function(){var e=document.getElementsByTagName("body")[0],i=document.getElementById(t);i&&(e.removeChild(i),delete I.AnswersWidget)},e.prototype.switchModules=function(e){this.frame.contentWindow&&this.frame.contentWindow.postMessage({switchModules:e},"*")},e.prototype.overwriteTransition=function(e){this.frame.contentWindow&&this.frame.contentWindow.postMessage({previewOverwriteTransition:e},"*")},e.prototype.addLabelsOnSubmit=function(e){this.frame.contentWindow&&this.frame.contentWindow.postMessage({labelsOnSubmit:e},"*"),this.sdkMemory.labels=e},e.prototype.identifyUser=function(e,t){this.frame.contentWindow&&this.frame.contentWindow.postMessage({__ansWidget:{type:WidgetMessageType.IDENTIFY_USER,data:{userData:e,formTitle:t}}},"*"),this.sdkMemory.user=e},e.prototype.sendChatMessage=function(e){this.frame.contentWindow&&this.frame.contentWindow.postMessage({__ansWidget:{type:WidgetMessageType.SEND_CHAT_MESSAGE,data:e}},"*"),this.sdkMemory.chatMessage=e},e.prototype.clearChats=function(e){this.frame.contentWindow&&this.frame.contentWindow.postMessage({__ansWidget:{type:WidgetMessageType.CLEAR_CHATS,data:{endExistingChat:e}}},"*"),this.sdkMemory.clearChats={endExisting:!!e}},e.prototype.beginChatWithForm=function(){},e.prototype.goToChatRoom=function(e){this.frame.contentWindow&&this.frame.contentWindow.postMessage({__ansWidget:{type:WidgetMessageType.GO_TO_CHAT_ROOM,data:{previewMode:e}}},"*")},e.prototype.goToChatContactPage=function(){this.frame.contentWindow&&this.frame.contentWindow.postMessage({__ansWidget:{type:WidgetMessageType.GO_TO_CHAT_CONTACT_PAGE,data:{}}},"*")},e.prototype.goToChatClosedView=function(){this.frame.contentWindow&&this.frame.contentWindow.postMessage({__ansWidget:{type:WidgetMessageType.GO_TO_CHAT_CLOSED_VIEW,data:{}}},"*")},e.prototype.onChatLoaded=function(e){this.onChatLoadedCallbacks=__spreadArrays(this.onChatLoadedCallbacks,[e]),this.didChatLoad&&e()},e.prototype.onChatStarted=function(e){this.onChatStartedCallbacks=__spreadArrays(this.onChatStartedCallbacks,[e]),this.chatTicketId&&e(this.chatTicketId)},e.prototype.setCustomFields=function(e){this.frame.contentWindow&&this.frame.contentWindow.postMessage({__ansWidget:{type:WidgetMessageType.SET_CUSTOM_FIELDS,data:{customFields:e}}},"*"),this.sdkMemory.customFields=e},e.prototype.setCustomKbHeader=function(e){this.frame.contentWindow&&this.frame.contentWindow.postMessage({__ansWidget:{type:WidgetMessageType.SET_CUSTOM_KB_HEADER,data:{headerHtml:e}}},"*"),this.sdkMemory.customKbHeader=e},e.prototype.setCustomHomePage=function(e){this.frame.contentWindow&&this.frame.contentWindow.postMessage({__ansWidget:{type:WidgetMessageType.SET_CUSTOM_HOME_PAGE,data:{homePageHtml:e}}},"*"),this.sdkMemory.customHomePage=e},e.prototype.addCustomHeroHtml=function(e){this.frame.contentWindow&&this.frame.contentWindow.postMessage({__ansWidget:{type:WidgetMessageType.SET_CUSTOM_HERO_HTML,data:{heroHtml:e}}},"*"),this.sdkMemory.customHeroHtml=e},e.prototype.onWidgetOpened=function(e){c.push(e)},e.prototype.onWidgetClosed=function(e){h.push(e)},e.prototype.addAuthenticationFn=function(e){var t=this;this.authenticator=e,this.frame.contentWindow&&this.frame.contentWindow.postMessage({__ansWidget:{type:WidgetMessageType.AUTHENTICATOR_ADDED,data:{}}},"*"),this.sdkMemory.authenticatorAdded=!0,this.settings.restrictedWidget&&e().then(function(e){var i=t.launcher.baseUrl,n=(i.indexOf("?")!==-1?"&":"?")+"token="+e;t.frame.src=""+t.launcher.baseUrl+n})},e.prototype.onChatMessageReceived=function(e){this.onChatMessageReceivedCallbacks=__spreadArrays(this.onChatMessageReceivedCallbacks,[e])},e.prototype.overrideChatGreetingMessage=function(e){this.frame.contentWindow&&this.frame.contentWindow.postMessage({__ansWidget:{type:WidgetMessageType.OVERRIDE_GREETING_MESSAGE,data:{greetingMessage:e}}},"*"),this.sdkMemory.greetingMessage=e},e}(),I=window;try{e=I._testSettings||JSON.parse("{\"baseUrl\":\"https://wix.wixanswers.com/apps/widget/v1/wix/3863877f-d5aa-4b5a-bdaa-357add14f43f/view/en\",\"color\":\"#d9e3f0\",\"font\":{\"name\":\"Roboto\",\"url\":\"https://fonts.googleapis.com/css?family=Roboto\"},\"convex\":1,\"icon\":\"%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%3E%20%3Cpath%20fill-rule=%22evenodd%22%20d=%22M36.36%2022.6c.62%201%20.66%201.42.66%202.23%200%20.72-.13%201.33-.37%201.84-.25.5-.65%201-1%201.33-.37.33-.84.7-1.42%201.1-.7.47-1.13.85-1.52%201.3-.36.48-.6%201.13-.63%201.67%200%20.52-.44.94-1%20.94l-2.02.04c-.55%200-1-.45-1-.82-.17-1.15.14-1.5.4-2.1.27-.56%201.27-2%202.63-2.92%201.36-.93%201.5-1.4%201.5-1.9s-.16-.84-.48-1.1c-.34-.27-.8-.4-1.37-.4-.87%200-1.73.26-2.53.9-.12.08-.6.6-1.18.16-.6-.45-1.47-1.25-2-1.76-.37-.38-.07-.8.13-.98%201.17-1.2%202.9-2.1%205.85-2.1%202.46.02%204.74%201.63%205.36%202.6zm-4.6%2013.13c.5.5.74%201.07.74%201.76%200%20.7-.25%201.26-.74%201.75-.5.5-1.07.73-1.76.73-.7%200-1.27-.25-1.76-.74-.5-.5-.74-1.08-.74-1.78s.25-1.28.74-1.77c.5-.5%201.07-.73%201.76-.73.7%200%201.27.24%201.76.73z%22/%3E%20%3C/svg%3E\",\"position\":\"right\",\"textColor\":\"#445868\",\"articleId\":\"\",\"categoryId\":\"\",\"allowedDomains\":[],\"preview\":false,\"restrictedWidget\":false}")}catch(e){}I.AnswersWidget=new W(e),I.addEventListener("message",function(e){if(void 0!==e.data.font||void 0!==e.data.kbModule){var t=e.data;I.AnswersWidget.update(t)}}),navigator.sendBeacon("https://frog.wix.com/wix-answers?src=77&evid=2014&locale=en&referral_url=https%3A%2F%2Fwww.wix.com%2Flogo%2Fmaker%2Fesh&client_id=c050e62c-31b9-44ef-957c-3ea47cdfeda4&tenant_id=12345678-1234-1234-1234-1234567890ab&widget_id=3863877f-d5aa-4b5a-bdaa-357add14f43f&_="+Date.now())}();