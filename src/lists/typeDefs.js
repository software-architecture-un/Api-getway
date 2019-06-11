export const listsTypeDef = `
type List {
    id: Int!
    id_user: Int!
    name: String!
    comment: String!
    estimatedDate: String!
}
input ListInput {
    id_user: Int!
    name: String!
    comment: String!
    estimatedDate: String!
}
type Place {
    id_place: Int!
    id_list: Int!
}
input PlaceInput {
    id_list: Int!
    id_place: Int!
}
type ListResponse {
    content: List!
    message: String!
}
type ListsResponse {
    content: [List]!
    message: String!
}
type PlaceResponse {
    content: Place!
    message: String!
}
type PlacesResponse {
    content: [Place]!
    message: String!
}
type ListWithPlaces {
    id: Int!
    id_user: Int!
    name: String!
    comment: String!
    estimatedDate: String!
    places: [Place]!
}
type ListWithPlacesResponse {
    content: ListWithPlaces!
    message: String!
}`;

export const listsQueries = `
    listById(id: Int!): ListResponse!
    placeById(id: Int!): PlaceResponse!
    listsByUserId(id: Int!): ListsResponse!
    placesByListId(id: Int!): PlacesResponse!
    listWhitPlacesByListId(id: Int!): ListWithPlacesResponse!
`;

export const listsMutations = `
    createList(list: ListInput!): ListResponse!
    updateList(id: Int!, list: ListInput!): ListResponse!
    deleteList(id: Int!): ListResponse!
    createPlace(place: PlaceInput!): PlaceResponse!
    updatePlace(id: Int!, place: PlaceInput!): PlaceResponse!
    deletePlace(id: Int!): PlaceResponse!
`;