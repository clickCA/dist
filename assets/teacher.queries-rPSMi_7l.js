import{t as e}from"./lib-DVQR9tqw.js";var t=e`
  query GetModuleStuckRates($courseId: UUID!) {
    getModuleStuckRates(courseId: $courseId) {
      moduleId
      moduleTitle
      orderIndex
      totalEnrolled
      attemptedCount
      passedCount
      stuckCount
      stuckPercentage
      averageAttempts
      severity
    }
  }
`,n=e`
  query GetInstructorCohortOverview($instructorId: UUID!) {
    getInstructorCohortOverview(instructorId: $instructorId) {
      instructorId
      totalCourses
      totalStudents
      students {
        userId
        studentName
        studentEmail
        courseCount
        courses {
          courseId
          courseTitle
          completionPercentage
          averageScorePercentage
          totalAttempts
          atRisk
          riskLevel
          lastActivityAt
        }
        aggregatedCompletionPercentage
        aggregatedAtRisk
        aggregatedTotalAttempts
        lastActivityAt
      }
    }
  }
`,r=e`
  mutation CreateStudentAccount($input: CreateStudentAccountInput!) {
    createStudentAccount(input: $input) {
      userId
      name
      email
      role
      password
      courseIds
    }
  }
`,i=e`
  mutation CloseCase($input: CloseCaseInput!) {
    closeCase(input: $input) {
      id
      caseRef
    }
  }
`,a=e`
  query GetAIDiagnostic($courseId: UUID!, $userId: UUID!) {
    getAIDiagnostic(courseId: $courseId, userId: $userId) {
      courseId
      userId
      studentName
      evidence {
        completionPercentage
        averageScorePercentage
        totalAttempts
        atRisk
        riskLevel
        weakTopics
        overallTrend
      }
      summary {
        text
        confidence
        tags
      }
    }
  }
`;export{t as a,n as i,r as n,a as r,i as t};