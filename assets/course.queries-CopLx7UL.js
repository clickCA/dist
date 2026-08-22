import{t as e}from"./lib-DVQR9tqw.js";var t=e`
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
`;e`
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
`;var n=e`
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
`;export{n,t};