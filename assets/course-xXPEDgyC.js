import{n as e,t}from"./react-core-DSl9MNSm.js";import{t as n}from"./lib-BqHtwCmN.js";import"./button-BgJ90g_i.js";import"./dialog-CpYhJssY.js";import"./CoursesPage-WR3jxyR0.js";import"./queries-CZVS-Byg.js";import"./CourseDetailsPage-Bijcf6_o.js";import"./CourseCatalogPage-DC77JKXD.js";import"./CourseTable-CxPeaYK1.js";e(),t(),n`
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