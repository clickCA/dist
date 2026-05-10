import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{n as t,r as n,t as r}from"./react-core-OrPMYxb4.js";import{s as ee}from"./react-router-8AcMr4xR.js";import{n as te,t as i}from"./apollo-Du3VMLwy.js";import{t as a}from"./lib-Cc9aGra-.js";import{t as o}from"./button-shuZzec1.js";import"./NavBar-nfQdLM8i.js";import{t as s}from"./skeleton-DAJ_djTO.js";import{t as ne}from"./userStore-CyFiMPry.js";import{t as c}from"./createLucideIcon-DYEUcbQU.js";import{t as re}from"./file-text-CJPiRw_J.js";import{t as ie}from"./loader-circle-DHqPejPJ.js";import{a as ae,i as oe,n as se,o as ce,r as le,s as ue,t as de}from"./dialog-12Iwz56j.js";import{t as fe}from"./badge-DNjlgziI.js";import{a as pe,n as l,t as u}from"./card-Dv8zMdg2.js";import{t as me}from"./textarea-BhbmX1Sn.js";var he=c(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),d=e(n(),1),ge=t(),_e=a`
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
`,ve=a`
  query GetAllAssignments {
    allAssignments {
      id
      courseId
      courseTitle
      title
      description
      maxScore
      dueDate
      createdAt
    }
  }
`,ye=a`
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
`;a`
  mutation CreateAssignment($input: CreateAssignmentInput!) {
    createAssignment(input: $input) {
      id
      title
    }
  }
`,a`
  mutation DeleteAssignment($id: UUID!) {
    deleteAssignment(id: $id)
  }
`;var be=a`
  mutation SubmitAssignment($input: SubmitAssignmentInput!) {
    submitAssignment(input: $input) {
      id
      status
    }
  }
`,f=r();function p(){let e=(0,ge.c)(56),{courseId:t}=ee(),n=ne(xe),[r,a]=(0,d.useState)(null),[c,p]=(0,d.useState)(``),h=t??``,g;e[0]===h?g=e[1]:(g={courseId:h},e[0]=h,e[1]=g);let _=!t,v;e[2]!==g||e[3]!==_?(v={variables:g,skip:_},e[2]=g,e[3]=_,e[4]=v):v=e[4];let{data:y,loading:Se}=i(_e,v),b=!!t,x;e[5]===b?x=e[6]:(x={skip:b},e[5]=b,e[6]=x);let{data:S,loading:Ce}=i(ve,x),C=!n?.id,w;e[7]===C?w=e[8]:(w={skip:C,fetchPolicy:`network-only`},e[7]=C,e[8]=w);let{data:T}=i(ye,w),E;e[9]===Symbol.for(`react.memo_cache_sentinel`)?(E={onCompleted:()=>{a(null),p(``)}},e[9]=E):E=e[9];let[D,we]=te(be,E),{loading:O}=we,k=Se||Ce,A;e[10]!==S?.allAssignments||e[11]!==y?.assignments||e[12]!==t?(A=t?y?.assignments??[]:S?.allAssignments??[],e[10]=S?.allAssignments,e[11]=y?.assignments,e[12]=t,e[13]=A):A=e[13];let j=A,M;e[14]===T?.mySubmissions?M=e[15]:(M=T?.mySubmissions??[],e[14]=T?.mySubmissions,e[15]=M);let N=M,P;e[16]===N?P=e[17]:(P=e=>N.find(t=>t.assignmentId===e),e[16]=N,e[17]=P);let F=P,I;e[18]!==c||e[19]!==D||e[20]!==r||e[21]!==n?.id?(I=()=>{!r||!n?.id||D({variables:{input:{assignmentId:r,content:c}}})},e[18]=c,e[19]=D,e[20]=r,e[21]=n?.id,e[22]=I):I=e[22];let L=I,Te=m,R;e[23]===Symbol.for(`react.memo_cache_sentinel`)?(R=(0,f.jsx)(re,{className:`w-6 h-6 text-muted-foreground`}),e[23]=R):R=e[23];let z=t?`Course Assignments`:`All Assignments`,B;e[24]===z?B=e[25]:(B=(0,f.jsxs)(`div`,{className:`flex items-center gap-2`,children:[R,(0,f.jsx)(`h1`,{className:`text-2xl font-bold`,children:z})]}),e[24]=z,e[25]=B);let V;e[26]!==j||e[27]!==t||e[28]!==F||e[29]!==k?(V=k?(0,f.jsxs)(`div`,{className:`space-y-3`,children:[(0,f.jsx)(s,{className:`h-24 w-full`}),(0,f.jsx)(s,{className:`h-24 w-full`})]}):j.length===0?(0,f.jsx)(u,{children:(0,f.jsx)(l,{className:`p-6`,children:(0,f.jsx)(`p`,{className:`text-muted-foreground`,children:t?`No assignments for this course.`:`No assignments found.`})})}):(0,f.jsx)(`div`,{className:`space-y-4`,children:j.map(e=>{let n=!!F(e.id);return(0,f.jsx)(u,{children:(0,f.jsx)(l,{className:`p-5`,children:(0,f.jsxs)(`div`,{className:`flex justify-between items-start gap-4`,children:[(0,f.jsxs)(`div`,{className:`flex-1 space-y-2`,children:[(0,f.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,f.jsx)(pe,{className:`text-lg`,children:e.title}),n&&(0,f.jsx)(fe,{variant:`success`,children:`Submitted`})]}),!t&&e.courseTitle&&(0,f.jsx)(`p`,{className:`text-xs text-muted-foreground font-medium`,children:e.courseTitle}),e.description&&(0,f.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:e.description}),(0,f.jsxs)(`div`,{className:`flex gap-4 text-sm text-muted-foreground`,children:[e.maxScore!=null&&(0,f.jsxs)(`span`,{children:[`Max score: `,e.maxScore]}),e.dueDate&&(0,f.jsxs)(`span`,{children:[`Due: `,Te(e.dueDate)]})]})]}),(0,f.jsxs)(o,{size:`sm`,variant:n?`outline`:`default`,disabled:n,onClick:()=>a(e.id),children:[(0,f.jsx)(he,{className:`w-4 h-4`}),n?`Submitted`:`Submit`]})]})})},e.id)})}),e[26]=j,e[27]=t,e[28]=F,e[29]=k,e[30]=V):V=e[30];let H=!!r,U;e[31]===Symbol.for(`react.memo_cache_sentinel`)?(U=e=>{e||(a(null),p(``))},e[31]=U):U=e[31];let W;e[32]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,f.jsxs)(ce,{children:[(0,f.jsx)(ue,{children:`Submit Assignment`}),(0,f.jsx)(oe,{children:`Enter your submission content below.`})]}),e[32]=W):W=e[32];let G;e[33]===Symbol.for(`react.memo_cache_sentinel`)?(G=e=>p(e.target.value),e[33]=G):G=e[33];let K;e[34]===c?K=e[35]:(K=(0,f.jsx)(me,{placeholder:`Your submission...`,value:c,onChange:G,rows:6}),e[34]=c,e[35]=K);let q;e[36]===Symbol.for(`react.memo_cache_sentinel`)?(q=(0,f.jsx)(se,{asChild:!0,children:(0,f.jsx)(o,{variant:`outline`,children:`Cancel`})}),e[36]=q):q=e[36];let J;e[37]!==c||e[38]!==O?(J=!c.trim()||O,e[37]=c,e[38]=O,e[39]=J):J=e[39];let Y;e[40]===O?Y=e[41]:(Y=O?(0,f.jsx)(ie,{className:`w-4 h-4 animate-spin`}):`Submit`,e[40]=O,e[41]=Y);let X;e[42]!==L||e[43]!==J||e[44]!==Y?(X=(0,f.jsxs)(ae,{className:`gap-3 justify-end`,children:[q,(0,f.jsx)(o,{onClick:L,disabled:J,children:Y})]}),e[42]=L,e[43]=J,e[44]=Y,e[45]=X):X=e[45];let Z;e[46]!==K||e[47]!==X?(Z=(0,f.jsxs)(le,{className:`max-w-[450px]`,children:[W,K,X]}),e[46]=K,e[47]=X,e[48]=Z):Z=e[48];let Q;e[49]!==H||e[50]!==Z?(Q=(0,f.jsx)(de,{open:H,onOpenChange:U,children:Z}),e[49]=H,e[50]=Z,e[51]=Q):Q=e[51];let $;return e[52]!==B||e[53]!==V||e[54]!==Q?($=(0,f.jsxs)(`div`,{className:`p-6 space-y-6`,children:[B,V,Q]}),e[52]=B,e[53]=V,e[54]=Q,e[55]=$):$=e[55],$}function m(e){return new Date(e).toLocaleDateString()}function xe(e){return e.user}export{p as default};