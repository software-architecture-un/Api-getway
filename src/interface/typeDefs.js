export const interfaceTypeDef = `
type Interface {
    value: Int!
}
input InterfaceInput{
    username: String!
}
`;

export const interfaceMutations = `
    getCountFiles(username: InterfaceInput!): Interface!
`;