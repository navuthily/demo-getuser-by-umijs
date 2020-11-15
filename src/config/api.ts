const methods = {
    get: 'get',
    post: 'post',
    put: 'put',
    patch: 'patch',
  };
  
  export default {
    methods,
    getUsers: {
      getUsers: () => ({
        url: '/users',
        method: methods.get,
      }),
    },
  };