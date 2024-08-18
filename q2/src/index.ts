import 'bootstrap/dist/css/bootstrap.css'
import * as homeClient from './js/restclient';
import HomeInterface from './js/models/Home.interface.js'
import './css/style.scss'
import {getHome} from "./js/restclient";

/** ### 2.2 GET **/
showHomes();
showHome(1);

// • Voer je Functies om alle homes op te halen hieronder
async function showHomes() {
    try {
        const homes = await homeClient.getAllHomes();
        console.log(homes)
    } catch (e) {
        console.log(e)
    }
}

// • Voer je Functies om een home met een specifieke "Id" op te halen hieronder
async function showHome(id: number) {
    try {
        const home = await homeClient.getHome(id);
        console.log(home)
    } catch (e) {
        console.log(e)
    }
}


/** ### 2.3 Filter **/
showNotSoldHomes();

async function showNotSoldHomes() {
    try {
        const homes = await homeClient.getAllNotSold();
        console.log(homes)
    } catch (e) {
        console.log(e);
    }
}

/** ### 2.4 Huis verkocht (PATCH) **/
sellHouse(5, 458000)

async function sellHouse(id: number, price: number){
    try {
        const home = await homeClient.sellHome(id, price);
        console.log(home)
    } catch (e) {
        console.log(e);
    }
}

getHome(5);