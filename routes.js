const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

// routes.add(name, 'url', 'folder-name/file-name')

routes.add('home', '/', '/')

routes.add('login', '/auth/login', 'auth/login')
routes.add('register', '/auth/register', 'auth/register')

routes.add('products', '/products', 'products')
routes.add('edit_product', '/products/:id/edit', 'products/edit')
routes.add('create_product', '/products/create', 'products/create')

routes.add('timeline', '/pages/timeline', 'timeline/index')
routes.add('form', '/pages/form', 'form/index')
routes.add('calendar', '/pages/calendar', 'calendar/index')
routes.add('steps', '/pages/steps', 'steps/index')