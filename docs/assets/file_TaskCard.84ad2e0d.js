import{r as v,o as a,c as n,b as e,t as u,d as k,v as r,x as i,F as g,y as m,z as p,A as w,B as C,p as _,k as x}from"./file_index.f5e12afa.js";import{_ as D,u as T}from"./file__plugin-vue_export-helper.10b9259a.js";const c=t=>(_("data-v-7e239ca9"),t=t(),x(),t),$={key:0,class:"card"},V={class:"card-content"},S={key:0,class:"content"},U={class:"card-title"},B={key:1,class:"content"},I={class:"botones"},q=c(()=>e("i",{class:"fa-regular fa-circle-check"},null,-1)),F=[q],N=c(()=>e("i",{class:"fa-regular fa-pen-to-square"},null,-1)),j=[N],z=c(()=>e("i",{class:"fa-solid fa-trash"},null,-1)),A=[z],E=c(()=>e("i",{class:"fa-solid fa-floppy-disk"},null,-1)),M=[E],O={key:1,class:"card doneCard"},G={class:"card-content"},H={key:0,class:"content"},J={class:"card-title isDone"},K={class:"isDone"},L={key:1,class:"content"},P={class:"botones"},Q=c(()=>e("i",{class:"fa-solid fa-rotate-left"},null,-1)),R=[Q],W=c(()=>e("i",{class:"fa-regular fa-pen-to-square"},null,-1)),X=[W],Y=c(()=>e("i",{class:"fa-solid fa-trash"},null,-1)),Z=[Y],tt=c(()=>e("i",{class:"fa-solid fa-floppy-disk"},null,-1)),st=[tt],et={__name:"TaskCard",props:{task:Object},setup(t){T(),v(""),v("");const l=v(!1),y=async d=>{await m(d),window.location.reload(!0)},h=async d=>{await p(d),window.location.reload(!0)},b=async d=>{await w(d),window.location.reload(!0)},f=async(d,s)=>{await C(d,s),console.log("tarea "+d+" modificada"),window.location.reload(!0)};return(d,s)=>(a(),n(g,null,[t.task.isDone?i("",!0):(a(),n("div",$,[e("div",V,[l.value?(a(),n("div",B,[k(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.task.title=o),class:"input",type:"text",placeholder:"title of your task"},null,512),[[r,t.task.title]]),k(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>t.task.description=o),class:"input",type:"text",placeholder:"e.g. make an app"},null,512),[[r,t.task.description]])])):(a(),n("div",S,[e("div",U,u(t.task.title),1),e("div",null,u(t.task.description),1)])),e("div",I,[l.value?i("",!0):(a(),n("button",{key:0,onClick:s[2]||(s[2]=o=>b(t.task.id)),class:"button is-ghost p-0"},F)),l.value?i("",!0):(a(),n("button",{key:1,onClick:s[3]||(s[3]=o=>l.value=!0),class:"button is-ghost p-0"},j)),l.value?i("",!0):(a(),n("button",{key:2,onClick:s[4]||(s[4]=o=>y(t.task.id)),class:"button is-ghost"},A)),l.value?(a(),n("button",{key:3,onClick:s[5]||(s[5]=o=>f(t.task.id,t.task)),class:"button is-ghost",style:{"text-align":"center"}},M)):i("",!0)])])])),t.task.isDone?(a(),n("div",O,[e("div",G,[l.value?(a(),n("div",L,[k(e("input",{"onUpdate:modelValue":s[6]||(s[6]=o=>t.task.title=o),class:"input",type:"text",placeholder:"title of your task"},null,512),[[r,t.task.title]]),k(e("input",{"onUpdate:modelValue":s[7]||(s[7]=o=>t.task.description=o),class:"input",type:"text",placeholder:"e.g. make an app"},null,512),[[r,t.task.description]])])):(a(),n("div",H,[e("div",J,u(t.task.title),1),e("div",K,u(t.task.description),1)])),e("div",P,[l.value?i("",!0):(a(),n("button",{key:0,onClick:s[8]||(s[8]=o=>h(t.task.id)),class:"button is-ghost p-0"},R)),l.value?i("",!0):(a(),n("button",{key:1,onClick:s[9]||(s[9]=o=>l.value=!0),class:"button is-ghost p-0"},X)),l.value?i("",!0):(a(),n("button",{key:2,onClick:s[10]||(s[10]=o=>y(t.task.id)),class:"button is-ghost"},Z)),l.value?(a(),n("button",{key:3,onClick:s[11]||(s[11]=o=>f(t.task.id,t.task)),class:"button is-ghost",style:{"text-align":"center"}},st)):i("",!0)])])])):i("",!0)],64))}},nt=D(et,[["__scopeId","data-v-7e239ca9"]]);export{nt as T};