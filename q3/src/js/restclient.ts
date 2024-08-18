const HOME_URL = 'http://localhost:3000/homes'
import HomeInterface from './models/Home.interface'

export async function getAllHomes() {
    try {
        const response = await fetch(HOME_URL);

        if (!response.ok) throw new Error(`Unable to get all homes: ${response.status} ${response.statusText}`)

        return response.json()
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getHome(id: number) {
    try {
        const response = await fetch(`${HOME_URL}/${id}`)

        if (!response.ok) throw new Error(`Unable to get home: ${response.status} ${response.statusText}`)

        return response.json()
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getAllNotSold() {
    try {
        const response = await fetch(`${HOME_URL}?sold=0`)

        if (!response.ok) throw new Error(`Unable to get all homes: ${response.status} ${response.statusText}`)

        return response.json()
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function sellHome(id: number, price: number) {
    try {
        const home = await getHome(id) as HomeInterface;

        home.price = price;
        home.sold = true;

        const response = await fetch(`${HOME_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(home)
        })
        if (!response.ok) throw new Error(`Unable to update home: ${response.status} ${response.statusText}`)

        return response.json()
    } catch (error) {
        console.log(error);
        throw error;
    }
}
