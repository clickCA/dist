import{t as e}from"./lib-qXR5uPXK.js";var t=e`
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
      createdAt
      updatedAt
    }
  }
`;export{t};