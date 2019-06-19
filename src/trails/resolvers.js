import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const user = 'user';


const resolvers = {
	Query: {
        // OBTIENE TODAS LAS RUTAS DE LA TABLA DE DATOS
		allTrails:(_) =>
            getRequest(`${URL}`, 'GET'),

        // OBTIENE TODAS LAS RUTAS DE UN USUARIO
        findTrailsByUser:(_, {id}) =>
            getRequest(`${URL}/${user}/${id}`, 'GET'), 
       
        // OBTIENE UNA RUTA EN ESPECIFICO
        FindTrailById:(_, {id}) =>
            getRequest(`${URL}/${id}`, 'GET')
	},
	Mutation: {
        // CREA UNA NUEVA RUTA
        createTrail: (_, { trail }) =>
            generalRequest(`${URL}/${endPointList}`, 'POST', trail),
            
        // BORRA UNA RUTA EN ESPECIFICO
        DeleteTrails: (_, { id }) =>
            generalRequest(`${URL}/${id}`, 'DELETE'),

	    // BORRA TODAS LAS RUTAS DE UN USUARIO
        deleteTrailById: (_, { id }) =>
            generalRequest(`${URL}/${user}/${id}`, 'DELETE')
	}
};

export default resolvers;
