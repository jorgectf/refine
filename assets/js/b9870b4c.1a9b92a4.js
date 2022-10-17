"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56894],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||n;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28951:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));a(4227),a(64396),a(86277),a(11795),a(6912),a(53449),a(85495),a(29321),a(63922),a(16903),a(29131);const n={title:"Create E-mail Subscription Panel with Refine and Strapi",description:"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions.",slug:"e-mail-subscription-panel-with-refine",authors:"melih",tags:["refine","strapi","react","tutorial"],image:"/img/placeholder.png",hide_table_of_contents:!1},o=void 0,s={permalink:"/blog/e-mail-subscription-panel-with-refine",source:"@site/blog/2021-10-25-mail-subscription-with-refine.md",title:"Create E-mail Subscription Panel with Refine and Strapi",description:"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions.",date:"2021-10-25T00:00:00.000Z",formattedDate:"October 25, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"strapi",permalink:"/blog/tags/strapi"},{label:"react",permalink:"/blog/tags/react"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:7.925,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Create E-mail Subscription Panel with Refine and Strapi",description:"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions.",slug:"e-mail-subscription-panel-with-refine",authors:"melih",tags:["refine","strapi","react","tutorial"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase"},nextItem:{title:"Migrating a React-Admin Application to Refine",permalink:"/blog/migrating-a-react-admin-application-to-refine"},relatedPosts:[{title:"Let's Build an App to Manage Your Hackathons with Refine",permalink:"/blog/manage-hackathons-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Muharrem Kocadere",title:"Frontend Developer",url:"https://github.com/mhrrmk",imageURL:"https://github.com/mhrrmk.png",key:"muharrem"}],readingTime:3.245,date:"2021-10-04T00:00:00.000Z"},{title:"When to use dangerouslySetInnerHTML in React?",permalink:"/blog/use-react-dangerouslysetinnerhtml",formattedDate:"September 25, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.27,date:"2022-09-25T00:00:00.000Z"},{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.25,date:"2022-09-18T00:00:00.000Z"}],authorPosts:[{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.205,date:"2022-02-22T00:00:00.000Z"},{title:"Next.js E-commerce App with Strapi and Chakra UI",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",formattedDate:"February 14, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.035,date:"2022-02-14T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.8,date:"2022-02-21T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions."))}m.isMDXComponent=!0},4227:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/auth-0d33512948dc9a5211fb9bce0f7115d5.png"},64396:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-ec03174df57f808297fb6e4aea1cf72d.gif"},86277:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dummy_data-242a2a18a59732a07301365d2f7b82ca.png"},11795:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/login-cdd53317fe594b7607c0bad670da080f.gif"},6912:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/messages-6ea926f611e663a199f0a1cff0999eca.png"},53449:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/overview-370871e2989a1558130d702a97af6432.png"},85495:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/refine_welcome-8f8a3f310a036343d0e3544cf69bd154.png"},29321:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/send-05d7b0f478fbb5899eb51d7b90bb28d2.gif"},63922:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/signin-443c944fcf58c292f0d6a9c1df0f209f.png"},16903:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/strapi-203c6f2b13cbc1e04ddad7ab475113c7.png"},29131:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/subscribers-3f4d62a2780a968f7b4a4d864ad4c901.png"}}]);