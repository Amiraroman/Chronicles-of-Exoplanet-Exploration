document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const carousel = document.querySelector('.carousel');

    const planetData = {
        'LHS 1140b': {
            description: 'LHS 1140b is a rocky exoplanet located approximately 40 light-years from Earth in the constellation Cetus. It orbits within the habitable zone of an M-type red dwarf, making it a promising candidate for the search for extraterrestrial life. Its mass and density suggest that it is a terrestrial planet with a potentially substantial atmosphere.',
            features: [
                'Planet Type: Super-Earth',
                'Mass: Approximately 6.6 times that of Earth',
                'Orbital Period: 24.7 Earth days',
                'Habitable Zone: Yes'
            ]
        },
       
        'Kepler-186f': {
            description: 'Kepler-186f is the first Earth-sized exoplanet discovered in the habitable zone of its star. It is located about 500 light-years away in the constellation Cygnus and orbits an M-type red dwarf.',
            features: [
                'Planet Type: Earth analogue',
                'Size: Similar to Earth',
                'Orbital Period: 129.9 Earth days',
                'Habitable Zone: Yes'
            ]
        },
        'Kepler-452b': {
            description: 'Kepler-452b is known as Earth’s "older cousin". It is an exoplanet that orbits in the habitable zone of a Sun-like star about 1,400 light-years away in the constellation Cygnus.',
            features: [
                'Planet Type: Super-Earth',
                'Mass: Estimated to be 5 times that of Earth',
                'Orbital Period: 385 Earth days',
                'Habitable Zone: Yes'
            ]
        },
        'Osiris (HD 209458b)': {
            description: 'HD 209458b, nicknamed "Osiris", is a hot Jupiter-type exoplanet located 150 light-years away in the constellation Pegasus. It was the first exoplanet in which an atmosphere was detected and the first to be observed transiting its star, marking milestones in astronomy.',
            features: [
                'Planet Type: Hot Jupiter',
                'Mass: 0.69 times that of Jupiter',
                'Orbital Period: 3.5 Earth days',
                'Special Features: Loss of atmospheric mass due to proximity to its star'
            ]
        },
        'Gliese 581g': {
            description: 'Gliese 581g is a potentially habitable exoplanet that orbits the red dwarf star Gliese 581, located 20 light-years away in the constellation Libra. Its existence has been a subject of debate in the scientific community.',
            features: [
                'Planet Type: Super-Earth (hypothetical)',
                'Mass: Estimated between 3 and 4 times that of Earth',
                'Orbital Period: 30 Earth days',
                'Habitable Zone: Yes (if it exists)'
            ]
        },
        '51 Pegasi b': {
            description: '51 Pegasi b is the first exoplanet discovered orbiting a Sun-like star in 1995, inaugurating a new era in astronomy. It is located 50 light-years away in the constellation Pegasus.',
            features: [
                'Planet Type: Hot Jupiter',
                'Mass: Approximately half the mass of Jupiter',
                'Orbital Period: 4.2 Earth days',
                'Special Features: Orbits very close to its host star'
            ]
        },
        'WASP-17b': {
            description: 'WASP-17b is an exoplanet known for orbiting in the opposite direction of its star’s rotation, something unusual in planetary astronomy. It is located about 1,000 light-years away in the constellation Scorpius.',
            features: [
                'Planet Type: Puffy Jupiter',
                'Mass: Approximately half the mass of Jupiter but nearly twice the diameter',
                'Orbital Period: 3.7 Earth days',
                'Special Features: Retrograde orbit'
            ]
        }
    };

    function showSlide(index) {
        currentSlide = index;
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        centerSlide(index);
        const planetName = slides[index].querySelector('h2').innerText;
        showPlanetInfo(planetName);
    }

    function centerSlide(index) {
        const slideWidth = slides[index].offsetWidth;
        const offset = -((slideWidth + 60) * index - (carousel.offsetWidth / 2) + slideWidth / 2);
        carousel.style.transform = `translateX(${offset}px)`;
    }

    window.prevSlide = function() {
        currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
        showSlide(currentSlide);
    }


    window.nextSlide = function() {
        currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    }

    function showPlanetInfo(name) {
        const infoContainer = document.getElementById('planet-info');
        const data = planetData[name];
        if (data) {
            infoContainer.innerHTML = `
                <h2>${name}</h2>
                <p>${data.description}</p>
                <ul>
                    ${data.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            `;
        } else {
            infoContainer.innerHTML = `<p>Please select a planet.</p>`;
        }
    }

    showSlide(currentSlide);

    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            showSlide(index);
        });
    });
});
