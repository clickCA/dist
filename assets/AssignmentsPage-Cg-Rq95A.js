import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{n as t,r as n,t as r}from"./react-core-OrPMYxb4.js";import{s as ee}from"./react-router-8AcMr4xR.js";import{A as i,D as a,E as o,O as s,S as c,b as te,j as l,t as ne,v as re,w as u,x as ie,y as ae}from"./radix-themes-Zx4Se_cW.js";import{n as oe,t as d}from"./apollo-Du3VMLwy.js";import{t as f}from"./lib-Cc9aGra-.js";import{t as p}from"./button-BO3r7oTq.js";import"./NavBar-BpqyDb5x.js";import{t as m}from"./skeleton-BI4tdU9S.js";import{t as se}from"./userStore-D9YBu962.js";import{t as h}from"./createLucideIcon-ouTqxBrS.js";import{t as ce}from"./file-text-DhKu4hww.js";import{t as le}from"./loader-circle-B_WQcvCh.js";var ue=h(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),g=e(n(),1),de=t(),fe=f`
  query GetAssignments($courseId: UUID!) {
    assignments(courseId: $courseId) {
      id
      courseId
      title
      description
      maxScore
      dueDate
      createdAt
    }
  }
`,pe=f`
  query GetMySubmissions {
    mySubmissions {
      id
      assignmentId
      status
      grade
      feedback
      submittedAt
    }
  }
`;f`
  mutation CreateAssignment($input: CreateAssignmentInput!) {
    createAssignment(input: $input) {
      id
      title
    }
  }
`,f`
  mutation DeleteAssignment($id: UUID!) {
    deleteAssignment(id: $id)
  }
`;var me=f`
  mutation SubmitAssignment($input: SubmitAssignmentInput!) {
    submitAssignment(input: $input) {
      id
      status
    }
  }
`,_=r();function v(){let e=(0,de.c)(51),{courseId:t}=ee(),n=se(ge),[r,f]=(0,g.useState)(null),[h,v]=(0,g.useState)(``),y=t??``,b;e[0]===y?b=e[1]:(b={courseId:y},e[0]=y,e[1]=b);let x=!t,S;e[2]!==b||e[3]!==x?(S={variables:b,skip:x},e[2]=b,e[3]=x,e[4]=S):S=e[4];let{data:C,loading:w}=d(fe,S),T=!n?.id,E;e[5]===T?E=e[6]:(E={skip:T,fetchPolicy:`network-only`},e[5]=T,e[6]=E);let{data:D}=d(pe,E),O;e[7]===Symbol.for(`react.memo_cache_sentinel`)?(O={onCompleted:()=>{f(null),v(``)}},e[7]=O):O=e[7];let[k,_e]=oe(me,O),{loading:A}=_e,j;e[8]===C?.assignments?j=e[9]:(j=C?.assignments??[],e[8]=C?.assignments,e[9]=j);let M=j,N;e[10]===D?.mySubmissions?N=e[11]:(N=D?.mySubmissions??[],e[10]=D?.mySubmissions,e[11]=N);let P=N,F;e[12]===P?F=e[13]:(F=e=>P.find(t=>t.assignmentId===e),e[12]=P,e[13]=F);let I=F,L;e[14]!==t||e[15]!==h||e[16]!==k||e[17]!==r||e[18]!==n?.id?(L=()=>{!r||!t||!n?.id||k({variables:{input:{assignmentId:r,content:h}}})},e[14]=t,e[15]=h,e[16]=k,e[17]=r,e[18]=n?.id,e[19]=L):L=e[19];let R=L,ve=he,z;e[20]===Symbol.for(`react.memo_cache_sentinel`)?(z=(0,_.jsxs)(l,{size:`6`,mb:`4`,className:`flex items-center gap-2`,children:[(0,_.jsx)(ce,{className:`w-6 h-6`}),`Assignments`]}),e[20]=z):z=e[20];let B;e[21]!==M||e[22]!==w||e[23]!==t||e[24]!==I?(B=t?w?(0,_.jsxs)(a,{className:`space-y-3`,children:[(0,_.jsx)(m,{className:`h-24 w-full`}),(0,_.jsx)(m,{className:`h-24 w-full`})]}):M.length===0?(0,_.jsx)(u,{className:`p-6`,children:(0,_.jsx)(i,{color:`gray`,children:`No assignments for this course.`})}):(0,_.jsx)(a,{className:`space-y-4`,children:M.map(e=>{let t=!!I(e.id);return(0,_.jsx)(u,{children:(0,_.jsx)(a,{p:`5`,children:(0,_.jsxs)(o,{justify:`between`,align:`start`,gap:`4`,children:[(0,_.jsxs)(a,{className:`flex-1`,children:[(0,_.jsxs)(o,{align:`center`,gap:`2`,mb:`2`,children:[(0,_.jsx)(l,{size:`3`,children:e.title}),t&&(0,_.jsx)(s,{size:`1`,color:`green`,children:`Submitted`})]}),e.description&&(0,_.jsx)(i,{size:`2`,color:`gray`,mb:`2`,children:e.description}),(0,_.jsxs)(o,{gap:`4`,children:[e.maxScore!=null&&(0,_.jsxs)(i,{size:`2`,children:[`Max score: `,e.maxScore]}),e.dueDate&&(0,_.jsxs)(i,{size:`2`,color:`gray`,children:[`Due: `,ve(e.dueDate)]})]})]}),(0,_.jsxs)(p,{size:`sm`,variant:t?`outline`:`default`,disabled:t,onClick:()=>f(e.id),children:[(0,_.jsx)(ue,{className:`w-4 h-4`}),t?`Submitted`:`Submit`]})]})})},e.id)})}):(0,_.jsx)(u,{className:`p-6`,children:(0,_.jsx)(i,{color:`red`,children:`Course not found.`})}),e[21]=M,e[22]=w,e[23]=t,e[24]=I,e[25]=B):B=e[25];let V=!!r,H;e[26]===Symbol.for(`react.memo_cache_sentinel`)?(H=e=>{e||(f(null),v(``))},e[26]=H):H=e[26];let U,W;e[27]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,_.jsx)(ae,{children:`Submit Assignment`}),W=(0,_.jsx)(te,{size:`2`,mb:`3`,children:`Enter your submission content below.`}),e[27]=U,e[28]=W):(U=e[27],W=e[28]);let G;e[29]===Symbol.for(`react.memo_cache_sentinel`)?(G=e=>v(e.target.value),e[29]=G):G=e[29];let K;e[30]===h?K=e[31]:(K=(0,_.jsx)(ne,{placeholder:`Your submission...`,value:h,onChange:G,rows:6,className:`w-full mb-4`}),e[30]=h,e[31]=K);let q;e[32]===Symbol.for(`react.memo_cache_sentinel`)?(q=(0,_.jsx)(re,{children:(0,_.jsx)(p,{variant:`outline`,children:`Cancel`})}),e[32]=q):q=e[32];let J;e[33]!==h||e[34]!==A?(J=!h.trim()||A,e[33]=h,e[34]=A,e[35]=J):J=e[35];let Y;e[36]===A?Y=e[37]:(Y=A?(0,_.jsx)(le,{className:`w-4 h-4 animate-spin`}):`Submit`,e[36]=A,e[37]=Y);let X;e[38]!==R||e[39]!==J||e[40]!==Y?(X=(0,_.jsxs)(o,{gap:`3`,justify:`end`,children:[q,(0,_.jsx)(p,{onClick:R,disabled:J,children:Y})]}),e[38]=R,e[39]=J,e[40]=Y,e[41]=X):X=e[41];let Z;e[42]!==K||e[43]!==X?(Z=(0,_.jsxs)(ie,{maxWidth:`450px`,children:[U,W,K,X]}),e[42]=K,e[43]=X,e[44]=Z):Z=e[44];let Q;e[45]!==V||e[46]!==Z?(Q=(0,_.jsx)(c,{open:V,onOpenChange:H,children:Z}),e[45]=V,e[46]=Z,e[47]=Q):Q=e[47];let $;return e[48]!==B||e[49]!==Q?($=(0,_.jsxs)(a,{p:`6`,children:[z,B,Q]}),e[48]=B,e[49]=Q,e[50]=$):$=e[50],$}function he(e){return new Date(e).toLocaleDateString()}function ge(e){return e.user}export{v as default};