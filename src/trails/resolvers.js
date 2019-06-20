import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const user = 'user';


const resolvers = {
	Query: {
		allTrails:(_) =>
            getRequest(URL, ''),
        findTrailsByUser:(_, {id}) =>
            generalRequest(`${URL}/${user}/${id}`, 'GET'), 
        findTrailById:(_, {id}) =>
            generalRequest(`${URL}/${id}`, 'GET')
	},
	Mutation: {
        createTrail: (_, { trail }) =>
            generalRequest(`${URL}`, 'POST', trail),
        deleteTrails: (_, {id}) =>
            generalRequest(`${URL}/${user}/${id}`, 'DELETE'),
        deleteTrailById:(_, {id}) =>
            generalRequest(`${URL}/${id}`, 'DELETE')
	}   
};

export default resolvers;
