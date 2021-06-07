module.exports = {
  addMyJoke: async (parent, { joke }, { dataSources }, info) => {
    const newJoke = await dataSources.myJokesAPI.addMyJoke(joke);
    return newJoke;
  },
  editMyJoke: async (parent, { joke }, { dataSources }, info) => {
    const edittedJoke = await dataSources.myJokesAPI.editMyJoke(joke);
    return edittedJoke;
  },
};
