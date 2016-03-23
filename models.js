import mongorito from 'mongorito'

import { Model } from 'mongorito'

mongorito.connect('localhost/blog')

class Posts extends Model {}

module.exports = {
	Posts: Posts
}
