import{n as e,t}from"./react-core-OrPMYxb4.js";import{t as n}from"./lib-Cc9aGra-.js";import"./button-BO3r7oTq.js";import"./dialog-exfoXFEu.js";import"./CoursesPage-B49gfkzG.js";import"./queries-Dxwwd803.js";import"./CourseDetailsPage-BvMtZg94.js";import"./CourseCatalogPage-BQyf3k_J.js";import"./CourseTable-Cf0SREMY.js";e(),t(),n`
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