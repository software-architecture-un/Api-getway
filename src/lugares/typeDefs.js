export const lugaresTypeDef = `

scalar Date

type Lugar {
  _id: String!
  name: String!
  description: String!
  adress: String!
  grade: Int!
  visit: Int
}

input LugarInput {
  name: String!
  description: String!
  adress: String!
  grade: Int!
  visit: Int!
}`;

export const lugaresQueries = `
    allLugares: [Lugar]!
    lugarById(_id: String!): Lugar!

`;

export const lugaresMutations = `
    createLugar(lugar: LugarInput!): Lugar!
    deleteLugar(_id: String!): Int
    updateLugar(_id: String!, lugar: LugarInput!): Lugar!
`;
