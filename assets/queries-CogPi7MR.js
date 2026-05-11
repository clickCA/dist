import{t as e}from"./lib-Cc9aGra-.js";var t=e`
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
`,n=e`
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
`,r=e`
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
`;export{n,r,t};