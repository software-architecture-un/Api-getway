export const listsTypeDef = `
type Trail {
    id: String
    usertrail: Int!
    nametrail: String!
    origintrail: Int!
    destinytrail: Int!
}
type TrailInput {
    usertrail: Int!
    nametrail: String!
    origintrail: Int!
    destinytrail: Int!
}

type TrailsResponse {
    content: [Trail]
}
`;

export const listsQueries = `
    allTrails(): TrailsResponse!
    findTrailsByUser(id: Int!): TrailsResponse!
    findTrailById(id: String!): Trail!
`;

export const listsMutations = `
    createTrail(trail: TrailInput!): Trail!
    DeleteTrails(id: String!):
    deleteTrailById(id: Int!):
`;