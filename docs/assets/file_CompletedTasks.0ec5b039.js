import{r as l,t as n,g as r,o as t,c as a,b as e,F as d,x as _,i as m}from"./file_index.6383c89d.js";import{T as u}from"./file_TaskCard.fa3b380f.js";import"./file__plugin-vue_export-helper.10acf6e4.js";import"./file_task.5491028c.js";const p={class:"section"},k={class:"container",style:{width:"95vw"}},h=e("h1",{class:"title"},"Completed Tasks",-1),v={class:"columns is-multiline"},f={class:"column is-12-mobile is-4-tablet is-3-desktop"},y={__name:"CompletedTasks",setup(T){const s=l();return n(async()=>{const o=await r();s.value=await o.filter(i=>i.isDone),console.log("tareas acabadas",await s.value)}),(o,i)=>(t(),a("div",p,[e("div",k,[h,e("div",v,[(t(!0),a(d,null,_(s.value,c=>(t(),a("div",f,[m(u,{task:c},null,8,["task"])]))),256))])])]))}};export{y as default};