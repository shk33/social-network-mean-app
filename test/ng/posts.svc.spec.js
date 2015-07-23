describe('posts.svc', function () {
  beforeEach(module('app'));
  var PostsSvc, $httpBackend;

  beforeEach(inject(function (_PostsSvc_, _$httpBackend_) {
    PostsSvc = _PostsSvc_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function () {
    $httpBackend.flush();
  });

  describe('#fetch', function () {
    beforeEach(function () {
      $httpBackend.expect('GET', '/api/posts')
      .respond([
        {username: 'dickeyxxx', body: 'first post'},
        {username: 'dickeyxxx', body: 'second post'}
      ]);
    });

    it('gets 2 posts', function () {
      PostsSvc.fetch().success(function (posts) {
        expect(posts).to.have.length(2);
      });
    });
  });

  describe('#create', function () {
    var myPost = {username: 'mcoronel', body: 'my post dude'};
    beforeEach(function () {
      $httpBackend.expect('POST', '/api/posts')
      .respond(
        myPost
      );
    });

    it('return the newly created post', function () {
      PostsSvc.create(myPost).success(function (post) {
        expect(post).to.be.a('object');
        expect(post.username).to.equal(myPost.username);
        expect(post.body).to.equal(myPost.body);
      });
    });
  });

});