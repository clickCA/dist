import{n as e}from"./react-core-OrPMYxb4.js";import{t}from"./apollo-Du3VMLwy.js";import{t as n}from"./lib-Cc9aGra-.js";var r=n`
  query EnrolledStudents($courseId: UUID!) {
    enrolledStudents(courseId: $courseId) {
      id
      name
      email
      role
    }
  }
`,i=n`
  query GetStudentEnrollments($studentId: UUID!) {
    getStudentEnrollments(studentId: $studentId) {
      id
      userId
      course {
        id
        name
        description
        coverImageUrl
        categoryNames
        courseType
      }
      completionPercentage
      status
      timeSpentSeconds
      startedAt
      lastAccessedAt
      completedAt
      enrollmentDate
      isActive
      createdAt
      updatedAt
    }
  }
`,a=n`
  mutation EnrollSelf($courseId: UUID!) {
    enrollSelf(courseId: $courseId) {
      id
    }
  }
`,o=e(),s=e=>{let n=(0,o.c)(5),r;n[0]===e?r=n[1]:(r={studentId:e},n[0]=e,n[1]=r);let a=!e,s;return n[2]!==r||n[3]!==a?(s={variables:r,skip:a,fetchPolicy:`cache-and-network`,nextFetchPolicy:`cache-and-network`,notifyOnNetworkStatusChange:!0},n[2]=r,n[3]=a,n[4]=s):s=n[4],t(i,s)};export{i,a as n,r,s as t};