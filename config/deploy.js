module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'embercodecamp',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
