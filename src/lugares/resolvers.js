import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allLugares: (_) =>
			getRequest(`${URL}`, 'GET'),
		lugarById: (_, { _id }) =>
			generalRequest(`${URL}/${_id}/`, 'GET'),

	},
	Mutation: {
		createLugar: (_, { lugar}) =>
			generalRequest(`${URL}/`, 'POST', lugar),
		deleteLugar: (_, { _id, lugar }) =>
			generalRequest(`${URL}/${_id}/`, 'PUT', lugar),
		updateLugar: (_, { _id }) =>
			generalRequest(`${URL}/${_id}/`, 'DELETE'),
	}
};

export default resolvers;
