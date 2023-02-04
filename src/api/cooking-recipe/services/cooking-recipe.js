'use strict';

/**
 * cooking-recipe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cooking-recipe.cooking-recipe');
