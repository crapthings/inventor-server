'use strict'

import fs from 'fs'

import path from 'path'

import _ from 'lodash'

import moment from 'moment'

import async from 'async'

import restify from 'restify'

import config, {
  serverConf,
  apiConf
} from './config'

import models from './models'

const features = fs.readdirSync(path.join(__dirname, 'api', 'v1'))

const api = restify.createServer({
  name: 'inventor-server'
})

api.use(restify.authorizationParser())

api.use(function (req, res, next) {
  console.log(req.authorization, req.username)
  res.charSet('utf-8')
  next()
})

features.forEach(function (feature) {
  require(`.${apiConf.url.v1}/${feature}`)(api, models, _)
})

api.listen(serverConf.port, function () {
  console.log(`server is running at ${serverConf.port}`)
})
