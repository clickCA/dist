import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{r as t}from"./react-core-OrPMYxb4.js";import{t as n}from"./lib-Cc9aGra-.js";import{t as r}from"./IconBase.es-Dh_WkqFB.js";var i=e(t(),1),a=new Map([[`bold`,i.createElement(i.Fragment,null,i.createElement(`path`,{d:`M244,56v64a12,12,0,0,1-24,0V85l-75.51,75.52a12,12,0,0,1-17,0L96,129,32.49,192.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0L136,135l67-67H168a12,12,0,0,1,0-24h64A12,12,0,0,1,244,56Z`}))],[`duotone`,i.createElement(i.Fragment,null,i.createElement(`path`,{d:`M232,56v64L168,56Z`,opacity:`0.2`}),i.createElement(`path`,{d:`M232,48H168a8,8,0,0,0-5.66,13.66L188.69,88,136,140.69l-34.34-34.35a8,8,0,0,0-11.32,0l-72,72a8,8,0,0,0,11.32,11.32L96,123.31l34.34,34.35a8,8,0,0,0,11.32,0L200,99.31l26.34,26.35A8,8,0,0,0,240,120V56A8,8,0,0,0,232,48Zm-8,52.69L187.31,64H224Z`}))],[`fill`,i.createElement(i.Fragment,null,i.createElement(`path`,{d:`M240,56v64a8,8,0,0,1-13.66,5.66L200,99.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,188.69,88,162.34,61.66A8,8,0,0,1,168,48h64A8,8,0,0,1,240,56Z`}))],[`light`,i.createElement(i.Fragment,null,i.createElement(`path`,{d:`M238,56v64a6,6,0,0,1-12,0V70.48l-85.76,85.76a6,6,0,0,1-8.48,0L96,120.49,28.24,188.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0L136,143.51,217.52,62H168a6,6,0,0,1,0-12h64A6,6,0,0,1,238,56Z`}))],[`regular`,i.createElement(i.Fragment,null,i.createElement(`path`,{d:`M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z`}))],[`thin`,i.createElement(i.Fragment,null,i.createElement(`path`,{d:`M236,56v64a4,4,0,0,1-8,0V65.66l-89.17,89.17a4,4,0,0,1-5.66,0L96,117.66,26.83,186.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0L136,146.34,222.34,60H168a4,4,0,0,1,0-8h64A4,4,0,0,1,236,56Z`}))]]),o=i.forwardRef((e,t)=>i.createElement(r,{ref:t,...e,weights:a}));o.displayName=`TrendUpIcon`;var s=o,c=n`
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
`,l=n`
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
`,u=n`
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
`,d=n`
  query GetLearnerActivitySummary($courseId: UUID!, $userId: UUID!) {
    getLearnerActivitySummary(courseId: $courseId, userId: $userId) {
      totalTimeSpentSeconds
      averageSessionDuration
      lastActiveAt
      activeDaysLastWeek
      studyStreak
    }
  }
`,f=n`
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
`,p=n`
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
`;n`
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
`,n`
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
`,n`
  mutation MarkQuizAttemptReviewed($userId: UUID!, $userQuizAttemptId: UUID!) {
    markQuizAttemptReviewed(userId: $userId, userQuizAttemptId: $userQuizAttemptId)
  }
`,n`
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
`,n`
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
`,n`
  mutation DeleteCourse($id: UUID!) {
    deleteCourse(id: $id)
  }
`;var m=n`
  mutation EnrollStudent($courseId: UUID!, $studentId: UUID!) {
    enrollStudent(courseId: $courseId, studentId: $studentId) {
      id
      userId
      courseId
      enrolledAt
    }
  }
`;n`
  mutation BulkEnrollStudents($courseId: UUID!, $studentIds: [UUID!]!) {
    bulkEnrollStudents(courseId: $courseId, studentIds: $studentIds) {
      successCount
      failedCount
      errors
    }
  }
`,n`
  mutation UnenrollStudent($enrollmentId: UUID!) {
    unenrollStudent(enrollmentId: $enrollmentId)
  }
`;export{d as a,s as c,c as i,p as n,u as o,l as r,f as s,m as t};