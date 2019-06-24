import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint, entrySignUp, entryLogin, verifyJWT, userByEmail } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const URLSIGNUP = `http://${url}:${port}/${entrySignUp}`;
const URLLOGIN = `http://${url}:${port}/${entryLogin}`;
const URLVERIFYTOKEN = `http://${url}:${port}/${verifyJWT}`;
const URLUSERBYEMAIL = `http://${url}:${port}/${userByEmail}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(URL, ''),
		userById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		userByEmail: (_, { email }) =>
			generalRequest(`${URLUSERBYEMAIL}`, 'GET', email),
	},
	Mutation: {
		signIn: (_, { user }) =>
			generalRequest(`${URLLOGIN}`, 'POST', user),
		verifyToken: (_, { jwt }) =>
			generalRequest(`${URLVERIFYTOKEN}`, 'POST', jwt),
		createUser: (_, { user }) =>
			generalRequest(`${URLSIGNUP}`, 'POST', user),
		updateUser: (_, { id, user }) =>
			generalRequest(`${URL}/${id}`, 'PATCH', user),
		updateUser2: (_, { id, user }) =>
			generalRequest(`${URL}/${id}`, 'PUT', user),
		deleteUser: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
