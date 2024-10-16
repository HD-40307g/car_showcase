export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiyzkRomp15f2vKjsnK4bKzuUzVlza', /*Get Custom API-KEY*/
        'X-RapidAPI-Host' : 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapdapi.com/v1/cars', { headers: headers });

    const result = await response.json();
    return result;
}
