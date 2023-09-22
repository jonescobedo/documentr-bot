const { createLambdaFunction, createProbot } = require('@probot/adapter-aws-lambda-serverless');
const app = require("../../app");

const probot = createProbot();
const loadingApp = probot.load(app);

/**
 * Netlify function to handle webhook event requests from GitHub
 *
 * @param {import("@netlify/functions").HandlerEvent} event
 * @param {import("@netlify/functions").HandlerContext} context
 */
exports.handler = createLambdaFunction(app, {
  probot: createProbot(),
});