import{t as e}from"./lib-qXR5uPXK.js";e`
  mutation CreateCourse($input: CreateCourseInput!) {
    createCourse(input: $input) {
      id
      name
    }
  }
`,e`
  mutation UpdateCourse($id: UUID!, $input: UpdateCourseInput!) {
    updateCourse(id: $id, input: $input) {
      id
      name
    }
  }
`,e`
  mutation DeleteCourse($id: UUID!) {
    deleteCourse(id: $id)
  }
`,e`
  mutation CreateModule($input: CreateModuleInput!) {
    createModule(input: $input) {
      id
      title
    }
  }
`;var t=e`
  mutation CreateModuleContent($input: CreateModuleContentInput!) {
    createModuleContent(input: $input) {
      id
      title
    }
  }
`;e`
  mutation DeleteModule($id: UUID!) {
    deleteModule(id: $id)
  }
`;var n=e`
  mutation CreateLesson($input: CreateLessonInput!) {
    createLesson(input: $input) {
      id
      title
    }
  }
`,r=e`
  mutation CreateLessonContent($input: CreateLessonContentInput!) {
    createLessonContent(input: $input) {
      id
    }
  }
`;e`
  mutation DeleteLesson($id: UUID!) {
    deleteLesson(id: $id)
  }
`;var i=e`
  mutation UpdateUser($id: UUID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      name
      email
      role
    }
  }
`,a=e`
  mutation DeleteUser($id: UUID!) {
    deleteUser(id: $id)
  }
`,o=e`
  mutation EnrollSelf($courseId: UUID!) {
    enrollSelf(courseId: $courseId) {
      id
    }
  }
`,s=e`
  mutation MarkNotificationRead($id: UUID!) {
    markNotificationRead(id: $id)
  }
`,c=e`
  mutation MarkAllNotificationsRead {
    markAllNotificationsRead
  }
`;e`
  mutation CreateAnnouncement($input: CreateAnnouncementInput!) {
    createAnnouncement(input: $input) {
      id
      title
    }
  }
`,e`
  mutation DeleteAnnouncement($id: UUID!) {
    deleteAnnouncement(id: $id)
  }
`,e`
  mutation CreateDiscussion($input: CreateDiscussionInput!) {
    createDiscussion(input: $input) {
      id
      title
    }
  }
`,e`
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      content
    }
  }
`,e`
  mutation CreateAssignment($input: CreateAssignmentInput!) {
    createAssignment(input: $input) {
      id
      title
    }
  }
`,e`
  mutation DeleteAssignment($id: UUID!) {
    deleteAssignment(id: $id)
  }
`;var l=e`
  mutation SubmitAssignment($input: SubmitAssignmentInput!) {
    submitAssignment(input: $input) {
      id
      status
    }
  }
`,u=e`
  mutation GradeSubmission($submissionId: UUID!, $input: GradeSubmissionInput!) {
    gradeSubmission(submissionId: $submissionId, input: $input) {
      id
      grade
      status
    }
  }
`,d=e`
  mutation IssueCertificate($courseId: UUID!, $userId: UUID!) {
    issueCertificate(courseId: $courseId, userId: $userId) {
      id
      courseId
      courseName
      userName
      verificationCode
      issuedAt
    }
  }
`;e`
  mutation CreateQuestion($input: CreateQuestionInput!) {
    createQuestion(input: $input) {
      id
      content
    }
  }
`,e`
  mutation DeleteQuestion($id: UUID!) {
    deleteQuestion(id: $id)
  }
`,e`
  mutation CreateQuiz($input: CreateQuizInput!) {
    createQuiz(input: $input) {
      id
      title
    }
  }
`,e`
  mutation DeleteQuiz($id: UUID!) {
    deleteQuiz(id: $id)
  }
`;export{o as a,c,i as d,a as i,s as l,r as n,u as o,t as r,d as s,n as t,l as u};