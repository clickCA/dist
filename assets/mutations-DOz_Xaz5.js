import{t as e}from"./lib-BqHtwCmN.js";var t=e`
  mutation CreateLesson($input: CreateLessonInput!) {
    createLesson(input: $input) {
      id
      title
    }
  }
`,n=e`
  mutation CreateLessonContent($input: CreateLessonContentInput!) {
    createLessonContent(input: $input) {
      id
    }
  }
`;e`
  mutation DeleteLesson($id: UUID!) {
    deleteLesson(id: $id)
  }
`;var r=e`
  mutation UpsertProgress($input: UpsertProgressInput!) {
    upsertProgress(input: $input) {
      id
      userId
      referenceId
      referenceType
      completed
      completionPercentage
      timeSpentSeconds
      completedAt
      lastAccessedAt
      createdAt
      updatedAt
    }
  }
`,i=e`
  mutation SaveLastVisitedContent($input: SaveLastVisitedContentInput!) {
    saveLastVisitedContent(input: $input)
  }
`,a=e`
  mutation UpdateVideoWatchTime($input: UpdateVideoWatchTimeInput!) {
    updateVideoWatchTime(input: $input) {
      id
      userId
      referenceId
      referenceType
      completed
      completionPercentage
      timeSpentSeconds
      completedAt
      lastAccessedAt
      createdAt
      updatedAt
    }
  }
`;export{r as a,a as i,n,i as r,t};