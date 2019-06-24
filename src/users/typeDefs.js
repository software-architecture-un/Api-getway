export const usersTypeDef = `
type User {
    id: Int
    name: String
    document: String
    age: Int
    email: String
    password_digest: String
}
type JWT {
    content: String
    message: String
    status: Int
}
type UserResponse {
    content: User
    message: String
    status: Int
}
type UsersResponse {
    content: [User]
    message: String
    status: Int
}
type VerifyJWTResponse {
    content: String
    message: String
    status: Int
}
input UserInput {
    name: String
    document: String
    age: Int
    email: String
    password: String
}
input UserUpdateInput {
    name: String
    document: String
    age: Int
    email: String
    password: String
}
input UserLogin {
    email: String
    password: String
}
input TokenInput {
    jwt: String
}`;

export const usersQueries = `
    allUsers: UsersResponse
    userById(id: Int!): UserResponse
`;

export const usersMutations = `
    signIn(user: UserLogin!): JWT
    verifyToken(jwt: TokenInput!): VerifyJWTResponse
    createUser(user: UserInput!): UserResponse
    deleteUser(id: Int!): UserResponse
    updateUser(id: Int!, user: UserUpdateInput!): UserResponse 
    updateUser2(id: Int!, user: UserUpdateInput!): UserResponse 
    userByEmail(email: String!): UserResponse
`;
