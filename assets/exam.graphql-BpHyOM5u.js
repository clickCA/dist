import{t as e}from"./lib-vzkWMg6K.js";var t=e`
  query ListMockExams {
    listMockExams {
      id
      title
      quizType
      totalQuestions
      timeLimit
      hasTimeLimit
      requiresFile
      isActive
      passingScore
      createdAt
      updatedAt
    }
  }
`;e`
  query ListQuizzes($courseId: UUID) {
    listQuizzes(courseId: $courseId) {
      id
      title
      quizType
      totalQuestions
      timeLimit
      hasTimeLimit
      requiresFile
      isActive
      passingScore
      createdAt
      updatedAt
    }
  }
`,e`
  query GetMockExam($quizId: UUID!) {
    getMockExam(quizId: $quizId) {
      id
      title
      quizType
      totalQuestions
      timeLimit
      hasTimeLimit
      requiresFile
      isActive
      passingScore
      createdAt
      updatedAt
    }
  }
`,e`
  query GetMockExamByCourse($courseId: UUID!) {
    getMockExamByCourse(courseId: $courseId) {
      id
      title
      quizType
      totalQuestions
      timeLimit
      hasTimeLimit
      requiresFile
      isActive
      passingScore
      createdAt
      updatedAt
    }
  }
`;var n=e`
  query ListCourses {
    listCourses {
      id
      name
      description
      coverImageUrl
      visibility
      courseType
      createdAt
      updatedAt
    }
  }
`,r=e`
  mutation CreateQuiz($input: CreateQuizInput!) {
    createQuiz(input: $input) {
      id
      title
      quizType
      totalQuestions
      timeLimit
      hasTimeLimit
      requiresFile
      isActive
      passingScore
      createdAt
      updatedAt
    }
  }
`,i=e`
  mutation UpdateQuiz($id: UUID!, $input: UpdateQuizInput!) {
    updateQuiz(id: $id, input: $input) {
      id
      title
      quizType
      totalQuestions
      timeLimit
      hasTimeLimit
      requiresFile
      isActive
      passingScore
      createdAt
      updatedAt
    }
  }
`,a=e`
  mutation DeleteQuiz($id: UUID!) {
    deleteQuiz(id: $id)
  }
`,o=e`
  mutation CreateQuestion($input: CreateQuestionInput!) {
    createQuestion(input: $input) {
      id
      moduleId
      questionType
      content
      imageUrl
      choices
      correctAnswer
      explanation
      solutionVideoUrl
      solutionFileUrl
      difficultyLevel
      tags
      createdAt
      updatedAt
    }
  }
`,s=e`
  mutation UpdateQuestion($id: UUID!, $input: UpdateQuestionInput!) {
    updateQuestion(id: $id, input: $input) {
      id
      moduleId
      questionType
      content
      imageUrl
      choices
      correctAnswer
      explanation
      solutionVideoUrl
      solutionFileUrl
      difficultyLevel
      tags
      createdAt
      updatedAt
    }
  }
`,c=e`
  mutation DeleteQuestion($id: UUID!) {
    deleteQuestion(id: $id)
  }
`,l=e`
  mutation AddQuestionToQuiz(
    $quizId: UUID!
    $questionId: UUID!
    $orderIndex: Int!
  ) {
    addQuestionToQuiz(
      quizId: $quizId
      questionId: $questionId
      orderIndex: $orderIndex
    )
  }
`,u=e`
  mutation RemoveQuestionFromQuiz($quizId: UUID!, $questionId: UUID!) {
    removeQuestionFromQuiz(quizId: $quizId, questionId: $questionId)
  }
`;export{a,u as c,c as i,s as l,o as n,n as o,r,t as s,l as t,i as u};