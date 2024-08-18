const HOME_URL = 'http://localhost:3000/homes'
import HomeInterface from './models/Home.interface'

// const homes = [
//     {
//         "id": "1",
//         "address": "Koningin Astridplein 1, 2018 Antwerp",
//         "photo": "/images/antwerpen1.jpg",
//         "price": 250000,
//         "sold": false
//     },
//     {
//         "id": "2",
//         "address": "Grote Markt 123, 2000 Antwerp",
//         "photo": "/images/antwerpen2.jpg",
//         "price": 350000,
//         "sold": false
//     },
//     {
//         "id": "3",
//         "address": "Meir 789, 2000 Antwerp",
//         "photo": "/images/antwerpen3.jpg",
//         "price": 450000,
//         "sold": false
//     },
//     {
//         "id": "4",
//         "address": "Scheldestraat 321, 2060 Antwerp",
//         "photo": "/images/antwerpen4.jpg",
//         "price": 550000,
//         "sold": false
//     },
//     {
//         "id": "5",
//         "address": "Groenplaats 654, 2000 Antwerp",
//         "photo": "/images/antwerpen5.jpg",
//         "price": 650000,
//         "sold": false
//     },
//     {
//         "id": "6",
//         "address": "Boulevard Leopold II 987, 2000 Antwerp",
//         "photo": "/images/antwerpen6.jpg",
//         "price": 750000,
//         "sold": false
//     },
//     {
//         "id": "7",
//         "address": "Paardenmarkt 741, 2000 Antwerp",
//         "photo": "/images/antwerpen7.jpg",
//         "price": 850000,
//         "sold": "2024-03-10T12:21:43.313Z"
//     },
//     {
//         "id": "8",
//         "address": "Eilandje 369, 2000 Antwerp",
//         "photo": "/images/antwerpen8.jpg",
//         "price": 950000,
//         "sold": false
//     },
//     {
//         "id": "9",
//         "address": "Wapper 258, 2000 Antwerp",
//         "photo": "/images/antwerpen9.jpg",
//         "price": 1050000,
//         "sold": false
//     }
// ];
// const buyers = [
//     {
//         "id": "1",
//         "naam": "Familie Beton",
//         "email": "hallo@familiebeton.be"
//     },
//     {
//         "id": "3",
//         "naam": "Familie Beton",
//         "email": "hallo@familiebeton.be",
//         "homeId": "7"
//     },
//     {
//         "id": "2",
//         "naam": "Familie Beton",
//         "email": "hallo@familiebeton.be"
//     }
// ];

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