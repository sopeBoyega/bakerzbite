// Image imports
import croissant from './Croissant.svg';
import cupcake from './Cupcake.svg';
import doubleChocolate from './Double Chocolate.svg';
import emberrycake from './emberrycake.png';
import emChocolate from './emChocolate.png';
import emGranola from './emGranola.png';
import emRaspberry from './emRaspberry.png';
import emStrawberry from './emStrawberry.png';
import emVanilla from './emVanilla.png';
import facebookIcon from './facebook.png';
import fpbread1 from './fpbread1.png';
import fpbread2 from './fpbread2.png';
import fpbread3 from './fpbread3.png';
import fpbread4 from './fpbread4.png';
import fpbread5 from './fpbread5.png';
import fpbread6 from './fpbread6.png';
import header from './header.png';
import instagramIcon from './instagram.png';
import pastelDeNata from './Pastel De Nata.svg';
import pinterestIcon from './pintrest.png';
import starIcon from './Star.svg';
import toast from './Toast.svg';
import whatsappIcon from './whatsapp.png';



// Exporting assets
export const assets = {
  croissant,
  cupcake,
  doubleChocolate,
  facebookIcon,
  header,
  instagramIcon,
  pastelDeNata,
  pinterestIcon,
  starIcon,
  toast,
  whatsappIcon,
};


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
