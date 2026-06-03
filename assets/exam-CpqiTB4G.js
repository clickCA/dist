import{r as e}from"./rolldown-runtime-Dw2cE7zH.js";import{n as t,r as n,t as r}from"./react-core-BywV1h4G.js";import{n as i}from"./i18n-Birxb9r5.js";import{c as a}from"./card-gTZJrGVl.js";import{n as o,t as s}from"./react-query-DEAe0orC.js";import{rt as c}from"./utils-CD2JFol0.js";import{n as l,t as u}from"./zustand-CI_tNW8D.js";import{t as d}from"./createLucideIcon-CbM8IWRd.js";import{r as f}from"./trophy-DqNHdXPT.js";import{S as p,_ as m,d as h,f as g,g as _,l as v,m as y,p as b,u as x,v as S,y as C}from"./useStarredQuestionIds-CIr45dHK.js";import"./ExamShell-Bju17dnc.js";import"./useMixedExamStart-IpxiSooQ.js";import"./useMockExamStart-BkOBWE-_.js";import"./useStarredExam-DrUb-3eY.js";var w=d(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),T=d(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),E=t(),D=r();function O(e){let t=(0,E.c)(13),{solutions:n,starredIds:r}=e,{t:a}=i(`exam`);if(n.length===0){let e;t[0]===a?e=t[1]:(e=a(`history.noQuestionDetails`),t[0]=a,t[1]=e);let n;return t[2]===e?n=t[3]:(n=(0,D.jsx)(`p`,{className:`text-sm text-gray-500 py-4 px-2`,children:e}),t[2]=e,t[3]=n),n}let o;if(t[4]!==n||t[5]!==r||t[6]!==a){let e;t[8]!==r||t[9]!==a?(e=e=>{let t=r?.has(e.questionId)??!1;return(0,D.jsxs)(`div`,{className:`rounded-lg border p-3.5 ${e.isCorrect?`border-green-200 bg-green-50/50`:`border-red-200 bg-red-50/50`}`,children:[(0,D.jsxs)(`div`,{className:`flex items-center justify-between gap-2 mb-1.5`,children:[(0,D.jsxs)(`div`,{className:`flex items-center gap-2`,children:[e.isCorrect?(0,D.jsx)(w,{className:`h-5 w-5 text-green-600`,"aria-label":a(`history.aria.correct`)}):(0,D.jsx)(T,{className:`h-5 w-5 text-red-600`,"aria-label":a(`history.aria.incorrect`)}),(0,D.jsxs)(`span`,{className:`text-sm font-medium`,children:[`#`,e.questionNumber]})]}),t&&(0,D.jsx)(f,{className:`h-5 w-5 fill-yellow-400 text-yellow-400`})]}),(0,D.jsx)(`p`,{className:`text-sm text-gray-700 mb-1.5 line-clamp-2 leading-relaxed`,children:e.questionContent}),(0,D.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-gray-500`,children:[e.courseName&&(0,D.jsx)(`span`,{children:e.courseName}),e.lessonTitle&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`span`,{children:`·`}),(0,D.jsx)(`span`,{children:e.lessonTitle})]})]})]},e.questionId)},t[8]=r,t[9]=a,t[10]=e):e=t[10],o=n.map(e),t[4]=n,t[5]=r,t[6]=a,t[7]=o}else o=t[7];let s;return t[11]===o?s=t[12]:(s=(0,D.jsx)(`div`,{className:`flex flex-col gap-2`,children:o}),t[11]=o,t[12]=s),s}function k(e,t){return e.length<=t?e:e.slice(0,t).trim()+`…`}function A(e){let t=(0,E.c)(50),{solutions:n,starredIds:r}=e,{t:a}=i(`exam`);if(c()){let e;return t[0]!==n||t[1]!==r?(e=(0,D.jsx)(O,{solutions:n,starredIds:r}),t[0]=n,t[1]=r,t[2]=e):e=t[2],e}if(n.length===0){let e;t[3]===a?e=t[4]:(e=a(`history.noQuestionDetails`),t[3]=a,t[4]=e);let n;return t[5]===e?n=t[6]:(n=(0,D.jsx)(`p`,{className:`text-sm text-gray-500 py-4 px-2`,children:e}),t[5]=e,t[6]=n),n}let o;t[7]===a?o=t[8]:(o=a(`history.columns.number`),t[7]=a,t[8]=o);let s;t[9]===o?s=t[10]:(s=(0,D.jsx)(`th`,{className:`text-left py-2 px-2 font-medium text-gray-700`,children:o}),t[9]=o,t[10]=s);let l;t[11]===a?l=t[12]:(l=a(`history.columns.status`),t[11]=a,t[12]=l);let u;t[13]===l?u=t[14]:(u=(0,D.jsx)(`th`,{className:`text-left py-2 px-2 font-medium text-gray-700`,children:l}),t[13]=l,t[14]=u);let d;t[15]===a?d=t[16]:(d=a(`history.columns.question`),t[15]=a,t[16]=d);let p;t[17]===d?p=t[18]:(p=(0,D.jsx)(`th`,{className:`text-left py-2 px-2 font-medium text-gray-700`,children:d}),t[17]=d,t[18]=p);let m;t[19]===a?m=t[20]:(m=a(`history.columns.course`),t[19]=a,t[20]=m);let h;t[21]===m?h=t[22]:(h=(0,D.jsx)(`th`,{className:`text-left py-2 px-2 font-medium text-gray-700`,children:m}),t[21]=m,t[22]=h);let g;t[23]===a?g=t[24]:(g=a(`history.columns.lesson`),t[23]=a,t[24]=g);let _;t[25]===g?_=t[26]:(_=(0,D.jsx)(`th`,{className:`text-left py-2 px-2 font-medium text-gray-700`,children:g}),t[25]=g,t[26]=_);let v;t[27]===a?v=t[28]:(v=a(`history.columns.starred`),t[27]=a,t[28]=v);let y;t[29]===v?y=t[30]:(y=(0,D.jsx)(`th`,{className:`text-left py-2 px-2 font-medium text-gray-700 w-10`,children:v}),t[29]=v,t[30]=y);let b;t[31]!==_||t[32]!==y||t[33]!==s||t[34]!==u||t[35]!==p||t[36]!==h?(b=(0,D.jsx)(`thead`,{children:(0,D.jsxs)(`tr`,{className:`border-b border-gray-200 bg-gray-50`,children:[s,u,p,h,_,y]})}),t[31]=_,t[32]=y,t[33]=s,t[34]=u,t[35]=p,t[36]=h,t[37]=b):b=t[37];let x;if(t[38]!==n||t[39]!==r||t[40]!==a){let e;t[42]!==r||t[43]!==a?(e=(e,t)=>{let n=r?.has(e.questionId)??!1;return(0,D.jsxs)(`tr`,{className:`border-b border-gray-100 ${t%2==0?`bg-white`:`bg-gray-50`}`,children:[(0,D.jsx)(`td`,{className:`py-2 px-2 text-gray-600`,children:e.questionNumber}),(0,D.jsx)(`td`,{className:`py-2 px-2`,children:e.isCorrect?(0,D.jsx)(w,{className:`h-4 w-4 text-green-600`,"aria-label":a(`history.aria.correct`)}):(0,D.jsx)(T,{className:`h-4 w-4 text-red-600`,"aria-label":a(`history.aria.incorrect`)})}),(0,D.jsx)(`td`,{className:`py-2 px-2 text-gray-700 max-w-[200px]`,children:(0,D.jsx)(`span`,{title:e.questionContent,children:k(e.questionContent,60)})}),(0,D.jsx)(`td`,{className:`py-2 px-2 text-gray-600`,children:e.courseName??`—`}),(0,D.jsx)(`td`,{className:`py-2 px-2 text-gray-600`,children:e.lessonTitle??`—`}),(0,D.jsx)(`td`,{className:`py-2 px-2`,children:n?(0,D.jsx)(f,{className:`h-4 w-4 fill-yellow-400 text-yellow-400`,"aria-label":a(`history.aria.starred`)}):(0,D.jsx)(`span`,{className:`text-gray-300`,children:`—`})})]},e.questionId)},t[42]=r,t[43]=a,t[44]=e):e=t[44],x=n.map(e),t[38]=n,t[39]=r,t[40]=a,t[41]=x}else x=t[41];let S;t[45]===x?S=t[46]:(S=(0,D.jsx)(`tbody`,{children:x}),t[45]=x,t[46]=S);let C;return t[47]!==b||t[48]!==S?(C=(0,D.jsx)(`div`,{className:`overflow-x-auto`,children:(0,D.jsxs)(`table`,{className:`w-full text-sm border-collapse`,children:[b,S]})}),t[47]=b,t[48]=S,t[49]=C):C=t[49],C}var j=e=>{let t=(0,E.c)(8),n;t[0]===e?n=t[1]:(n=x.solutions(e||``),t[0]=e,t[1]=n);let r;t[2]===e?r=t[3]:(r=()=>{if(!e)throw Error(`Attempt ID is required`);return h(e)},t[2]=e,t[3]=r);let i=!!e,a;return t[4]!==n||t[5]!==r||t[6]!==i?(a={queryKey:n,queryFn:r,enabled:i,staleTime:3e5,refetchOnWindowFocus:!1},t[4]=n,t[5]=r,t[6]=i,t[7]=a):a=t[7],o(a)},M=e=>{let t=(0,E.c)(8),n;t[0]===e?n=t[1]:(n=x.history(e||``),t[0]=e,t[1]=n);let r;t[2]===e?r=t[3]:(r=()=>{if(!e)throw Error(`Quiz ID is required`);return g(e)},t[2]=e,t[3]=r);let i=!!e,a;return t[4]!==n||t[5]!==r||t[6]!==i?(a={queryKey:n,queryFn:r,enabled:i,staleTime:6e4,refetchOnWindowFocus:!1},t[4]=n,t[5]=r,t[6]=i,t[7]=a):a=t[7],o(a)},N=e=>{let t=(0,E.c)(8),n;t[0]===e?n=t[1]:(n=x.result(e||``),t[0]=e,t[1]=n);let r;t[2]===e?r=t[3]:(r=()=>{if(!e)throw Error(`Attempt ID is required`);return b(e)},t[2]=e,t[3]=r);let i=!!e,a;return t[4]!==n||t[5]!==r||t[6]!==i?(a={queryKey:n,queryFn:r,enabled:i,staleTime:3e5,refetchOnWindowFocus:!1},t[4]=n,t[5]=r,t[6]=i,t[7]=a):a=t[7],o(a)},P=()=>{let e=(0,E.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t={mutationFn:F},e[0]=t):t=e[0],s(t)};function F(e){return C(e)}var I=e(n(),1),L=()=>{let e=(0,E.c)(5),[t,n]=(0,I.useState)(0),r;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=()=>n(0),e[0]=r):r=e[0];let i=r,a;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(a={mutationFn:async e=>{let{attemptId:t,file:r}=e;n(0);let{uploadUrl:i,fileKey:a}=await S(t,r.name);n(5),await p(i,r,e=>{n(5+Math.round(e*.9))}),n(95);let o=await v(t,a,r.name);return n(100),o},onError:()=>n(0)},e[1]=a):a=e[1];let o=s(a),c;return e[2]!==o||e[3]!==t?(c={...o,progress:t,resetProgress:i},e[2]=o,e[3]=t,e[4]=c):c=e[4],c},R=()=>{let e=(0,E.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t={mutationFn:z},e[0]=t):t=e[0],s(t)};async function z(e){let{downloadUrl:t}=await m(e);window.open(t,`_blank`)}var B=e=>{let t=(0,E.c)(8),n;t[0]===e?n=t[1]:(n=x.homeworkHistory(e||``),t[0]=e,t[1]=n);let r;t[2]===e?r=t[3]:(r=()=>{if(!e)throw Error(`Parent Quiz ID is required`);return y(e)},t[2]=e,t[3]=r);let i=!!e,a;return t[4]!==n||t[5]!==r||t[6]!==i?(a={queryKey:n,queryFn:r,enabled:i,staleTime:3e4},t[4]=n,t[5]=r,t[6]=i,t[7]=a):a=t[7],o(a)},V=e=>{let t=(0,E.c)(8),n;t[0]===e?n=t[1]:(n=x.subExams(e||``),t[0]=e,t[1]=n);let r;t[2]===e?r=t[3]:(r=()=>{if(!e)throw Error(`Parent quiz ID is required`);return _(e)},t[2]=e,t[3]=r);let i=!!e,a;return t[4]!==n||t[5]!==r||t[6]!==i?(a={queryKey:n,queryFn:r,enabled:i,staleTime:3e5,refetchOnWindowFocus:!1},t[4]=n,t[5]=r,t[6]=i,t[7]=a):a=t[7],o(a)};l(u(e=>({examResults:[],addExamResult:t=>e(e=>({examResults:[...e.examResults,t]})),updateExamResult:(t,n)=>e(e=>({examResults:e.examResults.map(e=>e.id===t?{...e,...n}:e)})),deleteExamResult:t=>e(e=>({examResults:e.examResults.filter(e=>e.id!==t)})),clearAllResults:()=>e({examResults:[]})}),{name:`exam-results-storage`}));var H=a`
  query ListMockExams {
    listMockExams {
      id
      title
      quizType
      totalQuestions
      timeLimit
      hasTimeLimit
      requiresFile
      isActive
      createdAt
      updatedAt
    }
  }
`;a`
  query GetMockExam($quizId: UUID!) {
    getMockExam(quizId: $quizId) {
      id
      title
      quizType
      totalQuestions
      timeLimit
      hasTimeLimit
      requiresFile
      isActive
      createdAt
      updatedAt
    }
  }
`,a`
  query GetMockExamByCourse($courseId: UUID!) {
    getMockExamByCourse(courseId: $courseId) {
      id
      title
      quizType
      totalQuestions
      timeLimit
      hasTimeLimit
      requiresFile
      isActive
      createdAt
      updatedAt
    }
  }
`;var U=a`
  query ListCourses {
    listCourses {
      id
      name
      description
      coverImageUrl
      visibility
      courseType
      createdAt
      updatedAt
    }
  }
`,W=a`
  mutation CreateQuiz($input: CreateQuizInput!) {
    createQuiz(input: $input) {
      id
      title
      quizType
      totalQuestions
      timeLimit
      hasTimeLimit
      requiresFile
      isActive
      createdAt
      updatedAt
    }
  }
`,G=a`
  mutation UpdateQuiz($id: UUID!, $input: UpdateQuizInput!) {
    updateQuiz(id: $id, input: $input) {
      id
      title
      quizType
      totalQuestions
      timeLimit
      hasTimeLimit
      requiresFile
      isActive
      createdAt
      updatedAt
    }
  }
`,K=a`
  mutation DeleteQuiz($id: UUID!) {
    deleteQuiz(id: $id)
  }
`,q=a`
  mutation CreateQuestion($input: CreateQuestionInput!) {
    createQuestion(input: $input) {
      id
      moduleId
      questionType
      content
      imageUrl
      choices
      correctAnswer
      explanation
      solutionVideoUrl
      solutionFileUrl
      difficultyLevel
      tags
      createdAt
      updatedAt
    }
  }
`;a`
  mutation UpdateQuestion($id: UUID!, $input: UpdateQuestionInput!) {
    updateQuestion(id: $id, input: $input) {
      id
      moduleId
      questionType
      content
      imageUrl
      choices
      correctAnswer
      explanation
      solutionVideoUrl
      solutionFileUrl
      difficultyLevel
      tags
      createdAt
      updatedAt
    }
  }
`,a`
  mutation DeleteQuestion($id: UUID!) {
    deleteQuestion(id: $id)
  }
`;var J=a`
  mutation AddQuestionToQuiz($quizId: UUID!, $questionId: UUID!, $orderIndex: Int!) {
    addQuestionToQuiz(quizId: $quizId, questionId: $questionId, orderIndex: $orderIndex)
  }
`;a`
  mutation RemoveQuestionFromQuiz($quizId: UUID!, $questionId: UUID!) {
    removeQuestionFromQuiz(quizId: $quizId, questionId: $questionId)
  }
`;export{T as _,G as a,V as c,L as d,P as f,A as g,j as h,K as i,B as l,M as m,q as n,U as o,N as p,W as r,H as s,J as t,R as u,w as v};