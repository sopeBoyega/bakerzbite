// Importing images and icons
import openingQuote from './openingQuote.svg'
import closingQuote from './closingQuote.svg'
import githubIcon from './Github.png';


import carouselOne from './carouselOne.png';
import carouselTwo from './carouselTwo.png';
import carouselThree from './carouselThree.png';
import carouselFour from './carouselFour.png';
import carouselFive from './carouselFive.png';
import carouselSix from './carouselSix.png';
import carouselSeven from './carouselSeven.png';
import carouselEight from './carouselEight.png';
import carouselNine from './carouselNine.png';

import cakeOne from './cakeOne.png';
import cakeTwo from './cakeTwo.png';
import cakeThree from './cakeThree.png';
import cakeFour from './cakeFour.png';
import cakeFive from './cakeFive.png';
import cakeSix from './cakeSix.png';
import cakeSeven from './cakeSeven.png';
import cakeEight from './cakeEight.png';
import cakeNine from './cakeNine.png';
import cakeTen from './cakeTen.png';
import cookieOne from './cookieOne.png';
import cookieTwo from './cookieTwo.png';
import cookieThree from './cookieThree.png';
import cookieFour from './cookieFour.png';
import cookieFive from './cookieFive.png';
import pieOne from './pieOne.png';
import pieTwo from './pieTwo.png';
import pieThree from './pieThree.png';
import pieFour from './pieFour.png';
import pieFive from './pieFive.png';
import pastryOne from './pastryOne.png';
import pastryTwo from './pastryTwo.png';
import pastryThree from './pastryThree.png';
import pastryFive from './pastryFive.png';
import pastrySix from './pastrySix.png';

import instagramIcon from './Instagram.png';
import linkedinIcon from './LinkedIn.png';

import merchBag from './merchBag.png';
import merchCap from './merchCap.png';
import merchPen from './merchPen.png';
import merchShirt from './merchShirt.png';
import merchCup from './merchCup.png';

import ourProductsFive from './ourProductsFive.png';
import ourProductsOne from './ourProductsOne.png';
import ourProductsTwo from './ourProductsTwo.png';
import ourProductsFour from './ourProductsFour.png';
import ourProductsThree from './outProductsThree.png';
import chocoCake from './chocoCake.png';
import introPicture from './Rectangle 34.png'
import facebookIcon from './Facebook.png';
import profilepic from './Ellipse 1.png'

import pastelDeNata from './Pastel De Nata.svg';
import pinterestIcon from './pintrest.png';
import starIcon from './Star.svg';
import toastIcon from './Toast.svg';
import whatsappIcon from './whatsapp.png';
import doubleChocolate from './double_chocolate_cake.svg';
// eslint-disable-next-line
import croissant from './Croissant.svg';
// eslint-disable-next-line
import cupcake from './Cupcake.svg'

const randomPrice = () => (Math.random() * 50 + 10).toFixed(2); // Random price between $10 and $60
const randomDiscount = () => (Math.random() > 0.5 ? `${Math.floor(Math.random() * 30 + 10)}%` : ''); // Random discount (10-40%) or empty

// Exporting assets
export const assets ={
  doubleChocolate,
  facebookIcon,
  instagramIcon,
  pastelDeNata,
  pinterestIcon,
  starIcon,
  toastIcon,
  whatsappIcon,
  chocoCake,
  linkedinIcon,
  githubIcon,
  introPicture,
  openingQuote,
  closingQuote,
  profilepic
};

export const carousel = [
  { image: carouselOne },
  { image: carouselTwo },
  { image: carouselThree },
  { image: carouselFour },
  { image: carouselFive },
  { image: carouselSix },
  { image: carouselSeven },
  { image: carouselEight },
  { image: carouselNine },
];

// Our Merch Items
export const merchItems = [
    {
      name: "Custom Tote Bag",
      description: "Durable and stylish tote bag featuring our unique branding.",
      price: 12.99,
      image: merchBag,
    },
    {
      name: "Branded Cap",
      description: "Comfortable and adjustable cap with an embroidered logo.",
      price: 9.99,
      image: merchCap,
    },
    {
      name: "Logo Pen",
      description: "Sleek and professional pen with our company logo, perfect for everyday use.",
      price: 2.99,
      image: merchPen,
    },
    {
      name: "Graphic T-Shirt",
      description: "High-quality cotton t-shirt with an eye-catching design.",
      price: 19.99,
      image: merchShirt,
    },
    {
      name: "Branded Mug",
      description: "High-quality Cup with an eye-catching design.",
      price: 19.99,
      image: merchCup,
    },
  ];
  
  

