import{t as e}from"./lib-DVQR9tqw.js";e`
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
      lastVisitedContentId
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
            orderIndex
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
`;e`
  query GetVideoChunks($contentId: UUID!) {
    videoChunks(contentId: $contentId) {
      id
      contentId
      startTimeSeconds
      endTimeSeconds
      keyConcepts
      orderIndex
      questions {
        questionId
        prompt
        topic
        quizId
      }
    }
  }
`;export{t as n,r,n as t};