import users from './user'

const mountRoutes = (app) => {
	app.use('/users', users)
}

export default mountRoutes