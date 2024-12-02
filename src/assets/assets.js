// Importing images and icons
import galleryFive from './galleryFive.png';
import galleryFour from './galleryFour.png';
import galleryOne from './galleryOne.png';
import gallerySix from './gallerySix.png';
import galleryThree from './galleryThree.png';
import galleryTwo from './galleryTwo.png';
import openingQuote from './openingQuote.svg'
import closingQuote from './closingQuote.svg'
import githubIcon from './Github.png';

import image2 from './image 2.png';
import image6 from './image 6.png';
import image8 from './image 8.png';
import image9 from './image 9.png';
import image1 from './image-1.png';
import image from './image.png';

import carouselOne from './carouselOne.png';
import carouselTwo from './carouselTwo.png';
import carouselThree from './carouselThree.png';
import carouselFour from './carouselFour.png';
import carouselFive from './carouselFive.png';
import carouselSix from './carouselSix.png';
import carouselSeven from './carouselSeven.png';
import carouselEight from './carouselEight.png';
import carouselNine from './carouselNine.png';

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
import itemCard from './item-card.png'
import emGranola from './emGranola.png';
import emRaspberry from './emRasberry.png';
import emStrawberry from './emStrawbwerry.png';
import emVanilla from './emVanilla.png';
import emberrycake from './emberrycake.png';
import chocoCake from './chocoCake.png';
import introPicture from './Rectangle 34.png'
import facebookIcon from './Facebook.png';
import fpbread1 from './fpbread1.png';
import fpbread2 from './fpbread2.png';
import fpbread3 from './fpbread3.png';
import fpbread4 from './fpbread4.png';
import fpbread5 from './fpbread5.png';
import fpbread6 from './fpbread6.png';
import profilepic from './Ellipse 1.png'

import pastelDeNata from './Pastel De Nata.svg';
import pinterestIcon from './pintrest.png';
import starIcon from './Star.svg';
import toastIcon from './Toast.svg';
import whatsappIcon from './whatsapp.png';
import doubleChocolate from './double_chocolate_cake.svg';
import croissant from './Croissant.svg';
import cupcake from './Cupcake.svg'


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
  itemCard,
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
  
  

export const bakeryGallery = [
    {
      name: "Chocolate Cake",
      description: "A rich and moist chocolate cake topped with creamy chocolate ganache.",
      price: 20.99,
      image: galleryOne,
    },
    {
      name: "Vanilla Cupcakes",
      description: "Delicious vanilla cupcakes topped with buttercream frosting.",
      price: 15.99,
      image: galleryTwo,
    },
    {
      name: "Cinnamon Rolls",
      description: "Soft and fluffy cinnamon rolls drizzled with sweet glaze.",
      price: 12.99,
      image: galleryThree,
    },
    {
      name: "Fruit Tart",
      description: "A crispy tart shell filled with custard and topped with fresh seasonal fruits.",
      price: 18.99,
      image: galleryFour,
    },
    {
      name: "Croissant",
      description: "A flaky and buttery French pastry perfect for breakfast or a snack.",
      price: 9.99,
      image: galleryFive,
    },
    {
      name: "Macarons",
      description: "Colorful almond-based cookies with a variety of delicious fillings.",
      price: 25.99,
      image: gallerySix,
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


export const bakery_items = [
    {
        _id: "1",
        name: "Chocolate Croissant",
        image: croissant,
        price: 5,
        description: "Flaky and buttery croissant filled with rich chocolate.",
        category: "Pastry"
    },
    {
        _id: "2",
        name: "Vanilla Cupcake",
        image: cupcake,
        price: 3,
        description: "Soft and fluffy cupcake topped with creamy vanilla frosting.",
        category: "Cupcake"
    },
    {
        _id: "3",
        name: "Double Chocolate Muffin",
        image: doubleChocolate,
        price: 4,
        description: "Decadent muffin packed with chocolate chunks and cocoa.",
        category: "Muffin"
    },
    {
        _id: "4",
        name: "Berry Cheesecake",
        image: emberrycake,
        price: 8,
        description: "Creamy cheesecake topped with fresh berry compote.",
        category: "Cake"
    },
    {
        _id: "5",
        name: "Granola Bread",
        image: emGranola,
        price: 6,
        description: "Healthy whole-grain bread with crunchy granola topping.",
        category: "Bread"
    },
    {
        _id: "6",
        name: "Raspberry Tart",
        image: emRaspberry,
        price: 7,
        description: "Sweet and tangy tart with a buttery crust and raspberry filling.",
        category: "Pastry"
    },
    {
        _id: "7",
        name: "Vanilla Macarons",
        image: emVanilla,
        price: 10,
        description: "Delicate almond-based cookies with vanilla buttercream filling.",
        category: "Cookie"
    },
    {
        _id: "8",
        name: "Strawberry Shortcake",
        image: emStrawberry,
        price: 9,
        description: "Classic dessert with layers of shortcake, strawberries, and cream.",
        category: "Cake"
    },
    {
        _id: "9",
        name: "Rustic Sourdough Bread",
        image: fpbread1,
        price: 5,
        description: "Artisan sourdough bread with a crisp crust and soft center.",
        category: "Bread"
    },
    {
        _id: "10",
        name: "Butter Croissant",
        image: fpbread2,
        price: 4,
        description: "Golden and buttery croissant, perfect for breakfast.",
        category: "Pastry"
    },
    {
        _id: "11",
        name: "Chocolate Chip Cookies",
        image: fpbread3,
        price: 3,
        description: "Classic cookies loaded with gooey chocolate chips.",
        category: "Cookie"
    },
    {
        _id: "12",
        name: "Pastel de Nata",
        image: pastelDeNata,
        price: 5,
        description: "Traditional Portuguese custard tart with a flaky crust.",
        category: "Pastry"
    }
];
