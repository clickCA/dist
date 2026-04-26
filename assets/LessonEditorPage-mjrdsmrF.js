const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RichTextEditor-CBHyUuvY.js","assets/RichTextEditor-D_4MyHQN.js","assets/rolldown-runtime-DF2fYuay.js","assets/tiptap-DEkOcjS0.js","assets/react-core-DumqBGhg.js","assets/react-core-OrPMYxb4.js","assets/createLucideIcon-ouTqxBrS.js","assets/button-BO3r7oTq.js","assets/radix-themes-Zx4Se_cW.js","assets/apollo-Du3VMLwy.js","assets/radix-themes-CW-zCINU.css","assets/utils-Utn62P3-.js","assets/utils-DDIbVLGB.js","assets/dialog-exfoXFEu.js","assets/X.es-DPUMCrP2.js","assets/IconBase.es-Dh_WkqFB.js","assets/input-CpHETLHi.js","assets/label-CP3HLaqN.js","assets/radix-primitives-VQom3N7n.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{r as t,t as n}from"./react-core-OrPMYxb4.js";import{l as r}from"./react-router-8AcMr4xR.js";import{D as i,E as a,j as o,w as s}from"./radix-themes-Zx4Se_cW.js";import{n as c,t as l}from"./apollo-Du3VMLwy.js";import{t as u}from"./lib-Cc9aGra-.js";import{t as d}from"./button-BO3r7oTq.js";import{i as f,n as p,o as m,s as h,t as g}from"./select-DyeovqKN.js";import{t as _}from"./input-CpHETLHi.js";import{t as v}from"./label-CP3HLaqN.js";import{t as y}from"./book-open-VE-Z-odp.js";import{t as b}from"./loader-circle-B_WQcvCh.js";import{n as x,t as S}from"./queries-Dxwwd803.js";import{t as C}from"./course-DnRhFKV5.js";var w=e(t(),1),T=u`
  mutation CreateLesson($input: CreateLessonInput!) {
    createLesson(input: $input) {
      id
      title
    }
  }
`,E=u`
  mutation CreateLessonContent($input: CreateLessonContentInput!) {
    createLessonContent(input: $input) {
      id
    }
  }
`;u`
  mutation DeleteLesson($id: UUID!) {
    deleteLesson(id: $id)
  }
`;var D=u`
  mutation UpsertProgress($input: UpsertProgressInput!) {
    upsertProgress(input: $input) {
      id
      userId
      referenceId
      referenceType
      completed
      completionPercentage
      timeSpentSeconds
      completedAt
      lastAccessedAt
      createdAt
      updatedAt
    }
  }
`,O=u`
  mutation UpdateVideoWatchTime($input: UpdateVideoWatchTimeInput!) {
    updateVideoWatchTime(input: $input) {
      id
      userId
      referenceId
      referenceType
      completed
      completionPercentage
      timeSpentSeconds
      completedAt
      lastAccessedAt
      createdAt
      updatedAt
    }
  }
`,k=n(),A=(0,w.lazy)(()=>r(()=>import(`./RichTextEditor-CBHyUuvY.js`).then(e=>({default:e.RichTextEditor})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))),j=[{value:`TEXT`,label:`Text`},{value:`VIDEO`,label:`Video`},{value:`IMAGE`,label:`Image`}];function M(){let[e,t]=(0,w.useState)(``),[n,r]=(0,w.useState)(``),[u,D]=(0,w.useState)(``),[O,M]=(0,w.useState)(``),[N,P]=(0,w.useState)(`TEXT`),[F,I]=(0,w.useState)(``),{data:L,loading:R}=l(S,{fetchPolicy:`network-only`}),{data:z,loading:B}=l(x,{variables:{courseId:e},skip:!e,fetchPolicy:`network-only`}),[V,{loading:H}]=c(T,{onError:e=>console.error(`Create lesson failed:`,e)}),[U,{loading:W}]=c(E,{onError:e=>console.error(`Create lesson content failed:`,e)}),[G,{loading:K}]=c(C,{onError:e=>console.error(`Create module content failed:`,e)}),q=L?.listCourses??[],J=z?.listModulesByCourse??[],Y=e=>{let t=J.find(t=>t.id===e);return t?.contents?.length?Math.max(...t.contents.map(e=>e.orderIndex))+1:0},X=async()=>{if(!(!n||!u.trim()))try{let e=(await V({variables:{input:{moduleId:n,title:u.trim(),orderIndex:J.length}}})).data?.createLesson?.id;if(!e)return;await G({variables:{input:{moduleId:n,title:u.trim(),contentType:`INFO`,orderIndex:Y(n),referenceId:e,referenceType:`Lesson`}}});let t=[];(N===`TEXT`||O.trim())&&t.push({contentType:`TEXT`,content:O.trim()||`<p></p>`,orderIndex:0}),N===`VIDEO`&&F.trim()?t.push({contentType:`VIDEO`,url:F.trim(),orderIndex:t.length}):N===`IMAGE`&&F.trim()&&t.push({contentType:`IMAGE`,url:F.trim(),orderIndex:t.length});for(let n of t)await U({variables:{input:{lessonId:e,contentType:n.contentType,content:n.content??null,url:n.url??null,orderIndex:n.orderIndex}}});D(``),M(``),I(``)}catch(e){console.error(`Save failed:`,e)}},Z=H||W||K,Q=!!n&&u.trim().length>0&&!Z;return(0,k.jsxs)(i,{p:`6`,className:`max-w-4xl mx-auto`,children:[(0,k.jsxs)(o,{size:`6`,mb:`6`,className:`flex items-center gap-2`,children:[(0,k.jsx)(y,{className:`w-6 h-6`}),`Create Lesson`]}),(0,k.jsx)(s,{className:`p-6`,children:(0,k.jsxs)(a,{direction:`column`,gap:`5`,children:[(0,k.jsxs)(i,{children:[(0,k.jsx)(v,{htmlFor:`course`,className:`mb-2 block`,children:`Course`}),(0,k.jsxs)(g,{value:e,onValueChange:e=>{t(e),r(``)},children:[(0,k.jsx)(m,{id:`course`,className:`w-full`,children:(0,k.jsx)(h,{placeholder:`Select a course`})}),(0,k.jsx)(p,{children:R?(0,k.jsx)(f,{value:`__loading`,disabled:!0,children:`Loading...`}):q.map(e=>(0,k.jsx)(f,{value:e.id,children:e.name},e.id))})]})]}),(0,k.jsxs)(i,{children:[(0,k.jsx)(v,{htmlFor:`module`,className:`mb-2 block`,children:`Module`}),(0,k.jsxs)(g,{value:n,onValueChange:r,disabled:!e,children:[(0,k.jsx)(m,{id:`module`,className:`w-full`,children:(0,k.jsx)(h,{placeholder:e?B?`Loading...`:`Select a module`:`Select a course first`})}),(0,k.jsxs)(p,{children:[J.map(e=>(0,k.jsx)(f,{value:e.id,children:e.title},e.id)),e&&!B&&J.length===0&&(0,k.jsx)(f,{value:`__empty`,disabled:!0,children:`No modules — create a module first`})]})]})]}),(0,k.jsxs)(i,{children:[(0,k.jsx)(v,{htmlFor:`lesson-title`,className:`mb-2 block`,children:`Lesson Title`}),(0,k.jsx)(_,{id:`lesson-title`,placeholder:`Enter lesson title`,value:u,onChange:e=>D(e.target.value)})]}),(0,k.jsxs)(i,{children:[(0,k.jsx)(v,{htmlFor:`content-type`,className:`mb-2 block`,children:`Additional Content Type`}),(0,k.jsxs)(g,{value:N,onValueChange:e=>P(e),children:[(0,k.jsx)(m,{id:`content-type`,className:`w-full`,children:(0,k.jsx)(h,{})}),(0,k.jsx)(p,{children:j.map(e=>(0,k.jsx)(f,{value:e.value,children:e.label},e.value))})]})]}),(N===`VIDEO`||N===`IMAGE`)&&(0,k.jsxs)(i,{children:[(0,k.jsx)(v,{htmlFor:`content-url`,className:`mb-2 block`,children:N===`VIDEO`?`Video URL`:`Image URL`}),(0,k.jsx)(_,{id:`content-url`,type:`url`,placeholder:N===`VIDEO`?`https://...`:`https://example.com/image.jpg`,value:F,onChange:e=>I(e.target.value)})]}),(0,k.jsxs)(i,{children:[(0,k.jsx)(v,{className:`mb-2 block`,children:`Lesson Content`}),(0,k.jsx)(w.Suspense,{fallback:(0,k.jsx)(`div`,{className:`flex items-center justify-center h-[200px] text-sm text-slate-500`,children:`Loading editor...`}),children:(0,k.jsx)(A,{content:O,onChange:M,placeholder:`Write your lesson content...`})})]}),(0,k.jsx)(a,{justify:`end`,pt:`2`,children:(0,k.jsx)(d,{onClick:X,disabled:!Q,children:Z?(0,k.jsx)(b,{className:`w-4 h-4 animate-spin`}):`Save Lesson`})})]})})]})}export{O as n,D as r,M as t};