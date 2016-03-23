'use strict'

module.exports = function (api, models, _) {

  api

    .get(`/`, findAllPosts)

  async function findAllPosts(req, res, next) {
    let posts = await models.Posts.find()
    res.send(posts)
  }

}
