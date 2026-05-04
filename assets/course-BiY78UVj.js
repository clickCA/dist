import{n as e,t}from"./react-core-OrPMYxb4.js";import{t as n}from"./lib-Cc9aGra-.js";import"./button-CVFz52tX.js";import"./dialog-CrkJKSDx.js";import"./CoursesPage-Boguim6q.js";import"./queries-CwUbI2vG.js";import"./CourseDetailsPage-Cjxyq2Tw.js";import"./CourseCatalogPage-L4-zzMef.js";import"./CourseTable-CX7ypnhG.js";e(),t(),n`
  mutation CreateCourse($input: CreateCourseInput!) {
    createCourse(input: $input) {
      id
      name
    }
  }
`,n`
  mutation UpdateCourse($id: UUID!, $input: UpdateCourseInput!) {
    updateCourse(id: $id, input: $input) {
      id
      name
    }
  }
`,n`
  mutation DeleteCourse($id: UUID!) {
    deleteCourse(id: $id)
  }
`,n`
  mutation CreateModule($input: CreateModuleInput!) {
    createModule(input: $input) {
      id
      title
    }
  }
`;var r=n`
  mutation CreateModuleContent($input: CreateModuleContentInput!) {
    createModuleContent(input: $input) {
      id
      title
    }
  }
`;n`
  mutation DeleteModule($id: UUID!) {
    deleteModule(id: $id)
  }
`;export{r as t};