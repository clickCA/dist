import{n as e,t}from"./react-core-OrPMYxb4.js";import{t as n}from"./lib-Cc9aGra-.js";import"./button-shuZzec1.js";import"./dialog-12Iwz56j.js";import"./CoursesPage-BesBk2zb.js";import"./queries-CwUbI2vG.js";import"./CourseDetailsPage-j7vprVfC.js";import"./CourseCatalogPage-D6ePvlNQ.js";import"./CourseTable-Djx8znoJ.js";e(),t(),n`
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