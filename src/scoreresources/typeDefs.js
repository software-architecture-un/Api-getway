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
    scoreresourceById(_id: Int!): Scoreresource!
    scoreresourceByuser(user_id: Int!): [Scoreresource]!
`;

export const scoreresourcesMutations = `
    createScoreResource(scoreresource: ScoreresourceInput!): Scoreresource!
    deleteScoreResource(_id: Int!): Int
    updateScoreResource(_id: Int!, scoreresource: ScoreresourceInput!): Scoreresource!
`;
