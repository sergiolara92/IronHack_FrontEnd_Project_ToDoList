import{t as r,g as c,o as t,c as e,b as a,F as l,x as d,f as _,i as u}from"./file_index.7713a4b1.js";import{T as k}from"./file_TaskCard.e1bbbb1f.js";import{u as m}from"./file_task.f5a82164.js";import"./file__plugin-vue_export-helper.e6311040.js";const p={class:"section"},f={class:"container",style:{width:"95vw"}},T=a("h1",{class:"title"},"To Do Tasks",-1),h={class:"columns is-multiline"},v={class:"column is-12-mobile is-4-tablet is-3-desktop"},y={__name:"ToDoTasks",setup(g){const s=m();return r(async()=>{const o=await c();s.tasks=await o.filter(n=>{if(!n.isDone)return!0}),console.log("tareas pendientes",s.tasks)}),(o,n)=>(t(),e("div",p,[a("div",f,[T,a("div",h,[(t(!0),e(l,null,d(_(s).tasks,i=>(t(),e("div",v,[u(k,{task:i},null,8,["task"])]))),256))])])]))}};export{y as default};