import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const endPointList = 'list';
const endPointPlace = 'place';
const endPointLists = 'lists';
const endPointPlaces = 'places';
const endPointlistAll = 'list_all';

const resolvers = {
	Query: {
		listById: (_, { id }) =>
            generalRequest(`${URL}/${endPointList}/${id}`, 'GET'),
        placeById: (_, { id }) =>
            generalRequest(`${URL}/${endPointPlace}/${id}`, 'GET'),
        listsByUserId: (_, { id }) =>
            generalRequest(`${URL}/${endPointLists}/${id}`, 'GET'),
        listWhitPlacesByListId: (_, { id }) =>
            generalRequest(`${URL}/${endPointlistAll}/${id}`, 'GET'),
        placesByListId: (_, { id }) =>
			generalRequest(`${URL}/${endPointPlaces}/${id}`, 'GET')
	},
	Mutation: {
		createList: (_, { list }) =>
			generalRequest(`${URL}/${endPointList}`, 'POST', list),
		createPlace: (_, { place }) =>
			generalRequest(`${URL}/${endPointPlace}`, 'POST', place),
		updateList: (_, { id, list }) =>
			generalRequest(`${URL}/${endPointList}/${id}`, 'PUT', list),
		updatePlace: (_, { id, place }) =>
			generalRequest(`${URL}/${endPointPlace}/${id}`, 'PUT', place),
		deleteList: (_, { id }) =>
			generalRequest(`${URL}/${endPointList}/${id}`, 'DELETE'),
		deletePlace: (_, { id }) =>
			generalRequest(`${URL}/${endPointPlace}/${id}`, 'DELETE')
	}
};

export default resolvers;