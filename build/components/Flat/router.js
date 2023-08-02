"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../../lib/helper");
const Controller_1 = require("./Controller");
const express_1 = require("express");
const schema_1 = require("./schema");
const middleware_1 = require("../../lib/middleware");
const router = (0, express_1.Router)();
const { ErrorHandler } = helper_1.ResponseHandler;
router.put('/update', middleware_1.Middleware.Authenticate(['LANDLORD', 'REALESTATE']), ErrorHandler(Controller_1.FlatController.update));
router.put('/remove_tenant/:id', middleware_1.Middleware.Authenticate(['LANDLORD', 'REALESTATE']), ErrorHandler(Controller_1.FlatController.removeTenant));
router.get('/myFlat', middleware_1.Middleware.Authenticate(['LANDLORD', 'REALESTATE']), ErrorHandler(Controller_1.FlatController.read));
router.post('/', (0, schema_1.flatSchema)(), ErrorHandler(Controller_1.FlatController.create));
router.post('/assign_service', middleware_1.Middleware.Authenticate(['LANDLORD', 'REALESTATE']), ErrorHandler(Controller_1.FlatController.AssignService));
exports.default = router;