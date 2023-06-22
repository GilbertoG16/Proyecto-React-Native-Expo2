import McDonalds from '../assets/restaurantesImage/McDonalds.png'
import TacoBell from '../assets/restaurantesImage/TacoBell.jpg'
import BurguerKing from '../assets/restaurantesImage/BurgerKing.png'
import Nikos from '../assets/restaurantesImage/Nikos.jpg'
import Ohtoro from '../assets/restaurantesImage/Ohtoro.jpg'
//Menú
import BigMac from '../assets/restaurantesImage/BigMac.jpg'
import Doble from '../assets/restaurantesImage/DobleCuarto.png'
import TacoBellComboCrunch from '../assets/restaurantesImage/ComboTacoBellCrunch.jpg'
import MegaCha from '../assets/restaurantesImage/MegaChader.jpg'
import Family from '../assets/restaurantesImage/FamilyKing.jpg'
import ComeNikos from '../assets/restaurantesImage/NikosMenu.jpg'
import DesayuNikos from '../assets/restaurantesImage/ComboRecargao.jpg'
import Bento from '../assets/restaurantesImage/Bento.jpg'
import Tiger from '../assets/restaurantesImage/Tigger.jpg'
//Menú


//Banner
import bannerMcDonald from '../assets/restaurantesImage/BannerMcDonald.jpg'
import bannerNikos from '../assets/restaurantesImage/BannerNikos.jpg'
import bannerTacoBell from '../assets/restaurantesImage/BannerTacobell.jpg'
import bannerBurguerKing from '../assets/restaurantesImage/BannerBurgerKing.jpg'
import bannerOhToro from '../assets/restaurantesImage/BannerOhtoro.jpg'
//Banner


const menuMcDonalds ={
    platos:[
        {id:1,nombre: "Big Mac", precio:7.50,descripcion:"Hamburguesa con doble carne 100 por ciento carne de res, salsa especial Big Mac, queso, cebolla, lechuga y pepinillos.", imagen: BigMac ,},
        {id:2,nombre: "Cuarto de Libra Con Queso", precio:7.50,descripcion:"Hamburguesa 100% carne de res, queso, ketchup, mostaza, cebolla y pepinillos", imagen: Doble ,},
    ]
};
const menuTacoBell ={
    platos:[
        {id:1, nombre: "Combo Crispy Chicken Chalupa + Crunchy Taco",descripcion:"Chalupa supreme + Burrito Combinando + Crunchy taco + Papas + Sodas", precio:4.50, imagen: TacoBellComboCrunch ,},
        {id:2, nombre: "Combo Crispy Chicken Chalupa + Crunchy Tac",descripcion:"Chalupa supreme + Burrito Combinando + Crunchy taco + Papas + Sodas", precio:4.50, imagen: TacoBellComboCrunch ,},

    ]
};
const menuBurguerKing ={
    platos:[
        {id:1, nombre: "Mega Stacker CHEDDAR", precio:4.50,descripcion:"Hamburguesa con doble carne 100 por ciento carne de res, salsa especial Big Mac, queso, cebolla, lechuga y pepinillos.", imagen: MegaCha ,},
        {id:2, nombre: "Family KING", precio:4.50,descripcion:"Hamburguesa con doble carne 100 por ciento carne de res, salsa especial Big Mac, queso, cebolla, lechuga y pepinillos.", imagen: Family ,},

    ]
};
const menuNikos ={
    platos:[
        {id:1, nombre: "Come Buco Paga Poco", precio:4.50,descripcion:"Arroz con huevo", imagen: ComeNikos ,},
        {id:2, nombre: "DesayunoCombo", precio:4.50,descripcion:"Hojaldre con salchicha + chicha de avena", imagen: DesayuNikos ,},

    ]
};

const menuOhtoro ={
    platos:[
        {id:1, nombre: "Ebi Teriyaki Set", precio:4.50,descripcion:"Delicioso arroz salteado estilo japonés, acompañado de camarones salteados en salsa teriyaki, gyosas, rollitos de primavera, tempura de vegetales, ensalada mixta, bolita de ajonjolí relleno de lotus.", imagen: Bento ,},
        {id:2, nombre: "Tigger Roll", precio:4.50,descripcion:"Salmón fresco, aguacate, queso crema, con topping de kanikama y camarones spicy, bañado en nuestras deliciosas salsas fuji y anguila, roll apanado.", imagen: Tiger ,},

    ]
};
export const datosRestaurantes = [
    {
    id : 1,
    nombre: 'McDonalds',
    ubicacion: 'Centenial',
    envio: '$2.49',
    menu: menuMcDonalds,
    imagen: McDonalds,
    banner:bannerMcDonald,
    },
    {
    id : 2,
    nombre: 'Taco Bell',
    ubicacion: 'Centenial',
    envio: '$1.20',
    menu: menuTacoBell,
    imagen: TacoBell,
    banner:bannerTacoBell,

    },
    {
    id : 3,
    nombre: 'Burguer King',
    ubicacion: 'Albrook',
    envio: '$7.20',
    menu:menuBurguerKing,
    imagen: BurguerKing,
    banner:bannerBurguerKing,
    },
     {
    id : 4,
    nombre: 'Nikos Café',
    ubicacion: 'El Dorado',
    envio: '$0.20',
    menu:menuNikos,
    imagen: Nikos,
    banner:bannerNikos,
    },
    {
    id : 5,
    nombre: 'Oh Toro Ramen & Sushi',
    ubicacion: 'El Dorado',
    envio: '$15.20',
    menu:menuOhtoro,
    imagen: Ohtoro,
    banner:bannerOhToro,
    },
];