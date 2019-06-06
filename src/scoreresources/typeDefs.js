export const scoreresourcesTypeDef = `
type Scoreresource {
    _id: Int!
    name: String!
    description: String!
    latitude: Float!
    longitude: Float!
    user_id: Int!
}

input ScoreresourceInput {
  
  name: String!
  description: String!
  latitude: Float!
  longitude: Float!
  user_id: Int!

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
