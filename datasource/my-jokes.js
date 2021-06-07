const { DataSource } = require("apollo-datasource");
const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

class myJokesAPI extends DataSource {
  constructor() {
    super();
    this.baseDir = path.join(__dirname, "/../data/");
  }

  initialized(config) {}

  async addMyJoke(joke) {
    const data = await fs.readFile(this.baseDir + "jokes.json", "utf8");

    const parsedData = JSON.parse(data) || [];

    const newJoke = { ...joke, id: uuidv4() };

    parsedData.push(newJoke);

    await fs.writeFile(
      this.baseDir + "jokes.json",
      JSON.stringify(parsedData),
      "utf-8"
    );

    return newJoke;
  }

  async editMyJoke(joke) {
    const { id } = joke;
    const data = await fs.readFile(this.baseDir + "jokes.json", "utf8");
    const parsedData = JSON.parse(data) || [];
    let edittedJoke = parsedData.find((joke) => joke.id === id);
    const edittedJokeIdx = parsedData.findIndex((joke) => joke.id === id);
    edittedJoke = { ...edittedJoke, ...joke };
    parsedData[edittedJokeIdx] = edittedJoke;

    await fs.writeFile(
      this.baseDir + "jokes.json",
      JSON.stringify(parsedData),
      "utf-8"
    );

    return edittedJoke;
  }

  async getMyJokes() {
    const data = await fs.readFile(this.baseDir + "jokes.json", "utf8");

    const parsedData = JSON.parse(data) || [];

    return parsedData;
  }

  async getMyJoke(id) {
    const data = await fs.readFile(this.baseDir + "jokes.json", "utf8");
    const parsedData = JSON.parse(data) || [];

    return parsedData.find((joke) => joke.id === id);
  }
}

module.exports = myJokesAPI;
