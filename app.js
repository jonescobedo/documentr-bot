/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.log("Yay! The app was loaded!");

  app.on("issues.opened", async (context) => {
    return context.octokit.issues.createComment(
      context.issue({ body: 'Lets document this issue!' })
    );      
  });

  app.on("pull_request.opened", async (context) => {
    return context.octokit.issues.createComment(
      context.issue({ body: 'Lets document this issue!' })
    );      
  });
};
