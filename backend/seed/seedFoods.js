const connectDB = require('../config/db');
const Food = require('../models/Food');

const foods = [
  {
    foodName: "Couscous",
    short_description: "Traditional North African dish made from steamed semolina.",
    description: "Couscous is a staple food in many North African countries, often served with vegetables, meat, or fish. It symbolizes family gatherings and is enjoyed especially on Fridays after prayer.",
    cuisine: "Moroccan"
  },
  {
    foodName: "Pizza",
    short_description: "Popular Italian flatbread with various toppings.",
    description: "Originating from Naples, Italy, pizza is a baked flatbread typically topped with tomato sauce, cheese, and a variety of ingredients like meats and vegetables.",
    cuisine: "Italian"
  },
  {
    foodName: "Sushi",
    short_description: "Japanese dish featuring vinegared rice and seafood.",
    description: "Sushi combines vinegared rice with ingredients like raw fish, vegetables, and seaweed. It's an iconic part of Japanese cuisine, enjoyed globally in many styles.",
    cuisine: "Japanese"
  },
  {
    foodName: "Tajine",
    short_description: "Traditional slow-cooked Moroccan stew.",
    description: "Cooked in a conical clay pot, Tajine includes meats like lamb or chicken, vegetables, and a blend of spices. It's a hallmark of Moroccan cuisine known for its rich flavors.",
    cuisine: "Moroccan"
  },
  {
    foodName: "Tacos",
    short_description: "Traditional Mexican folded tortilla dish.",
    description: "Tacos consist of small hand-sized corn or wheat tortillas topped with a filling such as beef, pork, chicken, seafood, beans, or vegetables, and garnished with salsa, guacamole, or sour cream.",
    cuisine: "Mexican"
  }
];

const seedFoods = async () => {
    try {
        await connectDB(); // Connect to MongoDB
        await Food.insertMany(foods); // Insert sample data
        console.log('Foods seeded successfully!');
        process.exit(); // Exit after seeding
    } catch (err) {
        console.error(err);
        process.exit(1); // Exit with failure
    }
};

seedFoods();