const mongoose = require("mongoose");
const connectDB = require('../config/db');
const Band = require('../models/Band');

const bands = [
    {
        bandName: "Opeth",
        short_description: "Swedish progressive metal band.",
        description: "Opeth is known for their unique blend of progressive metal, folk, blues, classical, and jazz influences. The band has evolved significantly over their career, transitioning from death metal to a more progressive rock sound.",
        genre: "Progressive Metal"
      },
      {
        bandName: "Pink Floyd",
        short_description: "Iconic British progressive rock band.",
        description: "Pink Floyd pioneered psychedelic and progressive rock with philosophical lyrics, sonic experimentation, and elaborate live shows. They are considered one of the most influential bands of all time.",
        genre: "Progressive Rock"
      },
      {
        bandName: "Metallica",
        short_description: "American heavy metal legends.",
        description: "Metallica is one of the 'big four' of thrash metal and achieved worldwide success with their aggressive musicianship, powerful live performances, and genre-defining albums like 'Master of Puppets'.",
        genre: "Heavy Metal"
      },
      {
        bandName: "Dream Theater",
        short_description: "Technical masters of progressive metal.",
        description: "Dream Theater is renowned for their complex compositions, deep lyrical themes, and virtuoso musicianship, making them a cornerstone of modern progressive metal.",
        genre: "Progressive Metal"
      },
      {
        bandName: "Led Zeppelin",
        short_description: "Pioneers of hard rock and heavy metal.",
        description: "Led Zeppelin fused blues with hard rock, creating legendary tracks and influencing countless bands. Their heavy guitar riffs and powerful vocals revolutionized rock music.",
        genre: "Hard Rock"
      },
      {
        bandName: "Radiohead",
        short_description: "Innovators of alternative rock.",
        description: "Radiohead pushed the boundaries of rock with their experimental soundscapes, thought-provoking lyrics, and willingness to explore genres beyond traditional rock.",
        genre: "Alternative Rock"
      },
      {
        bandName: "Tool",
        short_description: "American progressive and alternative metal band.",
        description: "Tool is celebrated for their complex song structures, visual artistry, and cryptic lyrics. Their music blends progressive rock, alternative metal, and art rock.",
        genre: "Progressive Metal"
      },
      {
        bandName: "Porcupine Tree",
        short_description: "British progressive rock band led by Steven Wilson.",
        description: "Porcupine Tree blends progressive rock with psychedelic and ambient influences, producing atmospheric albums that have won critical acclaim.",
        genre: "Progressive Rock"
      },
      {
        bandName: "Gojira",
        short_description: "French technical and progressive death metal band.",
        description: "Gojira combines technical death metal with progressive elements and environmental themes, gaining worldwide respect for their innovation and power.",
        genre: "Progressive Death Metal"
      },
      {
        bandName: "King Crimson",
        short_description: "Founders of progressive rock.",
        description: "King Crimson laid the groundwork for progressive rock with intricate compositions, innovative guitar work, and genre-defying albums like 'In the Court of the Crimson King'.",
        genre: "Progressive Rock"
      },
      {
        bandName: "Slayer",
        short_description: "Brutal and fast American thrash metal band.",
        description: "Known for their extreme speed and aggression, Slayer helped shape the thrash metal genre with albums like 'Reign in Blood' and their intense live shows.",
        genre: "Thrash Metal"
      },
      {
        bandName: "The Beatles",
        short_description: "Legendary British rock band.",
        description: "The Beatles changed the music world with their innovation, experimentation, and songwriting excellence, influencing nearly every genre that followed.",
        genre: "Rock"
      },
      {
        bandName: "Slipknot",
        short_description: "Chaotic and aggressive nu-metal band.",
        description: "Slipknot is known for their masked appearances, aggressive style, and complex percussion-driven sound, bringing a theatrical intensity to the metal scene.",
        genre: "Nu Metal"
      },
      {
        bandName: "The Rolling Stones",
        short_description: "Rock legends with blues roots.",
        description: "The Rolling Stones brought rhythm and blues to the mainstream, becoming one of the most enduring and successful rock bands in history.",
        genre: "Rock"
      },
      {
        bandName: "Muse",
        short_description: "British rock band with anthemic sounds.",
        description: "Muse combines progressive rock, alternative, and electronic elements to create massive, stadium-filling anthems and concept-driven albums.",
        genre: "Alternative Rock"
      }
];

const seedBands = async () => {
    try {
      await connectDB(); // connect to MongoDB
      await Band.insertMany(bands); // insert new data
      console.log('Bands seeded successfully!');
      process.exit(); // Exit after seeding
    } catch (err) {
      console.error(err);
      process.exit(1); // Exit with failure
    }
  };
  
  seedBands();