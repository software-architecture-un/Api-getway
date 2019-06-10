export const usersTypeDef = `
type User {
    id: Int!
    name: String!
    document: String!
    age: Int!
    email: String!
    password_digest: String
}
type JWT {
    jwt: String!
    message: String!
}
type UserResponse {
    content: User!
    message: String!
}
type UsersResponse {
    content: [User]!
    message: String!
}
input UserInput {
    name: String!
    document: String!
    age: Int!
    email: String!
    password: String!
}
input UserUpdateInput {
    name: String
    document: String
    age: Int
    email: String
    password: String
}

input UserLogin {
    email: String!
    password: String!
}`;

export const usersQueries = `
    allUsers: UsersResponse
    userById(id: Int!): UserResponse
`;

export const usersMutations = `
    signIn(user: UserLogin!): JWT
    createUser(user: UserInput!): UserResponse
    deleteUser(id: Int!): UserResponse
    updateUser(id: Int!, user: UserUpdateInput!): UserResponse 
    updateUser2(id: Int!, user: UserUpdateInput!): UserResponse 
`;
