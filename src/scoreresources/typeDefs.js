export const scoreresourcesTypeDef = `
type Scoreresource {
    _id: Int
    name: String
    description: String
    latitude: Float
    longitude: Float
    user_id: Int
}

input ScoreresourceInput {
  name: String
  description: String
  latitude: Float!
  longitude: Float!
  user_id: Int!
}
type LugarResponse {
    content: Scoreresource
    message: String!
    status: Int!
} 
type LugaresResponse {
    content: [Scoreresource]
    message: String!
    status: Int!
} 
`;

export const scoreresourcesQueries = `
    allScoreResources: LugaresResponse!
    scoreresourceById(_id: Int!): LugarResponse!
    scoreresourceByuser(user_id: Int!): LugaresResponse!
`;

export const scoreresourcesMutations = `
    createScoreResource(scoreresource: ScoreresourceInput!): LugarResponse!
    deleteScoreResource(_id: Int!): LugarResponse!
    updateScoreResource(_id: Int!, scoreresource: ScoreresourceInput!): LugarResponse!
`;
