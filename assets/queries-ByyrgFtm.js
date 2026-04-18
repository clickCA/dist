import{t as e}from"./lib-DoQ-Y164.js";var t=e`
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
  query EnrolledStudents($courseId: UUID!) {
    enrolledStudents(courseId: $courseId) {
      id
      name
      email
      role
    }
  }
`;e`
  query ListCategories {
    listCategories {
      id
      name
      description
    }
  }
`;var i=e`
  query ListUsers {
    listUsers {
      id
      email
      name
      role
      createdAt
    }
  }
`;e`
  query ListQuestions($moduleId: UUID, $questionType: String, $limit: Int, $offset: Int) {
    listQuestions(moduleId: $moduleId, questionType: $questionType, limit: $limit, offset: $offset) {
      id
      content
      questionType
      correctAnswer
      explanation
      difficultyLevel
      createdAt
    }
  }
`;var a=e`
  query GetNotifications($limit: Int, $offset: Int) {
    notifications(limit: $limit, offset: $offset) {
      notifications {
        id
        type
        title
        message
        isRead
        link
        createdAt
      }
      unreadCount
    }
  }
`;e`
  query GetAnnouncements($courseId: UUID!) {
    announcements(courseId: $courseId) {
      id
      courseId
      title
      content
      isPinned
      createdAt
      updatedAt
    }
  }
`,e`
  query GetDiscussions($courseId: UUID!, $limit: Int, $offset: Int) {
    discussions(courseId: $courseId, limit: $limit, offset: $offset) {
      id
      courseId
      title
      content
      isResolved
      createdAt
    }
  }
`,e`
  query GetDiscussion($id: UUID!) {
    discussion(id: $id) {
      id
      courseId
      title
      content
      isResolved
      comments {
        id
        content
        createdAt
      }
      createdAt
    }
  }
`;var o=e`
  query GetAssignments($courseId: UUID!) {
    assignments(courseId: $courseId) {
      id
      courseId
      title
      description
      maxScore
      dueDate
      createdAt
    }
  }
`,s=e`
  query GetMySubmissions {
    mySubmissions {
      id
      assignmentId
      status
      grade
      feedback
      submittedAt
    }
  }
`,c=e`
  query GetMyCertificates {
    myCertificates {
      id
      courseId
      courseName
      userName
      verificationCode
      issuedAt
    }
  }
`,l=e`
  query VerifyCertificate($code: String!) {
    verifyCertificate(code: $code) {
      id
      courseId
      courseName
      userName
      verificationCode
      issuedAt
    }
  }
`,u=e`
  query Search($query: String!, $limit: Int) {
    search(query: $query, limit: $limit) {
      courses {
        id
        name
        description
      }
      lessons {
        id
        title
        courseId
        moduleTitle
      }
      questions {
        id
        content
        questionType
      }
    }
  }
`,d=e`
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
`;export{a,i as c,l as d,s as i,d as l,o as n,t as o,c as r,n as s,r as t,u};