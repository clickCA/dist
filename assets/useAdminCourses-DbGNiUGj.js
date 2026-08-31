import{n as e}from"./react-core-D-_CyhZk.js";import{a as t}from"./apollo-C3LLufMU.js";import{t as n}from"./lib-vzkWMg6K.js";import"./lesson.queries-OQ7Lq0h9.js";import"./index-B1rKegCQ.js";import{t as r}from"./course.queries-DibeAv4n.js";import"./exam.graphql-BpHyOM5u.js";var i=e(),a=n`
  mutation CreateCourse($input: CreateCourseInput!) {
    createCourse(input: $input) {
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
`,o=n`
  mutation UpdateCourse($id: UUID!, $input: UpdateCourseInput!) {
    updateCourse(id: $id, input: $input) {
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
`,s=n`
  mutation DeleteCourse($id: UUID!) {
    deleteCourse(id: $id)
  }
`,c=n`
  mutation CreateModule($input: CreateModuleInput!) {
    createModule(input: $input) {
      id
      courseId
      title
      orderIndex
    }
  }
`,l=n`
  mutation UpdateModule($id: UUID!, $input: UpdateModuleInput!) {
    updateModule(id: $id, input: $input) {
      id
      courseId
      title
      orderIndex
    }
  }
`,u=n`
  mutation CreateModuleContent($input: CreateModuleContentInput!) {
    createModuleContent(input: $input) {
      id
      title
      contentType
      orderIndex
      referenceType
      referenceId
    }
  }
`,d=n`
  mutation DeleteModule($id: UUID!) {
    deleteModule(id: $id)
  }
`,f=n`
  mutation DeleteModuleContent($id: UUID!) {
    deleteModuleContent(id: $id)
  }
`,p=n`
  mutation UpdateModuleContent($id: UUID!, $input: UpdateModuleContentInput!) {
    updateModuleContent(id: $id, input: $input) {
      id
      title
      contentType
      orderIndex
      referenceType
      referenceId
    }
  }
`,m=n`
  mutation AdminEnroll($courseId: UUID!, $userId: UUID!) {
    adminEnroll(courseId: $courseId, userId: $userId) {
      id
      userId
      courseId
      isActive
    }
  }
`;n`
  mutation RemoveEnrollment($enrollmentId: UUID!) {
    removeEnrollment(enrollmentId: $enrollmentId)
  }
`;function h(){let e=(0,i.c)(16),n;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(n={refetchQueries:[{query:r}],awaitRefetchQueries:!0},e[0]=n):n=e[0];let[c,l]=t(a,n),{loading:u}=l,d;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(d={refetchQueries:[{query:r}],awaitRefetchQueries:!0},e[1]=d):d=e[1];let[f,p]=t(o,d),{loading:m}=p,h;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(h={refetchQueries:[{query:r}],awaitRefetchQueries:!0,update(e,t){let{data:n}=t;n&&(e.evict({fieldName:`listCourses`}),e.gc())}},e[2]=h):h=e[2];let[g,_]=t(s,h),{loading:v}=_,y;e[3]===c?y=e[4]:(y=async e=>(await c({variables:{input:{name:e.name,description:e.description||null,coverImageUrl:e.coverImageUrl||null,visibility:e.visibility,courseType:e.courseType||null}}})).data?.createCourse??null,e[3]=c,e[4]=y);let b;e[5]===f?b=e[6]:(b=async(e,t)=>(await f({variables:{id:e,input:{name:t.name,description:t.description||null,coverImageUrl:t.coverImageUrl||null,visibility:t.visibility,courseType:t.courseType||null}}})).data?.updateCourse??null,e[5]=f,e[6]=b);let x;e[7]===g?x=e[8]:(x=async e=>!!(await g({variables:{id:e}})).data,e[7]=g,e[8]=x);let S;return e[9]!==u||e[10]!==v||e[11]!==y||e[12]!==b||e[13]!==x||e[14]!==m?(S={createCourse:y,updateCourse:b,deleteCourse:x,creating:u,updating:m,deleting:v},e[9]=u,e[10]=v,e[11]=y,e[12]=b,e[13]=x,e[14]=m,e[15]=S):S=e[15],S}export{d as a,p as c,u as i,m as n,f as o,c as r,l as s,h as t};