import{u as p,D as h,r as l,e as m,o as v,c as I,b as s,w as f,d as i,v as n,h as c,i as b,j as w,E as y}from"./index.fb74d92e.js";const g={class:"section"},N={class:"columns is-centered"},x=["onSubmit"],Z={class:"field"},z=s("label",{class:"label"},"Email",-1),J={class:"control"},j={class:"field"},B=s("label",{class:"label"},"Password",-1),S={class:"control"},T={class:"field"},U={class:"control"},V=s("button",{class:"button is-success is-fullwidth",type:"submit"},"Register",-1),k={style:{color:"blue"}},E={__name:"Register",setup(C){const r=p();h("https://hyzpbppnefhgsjlozmru.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5enBicHBuZWZoZ3NqbG96bXJ1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjA3NjkzNiwiZXhwIjoxOTgxNjUyOTM2fQ.GIeEyajwYfTpxaz-zUG73Bp3cWeFXyvAx_3wJMRLf_A");const o=l(""),t=l(""),d=async()=>{await y(o.value,t.value)!=!1?r.push({name:"login"}):alert("Something went wrong. Try again")};return(u,e)=>{const _=m("router-link");return v(),I("div",g,[s("div",N,[s("form",{onSubmit:f(d,["prevent"])},[s("div",Z,[z,s("div",J,[i(s("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),class:"input",type:"email",placeholder:"Email"},null,512),[[n,o.value]])])]),s("div",j,[B,s("div",S,[i(s("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>t.value=a),class:"input",type:"password",placeholder:"Password"},null,512),[[n,t.value]])])]),s("div",T,[s("div",U,[V,s("p",null,[c("I already have an account. "),s("span",k,[b(_,{to:{name:"login"}},{default:w(()=>[c(" Log In ")]),_:1})])])])])],40,x)])])}}};export{E as default};
