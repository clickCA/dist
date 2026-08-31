import{n as e}from"./react-core-D-_CyhZk.js";import{t}from"./lib-vzkWMg6K.js";import{n}from"./react-query-DmtcC92D.js";import{t as r}from"./config-CBZGEK4K.js";var i=e(),a=async e=>{let t=await r.get(`/quizzes/${e}/basic`);return{quiz:{id:t.id,title:t.title,quizType:t.quizType??``,questions:t.questions||[]}}},o={all:[`quizzes`],lists:()=>[...o.all,`list`],list:e=>[...o.lists(),{filters:e}],details:()=>[...o.all,`detail`],detail:e=>[...o.details(),e],stats:e=>[...o.details(),e,`stats`],attempts:e=>[...o.details(),e,`attempts`]},s=async e=>r.post(`/quizzes/${e.quizId}/submit`,e),c=t`
  query GetQuizAttemptAnalytics($quizId: UUID!, $userId: UUID!) {
    getQuizAttemptAnalytics(quizId: $quizId, userId: $userId) {
      totalAttempts
      scoreTrajectory {
        attemptNumber
        score
        timestamp
      }
      averageTimePerQuestion
      timeDistribution {
        range
        count
      }
      consistencyScore
      firstAttemptAverage
      improvementRate
      frequentlyMissedQuestions {
        questionId
        content
        missedCount
        lastAttemptedAt
      }
      weakTopics {
        topic
        attempts
        correctRate
      }
      percentileRank
      bestAttemptWindow
    }
  }
`,l=t`
  query GetQuestionAnalytics($quizId: UUID!, $userId: UUID!) {
    getQuestionAnalytics(quizId: $quizId, userId: $userId) {
      questionId
      content
      attempts
      correctCount
      incorrectCount
      averageTimeSpent
      successRate
      difficulty
    }
  }
`,u=t`
  query GetScoreTrajectory($quizId: UUID!, $userId: UUID!) {
    getScoreTrajectory(quizId: $quizId, userId: $userId) {
      attemptNumber
      score
      timestamp
    }
  }
`,d=t`
  query GetTimeDistribution($quizId: UUID!, $userId: UUID!) {
    getTimeDistribution(quizId: $quizId, userId: $userId) {
      range
      count
    }
  }
`,f=(e,t)=>{let r=(0,i.c)(10),s;r[0]===t?s=r[1]:(s=t||{},r[0]=t,r[1]=s);let{enabled:c}=s,l=c===void 0||c,u;r[2]===e?u=r[3]:(u=o.detail(e||``),r[2]=e,r[3]=u);let d;r[4]===e?d=r[5]:(d=()=>{if(!e)throw Error(`Quiz ID is required`);return a(e)},r[4]=e,r[5]=d);let f=l&&!!e,p;return r[6]!==u||r[7]!==d||r[8]!==f?(p={queryKey:u,queryFn:d,enabled:f,staleTime:3e5,gcTime:6e5,retry:2,refetchOnWindowFocus:!1},r[6]=u,r[7]=d,r[8]=f,r[9]=p):p=r[9],n(p)};export{d as a,u as i,l as n,s as o,c as r,f as t};