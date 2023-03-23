require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Show = require("../models/show")

// Import data to seed
const shows = [
  {
    title: "The Simpsons",
    creator: "Matt Groening",
    launched: 1989,
    genre: "comedy",
    image: "https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg",
    description: "The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield and parodies American culture and society, television, and the human condition."
  },
  {
    title: "Chainsaw man",
    creator: "Tatsuki Fujimoto",
    launched: 2022,
    genre: "shonen",
    image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/ea075b926e1073f4eb016bff8cdb434c.jpe",
    description: "Man follows the story of Denji, an impoverished young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws."
  },
  {
    title: "Tokyo Revengers",
    creator: "Ken Wakui",
    launched: "2021",
    genre: "shonen",
    image: "https://1.bp.blogspot.com/-HOAerFDnEuo/X9qdabgnHkI/AAAAAAAAEIg/LCCM4V45TyU_I-5aOAJ7Z7AGw9KVhQR8QCLcBGAsYHQ/s1000/Tokyo%2BRevengers%2BTVLaint.jpg",
    description: "Hanagaki Takemichi lives an unsatisfying life right up until his death. Waking up 12 years in the past, he reckons with the eventual fate of his friends and tries to prevent an unfortunate future. Takemichi Hanagaki is a freelancer that's reached the absolute pits of despair in his life."
  },
  {
    title: "The leyend of Vox Machina",
    creator: "Matthew Mercer",
    launched: "2022",
    genre: "comedy, fantasy",
    image: "https://media.vandalsports.com/master/1-2022/2022127144450_1.jpg",
    description: "The Legend of Vox Machina is an American adult animated fantasy television series produced by Metapigeon, Titmouse, Inc., and Amazon Studios, which premiered on Amazon Prime Video on January 28, 2022. The series is based on the first campaign of the Dungeons & Dragons web series Critical Role."
  }
]

mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .then(() => {
    return Show.deleteMany({});
  })
  .then(() => {
    return Show.create(shows);
  })
  .then((created) => {
    console.log('holiwis')
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    mongoose.connection.close()
  })