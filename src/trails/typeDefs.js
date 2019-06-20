export const trailsTypeDef = `
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
    [Trail]
}
`;

export const trailsQueries = `
    allTrails():[Trail]
    findTrailsByUser(id: Int!): [Trail]
    findTrailById(id: String!): Trail
`;

export const trailsMutations = `
    createTrail(trail: TrailInput!): Trail
    DeleteTrails(id: String!):
    deleteTrailById(id: Int!):
`;