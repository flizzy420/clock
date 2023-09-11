(function(){"use strict";var e={3561:function(e,t,n){var s=n(9242),r=n(3396),i=n(7139),l=n.p+"img/close-icon.1056ea7c.svg",u=n.p+"img/menu-icon.b01660d2.svg";const c={key:0,class:"menu"},o={class:"wrapper"},a=["onClick"],d={class:"wrapper"},h={style:{"margin-right":"4px"}},w={style:{"margin-right":"4px"}},p=["onClick"],g=["onClick"],v={class:"wrapper"},f=["value"],m=(0,r._)("br",null,null,-1),b={class:"wrapper"},k=(0,r._)("br",null,null,-1),S=(0,r._)("br",null,null,-1),D={class:"container"},_={class:"center"},E={id:"clock"},y={key:0,class:"current-event"},j={class:"countdown"},O={key:0},P={class:"event-details"},z={style:{"margin-right":"20px"}},C={style:{"margin-right":"20px"}},M={key:2,class:"other"},H=(0,r._)("br",null,null,-1);function x(e,t,n,x,V,U){const I=(0,r.up)("VueDatePicker");return(0,r.wg)(),(0,r.iD)(r.HY,null,[V.isMenuShown?((0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",o,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(V.presets,((e,t)=>((0,r.wg)(),(0,r.iD)("button",{key:e,onClick:t=>{V.schedule=e,U.refreshSchedule()}},"載入"+(0,i.zw)(t),9,a)))),128))]),(0,r._)("div",d,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(V.schedule,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id},[(0,r._)("span",h,(0,i.zw)(e.name),1),(0,r._)("span",w,(0,i.zw)(e.start)+" ~ "+(0,i.zw)(e.end),1),(0,r._)("button",{onClick:t=>U.editEvent(V.schedule.indexOf(e))},"編輯",8,p),(0,r._)("button",{onClick:t=>U.deleteEvent(V.schedule.indexOf(e))},"刪除",8,g)])))),128))]),(0,r._)("div",v,[(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>V.selectedSubject=e)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(V.subjects,(e=>((0,r.wg)(),(0,r.iD)("option",{value:e,key:e},(0,i.zw)(e),9,f)))),128))],512),[[s.bM,V.selectedSubject]]),(0,r.Wm)(I,{class:"time-picker",modelValue:V.selectedStart,"onUpdate:modelValue":t[1]||(t[1]=e=>V.selectedStart=e),"time-picker":""},null,8,["modelValue"]),(0,r.Wm)(I,{class:"time-picker",modelValue:V.selectedEnd,"onUpdate:modelValue":t[2]||(t[2]=e=>V.selectedEnd=e),"time-picker":""},null,8,["modelValue"]),(0,r._)("button",{onClick:t[3]||(t[3]=(...e)=>U.pushNewEvent&&U.pushNewEvent(...e))},"新增"),m]),(0,r._)("div",b,[(0,r._)("button",{onClick:t[4]||(t[4]=e=>{V.showPersons=!V.showPersons})},(0,i.zw)(V.showPersons?"隱藏":"顯示"),1),k,(0,r.Uk)(" 應到 "+(0,i.zw)(V.totalPersons)+" 人 ",1),(0,r._)("button",{onClick:t[5]||(t[5]=e=>V.totalPersons++)},"+"),(0,r._)("button",{onClick:t[6]||(t[6]=e=>V.totalPersons--)},"-"),S,(0,r.Uk)(" 實到 "+(0,i.zw)(V.totalPersons-V.absentPersons)+" 人 ",1),(0,r._)("button",{onClick:t[7]||(t[7]=e=>V.absentPersons--)},"+"),(0,r._)("button",{onClick:t[8]||(t[8]=e=>V.absentPersons++)},"-")]),(0,r._)("img",{class:"menu-btn",src:l,onClick:t[9]||(t[9]=e=>V.isMenuShown=!1)})])):(0,r.kq)("",!0),(0,r._)("div",D,[(0,r._)("div",_,[(0,r._)("span",E,(0,i.zw)(V.time),1)]),null!=V.currentEvent?((0,r.wg)(),(0,r.iD)("div",y,[(0,r._)("div",j,[null!=V.countdown?((0,r.wg)(),(0,r.iD)("span",O,"剩下 "+(0,i.zw)(V.countdown)+" 分鐘",1)):(0,r.kq)("",!0)]),(0,r._)("div",P,[(0,r._)("span",z,(0,i.zw)(V.currentEvent.name),1),(0,r._)("span",null,(0,i.zw)(V.currentEvent.start)+" ~ "+(0,i.zw)(V.currentEvent.end),1)])])):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)(V.activeSchedule,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"schedule center",key:e.id},[(0,r._)("span",C,(0,i.zw)(e.name),1),(0,r._)("span",null,(0,i.zw)(e.start)+" ~ "+(0,i.zw)(e.end),1)])))),128)),V.showPersons?((0,r.wg)(),(0,r.iD)("span",M,[(0,r.Uk)(" 應到 "+(0,i.zw)(V.totalPersons)+" 人 ",1),H,(0,r.Uk)(" 實到 "+(0,i.zw)(V.totalPersons-V.absentPersons)+" 人 ",1)])):(0,r.kq)("",!0),V.isMenuShown?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("img",{key:3,class:"menu-btn",src:u,onClick:t[10]||(t[10]=e=>V.isMenuShown=!V.isMenuShown)}))])],64)}n(7658);var V={name:"App",data(){let e=new Date;return{time:"00:00:00",countdown:null,scheduleId:10,schedule:[{id:1,name:"英文",start:"14:50",end:"15:00"},{id:2,name:"數學",start:"16:50",end:"17:40"},{id:3,name:"國文",start:"17:50",end:"21:50"}],activeSchedule:[],currentEvent:null,isMenuShown:!1,selectedSubject:"國文",selectedStart:{hours:e.getHours(),minutes:e.getMinutes()},selectedEnd:{hours:e.getHours(),minutes:e.getMinutes()},subjects:["國文","英文","數學","電學","作文","專一","專二"],showPersons:!0,totalPersons:36,absentPersons:0,presets:{"模考":[{id:1,name:"國文",start:"08:20",end:"10:00"},{id:2,name:"英文",start:"10:20",end:"12:00"},{id:3,name:"專二",start:"13:10",end:"14:50"}],"模考D2":[{id:1,name:"數學",start:"08:20",end:"09:40"},{id:2,name:"專一",start:"10:20",end:"12:00"}]}}},mounted(){setInterval((()=>{let e=new Date,t=e.getHours(),n=e.getMinutes(),s=e.getSeconds(),r=t<10?"0"+t:t,i=n<10?"0"+n:n,l=s<10?"0"+s:s;if(this.time=r+":"+i+":"+l,this.currentEvent){let s=this.getDateObject(this.currentEvent.start),r=this.getDateObject(this.currentEvent.end);if(e>s&&e<=r){let e=r.getHours()-t,s=r.getMinutes()-n;this.countdown=60*e+s-1}else this.refreshSchedule()}else for(let u of this.schedule){let t=this.getDateObject(u.start),n=this.getDateObject(u.end);e>t&&e<n&&(this.currentEvent=u)}}),1e3),this.refreshSchedule()},watch:{schedule(){this.refreshSchedule()}},methods:{getDateObject(e){let t=new Date,n=e.split(":");return t.setHours(parseInt(n[0]),parseInt(n[1])),t},getDateString(e){return e.hours.toString().padStart(2,"0")+":"+e.minutes.toString().padStart(2,"0")},refreshSchedule(){let e=new Date;this.activeSchedule=this.schedule.filter((t=>e<this.getDateObject(t.end))),this.currentEvent=null,this.countdown=null},editEvent(e){let t=this.schedule.splice(e,1)[0],n=this.getDateObject(t.start),s=this.getDateObject(t.end);this.selectedStart.hours=n.getHours(),this.selectedStart.minutes=n.getMinutes(),this.selectedEnd.hours=s.getHours(),this.selectedEnd.minutes=s.getMinutes(),this.selectedSubject=t.name,this.refreshSchedule()},deleteEvent(e){this.schedule.splice(e,1),this.refreshSchedule()},pushNewEvent(){this.schedule.push({id:++this.scheduleId,name:this.selectedSubject,start:this.getDateString(this.selectedStart),end:this.getDateString(this.selectedEnd)}),this.refreshSchedule()}}},U=n(89);const I=(0,U.Z)(V,[["render",x]]);var Y=I,q=n(393);const K=(0,s.ri)(Y);K.component("VueDatePicker",q.Z),K.mount("#app")}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,s,r,i){if(!s){var l=1/0;for(a=0;a<e.length;a++){s=e[a][0],r=e[a][1],i=e[a][2];for(var u=!0,c=0;c<s.length;c++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](s[c])}))?s.splice(c--,1):(u=!1,i<l&&(l=i));if(u){e.splice(a--,1);var o=r();void 0!==o&&(t=o)}}return t}i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[s,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/clock/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,i,l=s[0],u=s[1],c=s[2],o=0;if(l.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var a=c(n)}for(t&&t(s);o<l.length;o++)i=l[o],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(a)},s=self["webpackChunkclock"]=self["webpackChunkclock"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(3561)}));s=n.O(s)})();
//# sourceMappingURL=app.c5cd80d8.js.map