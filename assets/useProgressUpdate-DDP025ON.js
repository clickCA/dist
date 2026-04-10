import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{r as t}from"./react-core-BAEfO1iS.js";import{n}from"./apollo-BQdbmmC2.js";import{t as r}from"./lib-qXR5uPXK.js";import{N as i}from"./index-DTxFZL1m.js";var a=r`
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
`,o=r`
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
`,s=e(t(),1),c=()=>{let[e]=n(a,{refetchQueries:[`GetCourseStructure`],awaitRefetchQueries:!0,onCompleted:()=>{i.getState().setShouldRefetch(!0)},onError:e=>{console.error(`useProgressUpdate: Mutation error`,e),console.error(`useProgressUpdate: Error details`,{message:e.message,graphQLErrors:e?.graphQLErrors,networkError:e?.networkError})}}),[t]=n(o);return{markContentCompleted:(0,s.useCallback)(async(t,n,r)=>{console.log(`useProgressUpdate: markContentCompleted called`,{referenceId:t,referenceType:n,options:r});try{let i=await e({variables:{input:{referenceId:t,referenceType:n,completed:!0,completionPercentage:r?.completionPercentage??100,timeSpentSeconds:r?.timeSpentSeconds}}});return console.log(`useProgressUpdate: upsertProgress result`,i),{success:!0,data:i.data}}catch(e){return console.error(`useProgressUpdate: Failed to mark content as completed:`,e),{success:!1,error:e}}},[e]),updateProgress:(0,s.useCallback)(async(t,n,r)=>{try{let{data:i}=await e({variables:{input:{referenceId:t,referenceType:n,completed:r.completed,completionPercentage:r.completionPercentage,timeSpentSeconds:r.timeSpentSeconds}}});return{success:!0,data:i}}catch(e){return console.error(`Failed to update progress:`,e),{success:!1,error:e}}},[e]),updateWatchTime:(0,s.useCallback)(async e=>{try{let{data:n}=await t({variables:{input:e}});return{success:!0,data:n}}catch(e){return console.error(`Failed to update watch time:`,e),{success:!1,error:e}}},[t])}};export{c as t};