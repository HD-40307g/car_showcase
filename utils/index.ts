const url = 'https://cars-by-api-ninjas.p.rapdapi.com/v1/cars?model=corolla';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiyzkRomp15f2vKjsnK4bKzuUzVlza',
        'X-RapidAPI-Host' : 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.log(error)
}

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiyzkRomp15f2vKjsnK4bKzuUzVlza',
        'X-RapidAPI-Host' : 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapdapi.com/v1/cars?model=corolla');
}