// Our Array of Products
export const products = [
  { 
    name: 'Cake Delight', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cakeOne, 
    category: 'cake', 
    ingredients: ['Flour', 'Sugar', 'Eggs', 'Butter', 'Vanilla Extract']
  },
  { 
    name: 'Sweet Berry Cake', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cakeTwo, 
    category: 'cake', 
    ingredients: ['Flour', 'Sugar', 'Berries', 'Cream', 'Butter']
  },
  { 
    name: 'Chocolate Heaven', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cakeThree, 
    category: 'cake', 
    ingredients: ['Cocoa Powder', 'Sugar', 'Butter', 'Eggs', 'Flour']
  },
  { 
    name: 'Vanilla Swirl', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cakeFour, 
    category: 'cake', 
    ingredients: ['Vanilla Extract', 'Flour', 'Eggs', 'Milk', 'Sugar']
  },
  { 
    name: 'Layered Fantasy', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cakeFive, 
    category: 'cake', 
    ingredients: ['Whipped Cream', 'Chocolate Ganache', 'Flour', 'Eggs', 'Sugar']
  },
  { 
    name: 'Choco Burst', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cakeSix, 
    category: 'cake', 
    ingredients: ['Chocolate', 'Butter', 'Sugar', 'Flour', 'Eggs']
  },
  { 
    name: 'Fruit Topped Cake', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cakeSeven, 
    category: 'cake', 
    ingredients: ['Mixed Fruits', 'Whipped Cream', 'Flour', 'Sugar', 'Butter']
  },
  { 
    name: 'Red Velvet Love', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cakeEight, 
    category: 'cake', 
    ingredients: ['Cocoa Powder', 'Red Food Coloring', 'Butter', 'Sugar', 'Cream Cheese']
  },
  { 
    name: 'Berrylicious', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cakeNine, 
    category: 'cake', 
    ingredients: ['Mixed Berries', 'Whipped Cream', 'Flour', 'Sugar', 'Butter']
  },
  { 
    name: 'Sprinkle Joy', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cakeTen, 
    category: 'cake', 
    ingredients: ['Sprinkles', 'Buttercream Frosting', 'Flour', 'Sugar', 'Eggs']
  },
  { 
    name: 'Cookie Crunch', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cookieOne, 
    category: 'cookie', 
    ingredients: ['Chocolate Chips', 'Butter', 'Sugar', 'Flour', 'Eggs']
  },
  { 
    name: 'Double Choco Cookie', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cookieTwo, 
    category: 'cookie', 
    ingredients: ['Dark Chocolate', 'Cocoa Powder', 'Butter', 'Sugar', 'Flour']
  },
  { 
    name: 'Oatmeal Treat', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cookieThree, 
    category: 'cookie', 
    ingredients: ['Oats', 'Raisins', 'Brown Sugar', 'Butter', 'Flour']
  },
  { 
    name: 'Sugar Bliss', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cookieFour, 
    category: 'cookie', 
    ingredients: ['Sugar', 'Butter', 'Flour', 'Vanilla Extract', 'Eggs']
  },
  { 
    name: 'Choco Chip Supreme', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: cookieFive, 
    category: 'cookie', 
    ingredients: ['Chocolate Chips', 'Brown Sugar', 'Butter', 'Flour', 'Eggs']
  },
  { 
    name: 'Classic Apple Pie', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: pieOne, 
    category: 'pie', 
    ingredients: ['Apples', 'Cinnamon', 'Sugar', 'Pie Crust', 'Butter']
  },
  { 
    name: 'Berry Blast Pie', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: pieTwo, 
    category: 'pie', 
    ingredients: ['Mixed Berries', 'Sugar', 'Pie Crust', 'Butter', 'Lemon Juice']
  },
  { 
    name: 'Golden Crust Pie', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: pieThree, 
    category: 'pie', 
    ingredients: ['Pie Crust', 'Brown Sugar', 'Butter', 'Cinnamon', 'Vanilla']
  },
  { 
    name: 'Raspberry Delight Pie', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: pieFour, 
    category: 'pie', 
    ingredients: ['Raspberries', 'Sugar', 'Pie Crust', 'Cornstarch', 'Butter']
  },
  { 
    name: 'Cherry Glaze Pie', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: pieFive, 
    category: 'pie', 
    ingredients: ['Cherries', 'Sugar', 'Cornstarch', 'Pie Crust', 'Butter']
  },
  { 
    name: 'Croissant Classic', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: pastryOne, 
    category: 'pastry', 
    ingredients: ['Butter', 'Flour', 'Yeast', 'Milk', 'Salt']
  },
  { 
    name: 'Almond Danish', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: pastryTwo, 
    category: 'pastry', 
    ingredients: ['Almond Paste', 'Butter', 'Flour', 'Milk', 'Sugar']
  },
  { 
    name: 'Choco Twist', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: pastryThree, 
    category: 'pastry', 
    ingredients: ['Chocolate', 'Butter', 'Flour', 'Milk', 'Sugar']
  },
  { 
    name: 'Berry Danish', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: pastryFive, 
    category: 'pastry', 
    ingredients: ['Mixed Berries', 'Butter', 'Flour', 'Milk', 'Sugar']
  },
  { 
    name: 'Golden Croissant', 
    price: randomPrice(), 
    discount: randomDiscount(), 
    image: pastrySix, 
    category: 'pastry', 
    ingredients: ['Butter', 'Flour', 'Yeast', 'Milk', 'Sugar']
  },
];


export const productsCarousel =[
  {
    image:ourProductsOne,
    productName:"Red Velvet & Cream Cheese (500g)",
    rating:4.0,
  },
  {
    image:ourProductsTwo,
    productName:"Red Velvet & Cream Cheese (500g)",
    rating:4.0,
  },
  {
    image:ourProductsThree,
    productName:"Red Velvet & Cream Cheese (500g)",
    rating:4.0,
  },
  {
    image:ourProductsFour,
    productName:"Red Velvet & Cream Cheese (500g)",
    rating:4.0,
  },
  {
    image:ourProductsFive,
    productName:"Red Velvet & Cream Cheese (500g)",
    rating:4.0,
  },
] 


