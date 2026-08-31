import{t as e}from"./lib-vzkWMg6K.js";var t=e`
  query ListUsers {
    listUsers {
      id
      email
      name
      role
      createdAt
    }
  }
`,n=e`
  mutation UpdateUser($id: UUID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      name
      email
      role
    }
  }
`,r=e`
  mutation DeleteUser($id: UUID!) {
    deleteUser(id: $id)
  }
`;export{t as n,n as r,r as t};