import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const consult = "consult"

const resolvers = {

    Mutation: {
        getCountFiles: (_, { username }) =>
            generalRequest(`${URL}/${consult}`, 'POST', username)
    }
};

export default resolvers;