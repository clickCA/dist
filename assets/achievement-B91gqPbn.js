import{n as e}from"./skeleton-C509Qo3e.js";var t=e`
  query GetMyCertificates {
    myCertificates {
      id
      courseId
      courseName
      userName
      verificationCode
      issuedAt
    }
  }
`,n=e`
  query VerifyCertificate($code: String!) {
    verifyCertificate(code: $code) {
      id
      courseId
      courseName
      userName
      verificationCode
      issuedAt
    }
  }
`,r=e`
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
`;export{t as n,n as r,r as t};