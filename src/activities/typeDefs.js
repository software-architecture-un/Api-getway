export const activitiesTypeDef = `
type Activity {
    id: Int!
    name: String!
    description: String!
    user: Int!
    place: Int!

}
input ActivityInput {
  name: String!
  description: String!
  user: Int!
  place: Int!

}`;

export const activitiesQueries = `
    allActivities: [Activity]!
    activityById(id: Int!): Activity!
`;

export const activitiesMutations = `
    createActivity(activity: ActivityInput!): Activity!
    deleteActivity(id: Int!): Int
    updateActivity(id: Int!, activity: ActivityInput!): Activity!
`;
