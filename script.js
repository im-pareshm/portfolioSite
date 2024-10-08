const skillsList = [
    'C#',
    'ASP.NET (.NET Core, .NET 5/6/7)',
    'ASP.NET MVC',
    'JavaScript',
    'ReactJS',
    'SQL Server',
    'Git/GitHub',
    'HTML',
    'CSS',
    'MySQL'
];

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#1E3050"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#1E3050",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

function appendSkills() {
    let elements = ''

    skillsList.forEach(item => {
        let skillElement = `<span class="skillElement">${item}</span>`
        elements = elements + skillElement
    })

    $('.skillsContainer').append(elements)
}
appendSkills()


async function getQuotes() {
     // Fetch a random quote from the Quotable API
     const response = await fetch("https://api.quotable.io/quotes/random?tags=technology&limit=1");
     const data = await response.json();
     if (response.ok) {
       // Update DOM elements
       console.log(data[0].content)
       console.log(data[0].author)
       $('#quotes-val').text(data[0].content)
       $('#author-val').text('- ' + data[0].author)
       //quote.textContent = data.content;
       //cite.textContent = data.author;
     } else {
       quote.textContent = "An error occured";
       console.log(data);
     }
}

getQuotes()






// function adjustHeight() {
//     var particlesElement = document.getElementById('particles-js');
//     particlesElement.style.height = document.documentElement.scrollHeight + 'px';
// }

// // Adjust height on load and when the window is resized or scrolled
// window.addEventListener('load', adjustHeight);
// window.addEventListener('resize', adjustHeight);
// window.addEventListener('scroll', adjustHeight);
