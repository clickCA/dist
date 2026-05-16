const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CourseTable-T3zWebWe.js","assets/CourseTable-DSyxYxWN.js","assets/rolldown-runtime-DF2fYuay.js","assets/react-router-BadPY9iz.js","assets/react-core-CDVZyv8g.js","assets/CaretRight.es-CDoBg7AG.js","assets/IconBase.es-BpI2Hkdy.js","assets/select-Bci0oxrh.js","assets/radix-themes-4f9_vmPl.js","assets/apollo-CszI_5Nd.js","assets/tiptap-yHlpYizu.js","assets/react-core-IBrsTGe-.js","assets/radix-themes-CW-zCINU.css","assets/Check.es-BmJo1WzR.js","assets/button-DgFpYQi3.js","assets/utils-D81cRPmc.js","assets/MagnifyingGlass.es-D-WVNZnK.js","assets/EmptyState-DnBMsa6n.js","assets/X.es-BlDEUFz6.js","assets/i18n-DIpPDZcN.js","assets/zustand-CWcMUSBW.js","assets/input-yT25IfgC.js","assets/progress-DZhx9dEt.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{n as t,r as n,t as r}from"./react-core-CDVZyv8g.js";import{n as i}from"./i18n-DIpPDZcN.js";import{i as a}from"./apollo-CszI_5Nd.js";import{n as o,t as s}from"./skeleton-C509Qo3e.js";import{a as c}from"./button-DgFpYQi3.js";import{l,o as u,s as d}from"./react-router-BadPY9iz.js";import{_ as f,l as p}from"./NavBar-jciKMjwl.js";import{t as m}from"./EmptyState-DnBMsa6n.js";import{t as h}from"./QueryErrorFallback-0XhOtUPX.js";import"./dialog-BYQpRH3R.js";import"./CourseTable-DSyxYxWN.js";import{i as g}from"./enrollment-CjItGxAu.js";var _=e(n(),1),v=t(),y=r(),b=()=>{let e=(0,v.c)(3),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,y.jsx)(s,{className:`h-9 flex-1`}),e[0]=t):t=e[0];let n;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,y.jsxs)(`div`,{className:`space-y-2`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 lg:flex-row lg:items-center`,children:[t,(0,y.jsxs)(`div`,{className:`flex gap-2`,children:[(0,y.jsx)(s,{className:`h-9 w-full sm:w-[180px]`}),(0,y.jsx)(s,{className:`h-9 w-full sm:w-[160px]`})]})]}),(0,y.jsx)(s,{className:`h-3 w-32`})]}),e[1]=n):n=e[1];let r;return e[2]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,y.jsxs)(`div`,{className:`space-y-5 p-4 lg:p-6`,children:[n,(0,y.jsx)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,children:Array.from({length:8}).map(x)})]}),e[2]=r):r=e[2],r};function x(e,t){return(0,y.jsxs)(`div`,{className:`flex flex-col overflow-hidden rounded-lg border border-border bg-card`,children:[(0,y.jsx)(s,{className:`aspect-video w-full rounded-none`}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-3 px-4 py-3.5`,children:[(0,y.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,y.jsx)(s,{className:`h-4 w-3/4`}),(0,y.jsx)(s,{className:`h-3 w-1/3`})]}),(0,y.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,y.jsx)(s,{className:`h-1.5 w-full`}),(0,y.jsxs)(`div`,{className:`flex justify-between`,children:[(0,y.jsx)(s,{className:`h-3 w-16`}),(0,y.jsx)(s,{className:`h-3 w-8`})]})]}),(0,y.jsxs)(`div`,{className:`flex gap-1.5`,children:[(0,y.jsx)(s,{className:`h-4 w-14 rounded-md`}),(0,y.jsx)(s,{className:`h-4 w-10 rounded-md`})]})]})]},t)}var S=(0,_.lazy)(()=>l(()=>import(`./CourseTable-T3zWebWe.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]))),C=e=>{let t=(0,v.c)(44),{categoryFilter:n}=e,[r,o]=(0,_.useState)(``),[s,l]=(0,_.useState)(`all`),[x,C]=(0,_.useState)(`all`),{t:T}=i(`courseTable`),{user:E}=p(),D=u(),{lang:O}=d(),k=O===void 0?`th`:O,A=E?.id,j;t[0]===A?j=t[1]:(j={studentId:A},t[0]=A,t[1]=j);let M=!E?.id,N;t[2]!==j||t[3]!==M?(N={variables:j,skip:M,fetchPolicy:`network-only`},t[2]=j,t[3]=M,t[4]=N):N=t[4];let{loading:P,error:F,data:I,refetch:L}=a(g,N),R;bb0:{if(!I?.getStudentEnrollments){let e;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(e=[],t[5]=e):e=t[5],R=e;break bb0}let e;t[6]===I.getStudentEnrollments?e=t[7]:(e=I.getStudentEnrollments.map(w),t[6]=I.getStudentEnrollments,t[7]=e),R=e}let z=R;if(!E?.id){let e;t[8]===T?e=t[9]:(e=T(`loginRequired`),t[8]=T,t[9]=e);let n;return t[10]===e?n=t[11]:(n=(0,y.jsx)(m,{icon:f,title:e}),t[10]=e,t[11]=n),n}if(P){let e;return t[12]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,y.jsx)(b,{}),t[12]=e):e=t[12],e}if(F){let e;t[13]!==F.message||t[14]!==T?(e=T(`errorLoading`,{message:F.message}),t[13]=F.message,t[14]=T,t[15]=e):e=t[15];let n;t[16]===L?n=t[17]:(n=()=>L(),t[16]=L,t[17]=n);let r;return t[18]!==e||t[19]!==n?(r=(0,y.jsx)(h,{message:e,onRetry:n}),t[18]=e,t[19]=n,t[20]=r):r=t[20],r}if(z.length===0){let e;t[21]===T?e=t[22]:(e=T(`noEnrollments`),t[21]=T,t[22]=e);let n;t[23]===T?n=t[24]:(n=T(`noEnrollmentsDescription`),t[23]=T,t[24]=n);let r;t[25]===T?r=t[26]:(r=T(`browseCatalog`),t[25]=T,t[26]=r);let i;t[27]!==k||t[28]!==D?(i=()=>D(c(k,`catalog`)),t[27]=k,t[28]=D,t[29]=i):i=t[29];let a;t[30]!==i||t[31]!==r?(a={label:r,onClick:i},t[30]=i,t[31]=r,t[32]=a):a=t[32];let o;return t[33]!==a||t[34]!==e||t[35]!==n?(o=(0,y.jsx)(m,{icon:f,title:e,description:n,action:a}),t[33]=a,t[34]=e,t[35]=n,t[36]=o):o=t[36],o}let B;t[37]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,y.jsx)(b,{}),t[37]=B):B=t[37];let V;return t[38]!==n||t[39]!==x||t[40]!==r||t[41]!==s||t[42]!==z?(V=(0,y.jsx)(_.Suspense,{fallback:B,children:(0,y.jsx)(S,{categoryFilter:n,courses:z,searchQuery:r,selectedCategory:s,completionStatus:x,setSearchQuery:o,setSelectedCategory:l,setCompletionStatus:C})}),t[38]=n,t[39]=x,t[40]=r,t[41]=s,t[42]=z,t[43]=V):V=t[43],V};function w(e){let t=e.course?.categoryNames??[];return{enrollmentId:e.id,courseId:e.course?.id??``,title:e.course?.name??``,imageUrl:e.course?.coverImageUrl??``,progressPercentage:Math.ceil(Number(e.completionPercentage))||0,category:t,courseType:e.course?.courseType??``}}var T=o`
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
`,E=o`
  query ListModulesByCourse($courseId: UUID!) {
    listModulesByCourse(courseId: $courseId) {
      id
      courseId
      title
      orderIndex
      contents {
        id
        orderIndex
      }
    }
  }
`,D=o`
  query PublicCourses {
    publicCourses {
      id
      name
      description
      coverImageUrl
      courseType
      visibility
      createdAt
    }
  }
`;o`
  mutation CreateCourse($input: CreateCourseInput!) {
    createCourse(input: $input) {
      id
      name
    }
  }
`,o`
  mutation UpdateCourse($id: UUID!, $input: UpdateCourseInput!) {
    updateCourse(id: $id, input: $input) {
      id
      name
    }
  }
`,o`
  mutation DeleteCourse($id: UUID!) {
    deleteCourse(id: $id)
  }
`,o`
  mutation CreateModule($input: CreateModuleInput!) {
    createModule(input: $input) {
      id
      title
    }
  }
`;var O=o`
  mutation CreateModuleContent($input: CreateModuleContentInput!) {
    createModuleContent(input: $input) {
      id
      title
    }
  }
`;o`
  mutation DeleteModule($id: UUID!) {
    deleteModule(id: $id)
  }
`;export{C as a,D as i,T as n,E as r,O as t};