export const scoreresourcesTypeDef = `
type Scoreresource {
    _id: String!
    name: String!
    description: String!
    adress: String!
    grade: Int!
    visit: Int!
}

input ScoreresourceInput {
    name: String!
    description: String!
    adress: String!
    grade: Int!
    visit: Int!
} `;

export const scoreresourcesQueries = `
    allScoreResources: [Scoreresource]!
    scoreresourceById(_id: String!): Scoreresource!
`;

export const scoreresourcesMutations = `
    createScoreResource(scoreresource: ScoreresourceInput!): Scoreresource!
    deleteScoreResource(_id: String!): Int
    updateScoreResource(_id: String!, scoreresource: ScoreresourceInput!): Scoreresource!
`;
