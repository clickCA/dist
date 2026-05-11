import{n as e,t}from"./react-core-OrPMYxb4.js";import{t as n}from"./lib-Cc9aGra-.js";import"./button-shuZzec1.js";import"./dialog-DMPo0hKH.js";import"./CoursesPage-bxRsGqzz.js";import"./queries-CogPi7MR.js";import"./CourseDetailsPage-Brny1n4X.js";import"./CourseCatalogPage-DDf_3u_r.js";import"./CourseTable--2GV3KE1.js";e(),t(),n`
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