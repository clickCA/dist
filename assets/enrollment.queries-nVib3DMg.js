import{t as e}from"./lib-BINeO7UO.js";var t=e`
  query EnrolledStudents($courseId: UUID!) {
    enrolledStudents(courseId: $courseId) {
      id
      name
      email
      role
    }
  }
`,n=e`
  query GetStudentEnrollments($studentId: UUID!) {
    getStudentEnrollments(studentId: $studentId) {
      id
      userId
      course {
        id
        name
        description
        coverImageUrl
        categoryNames
        courseType
      }
      completionPercentage
      status
      timeSpentSeconds
      startedAt
      lastAccessedAt
      completedAt
      enrollmentDate
      isActive
      lastModuleContentId
      createdAt
      updatedAt
    }
  }
`;export{n,t};