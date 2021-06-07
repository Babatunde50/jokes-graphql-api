module.exports = {
  getMyJokes: async (parent, args, { dataSources }, info) => {
    const myJokes = await dataSources.myJokesAPI.getMyJokes();
    return myJokes;
  },
  getMyJoke: async (parent, { id }, { dataSources }, info) => {
    return await dataSources.myJokesAPI.getMyJoke(id);
  },

};
