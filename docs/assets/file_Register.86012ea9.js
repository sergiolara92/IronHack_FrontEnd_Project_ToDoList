import{u as y,D as k,r as p,e as b,o as t,c as o,b as s,w,d as r,v as c,x as i,h as v,i as g,j as I,E as x}from"./file_index.f5e12afa.js";const C={class:"section"},N={class:"columns is-centered"},V=["onSubmit"],P={class:"field"},U=s("label",{class:"label"},"Email",-1),Z={class:"control has-icons-left"},z=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-envelope"})],-1),J={class:"field"},j=s("label",{class:"label"},"Password",-1),B={class:"control has-icons-left has-icons-right"},S={key:0,class:"fa-solid fa-eye"},T={key:0,class:"fa-solid fa-eye-slash"},M=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-lock"})],-1),E={class:"field"},R=s("label",{class:"label"},"Confirm password",-1),X={class:"control has-icons-left has-icons-right"},G={key:0,class:"fa-solid fa-eye"},O={key:0,class:"fa-solid fa-eye-slash"},Y=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-lock"})],-1),$={class:"field"},A={class:"control"},D=s("button",{class:"button is-success is-fullwidth",type:"submit"},"Register",-1),F={style:{color:"blue"}},q={__name:"Register",setup(L){const f=y();k("https://hyzpbppnefhgsjlozmru.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5enBicHBuZWZoZ3NqbG96bXJ1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjA3NjkzNiwiZXhwIjoxOTgxNjUyOTM2fQ.GIeEyajwYfTpxaz-zUG73Bp3cWeFXyvAx_3wJMRLf_A");const d=p(""),n=p(""),u=p(""),l=p(!1),m=async()=>{if(d.value=="")return alert("Please provide an email");if(n.value=="")return alert("Password field must be filled");if(u.value=="")return alert("Please confirm your password");if(u.value!=n.value)return alert("Password must be the same in both fields");if(u.value.length<6||n.value.length<6)return alert("Password must be at least 6 characters long");await x(d.value,n.value)!=!1?f.push({name:"login"}):alert("Something went wrong. Try again")};return(h,e)=>{const _=b("router-link");return t(),o("div",C,[s("div",N,[s("form",{onSubmit:w(m,["prevent"])},[s("div",P,[U,s("div",Z,[z,r(s("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>d.value=a),class:"input",type:"email",placeholder:"Email"},null,512),[[c,d.value]])])]),s("div",J,[j,s("div",B,[l.value?i("",!0):(t(),o("span",{key:0,onClick:e[1]||(e[1]=a=>l.value=!0),class:"icon is-small is-right is-clickable"},[l.value?i("",!0):(t(),o("i",S))])),l.value?(t(),o("span",{key:1,onClick:e[2]||(e[2]=a=>l.value=!1),class:"icon is-small is-right is-clickable"},[l.value?(t(),o("i",T)):i("",!0)])):i("",!0),M,l.value?i("",!0):r((t(),o("input",{key:2,"onUpdate:modelValue":e[3]||(e[3]=a=>n.value=a),class:"input",type:"password",placeholder:"Password"},null,512)),[[c,n.value]]),l.value?r((t(),o("input",{key:3,"onUpdate:modelValue":e[4]||(e[4]=a=>n.value=a),class:"input",type:"text",placeholder:"Password"},null,512)),[[c,n.value]]):i("",!0)])]),s("div",E,[R,s("div",X,[l.value?i("",!0):(t(),o("span",{key:0,onClick:e[5]||(e[5]=a=>l.value=!0),class:"icon is-small is-right is-clickable"},[l.value?i("",!0):(t(),o("i",G))])),l.value?(t(),o("span",{key:1,onClick:e[6]||(e[6]=a=>l.value=!1),class:"icon is-small is-right is-clickable"},[l.value?(t(),o("i",O)):i("",!0)])):i("",!0),Y,l.value?i("",!0):r((t(),o("input",{key:2,"onUpdate:modelValue":e[7]||(e[7]=a=>u.value=a),class:"input",type:"password",placeholder:"Password"},null,512)),[[c,u.value]]),l.value?r((t(),o("input",{key:3,"onUpdate:modelValue":e[8]||(e[8]=a=>u.value=a),class:"input",type:"text",placeholder:"Password"},null,512)),[[c,u.value]]):i("",!0)])]),s("div",$,[s("div",A,[D,s("p",null,[v("I already have an account. "),s("span",F,[g(_,{to:{name:"login"}},{default:I(()=>[v(" Log In ")]),_:1})])])])])],40,V)])])}}};export{q as default};