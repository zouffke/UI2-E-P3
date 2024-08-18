import * as homeClient from './restclient'
import HomeInterface from './models/Home.interface'

const select = <HTMLSelectElement>document.getElementById("huisSelect") as HTMLSelectElement;
const price = <HTMLInputElement>document.getElementById("bodInput") as HTMLInputElement;
const form = <HTMLFormElement>document.getElementById("house-bid-form") as HTMLFormElement;
const button = <HTMLButtonElement>document.getElementById("form-button") as HTMLButtonElement;

export default function init() {
    fillSelectList();
    addEventListeners();
}

async function fillSelectList() {
    const homes = await homeClient.getAllNotSold();

    select.innerHTML = homes.reduce(
        (acc: string, home: HomeInterface) => {
            return acc + `<option value="${home.id}">${home.address}</option>`
        },
        "<option></option>"
    );
}

function addEventListeners() {
    form.addEventListener("submit", event => event.preventDefault())
    button.addEventListener("click", placeBed);
}

function placeBed() {
    homeClient.sellHome(Number(select.value), Number(price.value)).then(fillSelectList);
}