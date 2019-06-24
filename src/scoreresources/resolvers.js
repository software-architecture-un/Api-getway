import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const URL2= `http://${url}:${port}/scoreserviceUs`;

const resolvers = {
	Query: {
		allScoreResources: (_) =>
			getRequest(`${URL}/`, 'GET'),
		scoreresourceById: (_, { _id }) =>
			generalRequest(`${URL}/${_id}/`, 'GET'),
		scoreresourceByuser:(_,{user_id})=> 
			generalRequest(`${URL2}/${user_id}`, 'GET'),

	},
	Mutation: {
		createScoreResource: (_, { scoreresource }) =>
			generalRequest(`${URL}/`, 'POST', scoreresource),
		deleteScoreResource: (_, { _id, scoreresource }) =>
			generalRequest(`${URL}/${_id}/`, 'DELETE', scoreresource),
		// updateScoreResource: (_, { _id }) =>
		// 	generalRequest(`${URL}/${_id}`, 'PUT'  ),
		updateScoreResource: (_, { _id, scoreresource }) =>
			generalRequest(`${URL}/${_id}`, 'PUT', scoreresource),
	}
};

export default resolvers;
