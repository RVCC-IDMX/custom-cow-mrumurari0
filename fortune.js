// fortune.js - Custom Cow starter
// Based on HAP's Fortunate Cow — you'll refactor this to use JSON objects

import * as cowsay from "cowsay";
import fortunes from "./fortunes.json" with { type: "json" };

const args = process.argv.slice(2);
const selectedCategory = args[0];

const categories = [...new Set(fortunes.map((fortune) => fortune.category))];

if (args.includes("--list")) {
  console.log("Available categories:");
  categories.forEach((category) => {
    console.log(`- ${category}`);
  });
  process.exit(0);
}

if (args.includes("--count")) {
  console.log("Fortune counts by category:");
  categories.forEach((category) => {
    const count = fortunes.filter((fortune) => fortune.category === category).length;
    console.log(`${category}: ${count}`);
  });
  console.log(`Total: ${fortunes.length}`);
  process.exit(0);
}

// Get the current hour (0-23)
// HAP learned that getHours() uses 24-hour time, not 12-hour!
const hour = new Date().getHours();

// Choose greeting based on time of day
let greeting;
if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

let filteredFortunes = fortunes;

if (selectedCategory) {
  filteredFortunes = fortunes.filter(
    (fortune) => fortune.category.toLowerCase() === selectedCategory.toLowerCase(),
  );
}

if (filteredFortunes.length === 0) {
  console.log(`No fortunes found for category "${selectedCategory}".`);
  process.exit(1);
}

// Pick a random fortune
const randomIndex = Math.floor(Math.random() * filteredFortunes.length);
const todaysFortune = filteredFortunes[randomIndex];

// Combine greeting and fortune
const fullMessage = `${greeting}! ${todaysFortune.text}`;

// Display Tux the penguin (HAP likes penguins!)
// Notice: cowsay.say() takes an OBJECT as its parameter
let cowFile = "default";

if (todaysFortune.category === "coding") {
  cowFile = "tux";
} else if (todaysFortune.category === "motivation") {
  cowFile = "dragon";
} else if (todaysFortune.category === "life") {
  cowFile = "koala";
}

const output = cowsay.say({ text: fullMessage, f: cowFile });
console.log(output);
