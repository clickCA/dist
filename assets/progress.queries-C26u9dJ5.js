import{t as e}from"./lib-DVQR9tqw.js";var t=e`
  query GetInstructorCourses($instructorId: UUID!) {
    getCourses(filter: { instructorId: $instructorId }) {
      id
      title: name
      description
      coverImageUrl
      status: visibility
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
      riskLevel
      lastActivityAt
      percentileRank
    }
  }
`,r=e`
  query GetLearnerModuleProgress($courseId: UUID!, $userId: UUID!) {
    getLearnerModuleProgress(courseId: $courseId, userId: $userId) {
      moduleId
      moduleTitle
      completionPercentage
      quizStats {
        attempts
        averageScore
        bestScore
      }
    }
  }
`,i=e`
  query GetLearnerActivitySummary($courseId: UUID!, $userId: UUID!) {
    getLearnerActivitySummary(courseId: $courseId, userId: $userId) {
      totalTimeSpentSeconds
      averageSessionDuration
      lastActiveAt
      activeDaysLastWeek
      studyStreak
    }
  }
`,a=e`
  query GetLearnerTopicAnalysis($courseId: UUID!, $userId: UUID!) {
    getLearnerTopicAnalysis(courseId: $courseId, userId: $userId) {
      userId
      strongTopics {
        topic
        attempts
        correctRate
        weakAreas
      }
      weakTopics {
        topic
        attempts
        correctRate
        weakAreas
      }
      overallTrend
    }
  }
`,o=e`
  query GetClassStatistics($courseId: UUID!) {
    getClassStatistics(courseId: $courseId) {
      totalStudents
      averageCompletion
      averageScore
      medianScore
      averageAttempts
    }
  }
`,s=e`
  query GetStudentAttemptHistory($courseId: UUID!, $userId: UUID!) {
    getStudentAttemptHistory(courseId: $courseId, userId: $userId) {
      attemptId
      quizId
      quizTitle
      quizType
      moduleTitle
      score
      scorePercentage
      totalQuestions
      correctAnswers
      incorrectAnswers
      timeSpentSeconds
      avgTimePerQuestion
      attemptNumber
      isBestAttempt
      performanceLevel
      status
      startedAt
      completedAt
    }
  }
`,c=e`
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
`,l=e`
  mutation EnrollStudent($courseId: UUID!, $studentId: UUID!) {
    enrollStudent(courseId: $courseId, studentId: $studentId) {
      id
      userId
      courseId
      enrolledAt
    }
  }
`;export{i as a,s as c,t as i,c as l,o as n,r as o,n as r,a as s,l as t};