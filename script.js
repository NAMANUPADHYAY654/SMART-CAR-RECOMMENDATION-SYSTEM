const cars = [
    {
        brand: "Tata",
        model: "Nexon EV Max",
        price: 17.5,
        fuel: "electric",
        features: ["Sunroof", "Connected Car", "Ventilated Seats"],
        image: "images/nexon-ev.jpg"
    },
    {
        brand: "Mahindra",
        model: "Thar",
        price: 15.5,
        fuel: "diesel",
        features: ["4WD", "Convertible Top", "Off-road"],
        image: "images/thar.jpg"
    },
    {
        brand: "Maruti Suzuki",
        model: "Brezza",
        price: 9.5,
        fuel: "petrol",
        features: ["Apple CarPlay", "Rear Camera", "ABS"],
        image: "images/brezza.jpg"
    }
];

function renderCars() {
    const container = document.getElementById('cars');
    container.innerHTML = cars.map(car => `
        <div class="car-card">
            <img src="${car.image}" class="car-image" alt="${car.model}">
            <div class="car-details">
                <h3>${car.brand} ${car.model}</h3>
                <div class="car-price">₹ ${(car.price * 100000).toLocaleString()}</div>
                <ul>${car.features.map(f => `<li>✓ ${f}</li>`).join('')}</ul>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderCars);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
