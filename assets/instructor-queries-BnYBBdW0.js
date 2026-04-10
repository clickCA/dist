import{t as e}from"./lib-qXR5uPXK.js";var t=e`
  query GetInstructorCourses($instructorId: UUID!) {
    getCourses(filter: { instructorId: $instructorId }) {
      id
      title
      description
      coverImageUrl
      status
      categoryId
      createdBy
      createdAt
      updatedAt
    }
  }
`,n=e`
  query GetCourseLearnerProgress($courseId: UUID!) {
    getCourseLearnerProgress(courseId: $courseId) {
      userId
      studentName
      studentEmail
      completionPercentage
      averageScorePercentage
      bestScorePercentage
      totalAttempts
      pendingReviewCount
      atRisk
      lastActivityAt
    }
  }
`,r=e`
  query GetCourseEnrollments($courseId: UUID!) {
    getAllEnrollments(courseId: $courseId) {
      id
      userId
      courseId
      enrolledAt
      completedAt
      progress
      lastAccessedAt
      user {
        id
        email
        displayName
        role
      }
    }
  }
`;e`
  query GetFilteredEnrollments($filter: EnrollmentFilterInput!) {
    getFilteredEnrollments(filter: $filter) {
      id
      userId
      courseId
      enrolledAt
      completedAt
      progress
      lastAccessedAt
      user {
        id
        email
        displayName
        role
      }
      course {
        id
        title
      }
    }
  }
`,e`
  query GetStudentQuizAttempts($userId: UUID!, $courseId: UUID!) {
    getAllUserQuizAttempts(userId: $userId, courseId: $courseId) {
      id
      userId
      quizId
      totalQuestions
      correctAnswers
      incorrectAnswers
      score
      scorePercentage
      timeSpentSeconds
      avgTimePerQuestion
      status
      attemptNumber
      isBestAttempt
      previousBestScore
      reviewCount
      performanceLevel
      startedAt
      completedAt
      lastReviewedAt
      submittedFileURL
      answers {
        id
        questionId
        studentAnswer
        isCorrect
        timeSpentSeconds
        question {
          id
          content
          questionType
          correctAnswer
        }
      }
    }
  }
`;var i=e`
  mutation MarkQuizAttemptReviewed($userId: UUID!, $userQuizAttemptId: UUID!) {
    markQuizAttemptReviewed(userId: $userId, userQuizAttemptId: $userQuizAttemptId)
  }
`;e`
  mutation CreateCourse($input: CreateCourseInput!) {
    createCourse(input: $input) {
      id
      title
      description
      coverImageUrl
      status
      categoryId
      createdBy
      createdAt
    }
  }
`,e`
  mutation UpdateCourse($id: UUID!, $input: UpdateCourseInput!) {
    updateCourse(id: $id, input: $input) {
      id
      title
      description
      coverImageUrl
      status
      categoryId
      updatedAt
    }
  }
`,e`
  mutation DeleteCourse($id: UUID!) {
    deleteCourse(id: $id)
  }
`;var a=e`
  mutation EnrollStudent($courseId: UUID!, $studentId: UUID!) {
    enrollStudent(courseId: $courseId, studentId: $studentId) {
      id
      userId
      courseId
      enrolledAt
    }
  }
`;e`
  mutation BulkEnrollStudents($courseId: UUID!, $studentIds: [UUID!]!) {
    bulkEnrollStudents(courseId: $courseId, studentIds: $studentIds) {
      successCount
      failedCount
      errors
    }
  }
`,e`
  mutation UnenrollStudent($enrollmentId: UUID!) {
    unenrollStudent(enrollmentId: $enrollmentId)
  }
`;export{i as a,t as i,r as n,n as r,a as t};