var api = require('../../support/api');
var Post = require('../../../../models/post');


describe('controller.api.post', function () {

  beforeEach(function (done) {
    Post.remove({}, done);
  });

  describe('GET /api/posts', function () {
    beforeEach(function (done) {
      var posts = [
        {body: 'post1', username: 'mcoronel'},
        {body: 'post2', username: 'mcoronel'},
        {body: 'post3', username: 'mcoronel'}
      ];
      Post.create(posts, done);
    });

    it('has 3 posts', function (done) {
      api.get('/api/posts')
      .expect(200)
      .expect(function (posts) {
        if (posts.body.length !==3) {
          return "post count should be 3";
        }
      })
      .end(done);
    });

  });
});