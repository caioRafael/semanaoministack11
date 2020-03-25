const express = require('express');
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionsController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionsController.create);

routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.list);

routes.get('/incidents', IncidentController.list);
routes.post('/incidents', IncidentController.create); 
routes.delete('/incidents/:id', IncidentController.delete); 

module.exports = routes;