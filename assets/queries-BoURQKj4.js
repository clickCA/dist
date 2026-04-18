import{t as e}from"./lib-DoQ-Y164.js";e`
  query GetLesson($id: UUID!) {
    getLesson(id: $id) {
      contents {
        url
      }
    }
  }
`;var t=e`
  query GetLesson($id: UUID!) {
    getLesson(id: $id) {
      contents {
        contentType
        content
        url
      }
    }
  }
`;e`
  mutation UpdateEnrollmentCompletePercentage($input: UpdateEnrollmentInput!) {
    updateEnrollment(input: $input) {
      id
      completionPercentage
    }
  }
`;var n=e`
  query GetCourseStructure($courseId: UUID!, $userId: UUID) {
    getCourseStructure(courseId: $courseId, userId: $userId) {
      course {
        id
        name
        visibility
        createdAt
      }
      progress {
        completionPercentage
        completed
      }
      stats {
        totalModules
        totalContents
        completedContents
      }
      quizSummary {
        totalQuizzes
        totalQuestions
      }
      modules {
        id
        courseId
        title
        orderIndex
        createdAt
        progress {
          id
          completed
          completionPercentage
        }
        contents {
          moduleContent {
            id
            title
            contentType
            referenceType
            referenceObject {
              __typename
              ... on Quiz {
                id
                title
                quizType
                totalQuestions
              }
              ... on Lesson {
                id
                title
                contents {
                  contentType
                  content
                  url
                }
              }
            }
          }
          progress {
            id
            completed
            completionPercentage
          }
        }
      }
    }
  }
`;e`
  query GetResumePosition($contentId: UUID!) {
    getResumePosition(contentId: $contentId) {
      lastPositionSeconds
      completed
    }
  }
`;var r=e`
  query GetSolutionVideos($quizId: UUID!) {
    getQuiz(id: $quizId) {
      id
      title
      solutionVideos {
        id
        questionNumber
        videoUrl
        title
      }
    }
  }
`;export{t as n,r,n as t};