module.exports = (apiRootUrl,) => ({
  id: 'delete post 1',
  main: {
    method: 'delete',
    url: apiRootUrl + '/posts/1',
  },
  post: [ '^status-2xx', ],
});
