export const trailsTypeDef = `
type Trail {
    id: String
    usertrail: Int!
    nametrail: String!
    origintrail: Int!
    destinytrail: Int!
}
input TrailInput {
    usertrail: Int!
    nametrail: String!
    origintrail: Int!
    destinytrail: Int!
}

type DeleteTrailsOutput {
        Updated: Int!,
        Removed: Int!,
        Matched: Int!,
        UpsertedId: Int
}

type DeleteTrailByIdOutput {
    result: String
}
`;

export const trailsQueries = `
    allTrails: [Trail]
    findTrailsByUser(id: Int!): [Trail]
    findTrailById(id: String!): Trail!
`;

export const trailsMutations = `
    createTrail(trail: TrailInput!): Trail!
    deleteTrails(id: Int!): DeleteTrailsOutput
    deleteTrailById(id: String!): DeleteTrailByIdOutput
`;