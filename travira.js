const destinations = [
  {
    id: 1,
    name: "Goa, India",
    image: "/TRAVIRA-25/ASSETS/Goa.jpg",
    description: "Golden beaches, nightlife, water sports, and Portuguese heritage.",
    details: "Goa, known for its pristine beaches, vibrant nightlife, and Portuguese-influenced architecture, is a perfect blend of Indian and Western cultures. Visitors can enjoy water sports, explore historic churches, indulge in delicious seafood, and experience the laid-back Goan lifestyle. Don't miss the famous Anjuna flea market and the UNESCO World Heritage sites in Old Goa."
  },
  {
    id: 2,
    name: "Rishikesh, India",
    image: "/TRAVIRA-25/ASSETS/rishi.jpg",
    description: "Yoga capital, rafting on the Ganges, serene Himalayan foothills.",
    details: "Rishikesh, the 'Yoga Capital of the World', offers a unique spiritual and adventurous experience. Nestled in the Himalayan foothills, it's famous for its yoga ashrams, adventure sports, and the sacred Ganges River. Visitors can participate in yoga and meditation classes, go white-water rafting, trek in the nearby mountains, and witness the mesmerizing Ganga Aarti at Triveni Ghat."
  },
  {
    id: 3,
    name: "Rajasthan, India",
    image: "/TRAVIRA-25/ASSETS/patrika-gate-jaipur-rajasthani-interior-elements.jpg",
    description: "Forts, palaces, deserts, vibrant culture, and camel rides.",
    details: "Rajasthan, the 'Land of Kings', is a colorful mosaic of massive forts, opulent palaces, vibrant cultures, and diverse landscapes. From the golden sands of the Thar Desert to the lush hills of the Aravallis, Rajasthan offers a royal experience. Explore the pink city of Jaipur, the blue city of Jodhpur, take a camel safari in Jaisalmer, or spot tigers in Ranthambore National Park."
  },
  {
    id: 4,
    name: "Tamil Nadu, India",
    image: "/TRAVIRA-25/ASSETS/tn.jpg",
    description: "Temples, beaches, hill stations, and Dravidian culture.",
    details: "Tamil Nadu, with its towering temples, classical arts, and rich traditions, offers a deep dive into South Indian culture. Visit the ancient Meenakshi Temple in Madurai, explore the French colonial charm of Pondicherry, relax on the beaches of Mahabalipuram, or escape to the hill station of Ooty. The state is also known for its delicious cuisine and classical Bharatanatyam dance."
  },
  {
    id: 5,
    name: "Varanasi, India",
    image: "/TRAVIRA-25/ASSETS/india-top-attractions-varanasi.jpg",
    description: "Spiritual city on the Ganges, ancient temples, and vibrant ghats.",
    details: "Varanasi, one of the world's oldest living cities, is the spiritual heart of India. Situated on the banks of the sacred Ganges, it's a place of pilgrimage for Hindus. Witness the mesmerizing Ganga Aarti at Dashashwamedh Ghat, explore ancient temples, take a boat ride at sunrise, and immerse yourself in the spiritual atmosphere. Varanasi is also famous for its silk weaving and classical music traditions."
  },
  {
    id: 6,
    name: "Darjeeling, India",
    image: "/TRAVIRA-25/ASSETS/Darjeeling-1-1.jpg",
    description: "Tea plantations, Himalayan views, and the famous toy train.",
    details: "Darjeeling, known as the 'Queen of the Hills', is famous for its tea plantations, stunning views of the Himalayas, and the UNESCO World Heritage Darjeeling Himalayan Railway. Visit tea estates, watch the sunrise over Kanchenjunga from Tiger Hill, ride the toy train, and explore the vibrant local markets. The town's colonial architecture and diverse culture add to its charm."
  }
];

const packages = [
  {
    id: 1,
    name: "Goa Beach Escape — 4 Days",
    image: "/TRAVIRA-25/ASSETS/Goa.jpg",
    description: "Relax on golden beaches, nightlife, and water sports. Hotel & breakfast included.",
    price: "Rs 9,999",
    details: "Day 1: Arrival and beach relaxation\nDay 2: Water sports and local sightseeing\nDay 3: Spice plantation visit and nightlife experience\nDay 4: Departure with memories"
  },
  {
    id: 2,
    name: "Rishikesh Adventure — 8 Days",
    image: "/TRAVIRA-25/ASSETS/rishi.jpg",
    description: "River rafting, yoga, and Ganga aarti experience. Includes camping stay.",
    price: "Rs 8,999",
    details: "Day 1-2: Arrival and introduction to yoga\nDay 3-4: White-water rafting adventure\nDay 5-6: Trekking in the Himalayas\nDay 7: Ganga Aarti and meditation\nDay 8: Departure"
  },
  {
    id: 3,
    name: "Royal Rajasthan Tour — 10 Days",
    image: "/TRAVIRA-25/ASSETS/patrika-gate-jaipur-rajasthani-interior-elements.jpg",
    description: "Forts, palaces, and desert safari across Jaipur, Jodhpur, and Udaipur.",
    price: "Rs 11,999",
    details: "Day 1-3: Jaipur - City Palace, Amber Fort, Hawa Mahal\nDay 4-6: Jodhpur - Mehrangarh Fort, blue city tour\nDay 7-9: Udaipur - Lake Palace, City Palace, boat ride\nDay 10: Departure"
  },
  {
    id: 4,
    name: "Spiritual Tamil Nadu — 5 Days",
    image: "/TRAVIRA-25/ASSETS/tn.jpg",
    description: "Temple visits in Madurai, Rameshwaram & Kanyakumari. Guided tour.",
    price: "Rs 9,999",
    details: "Day 1: Arrival in Madurai, Meenakshi Temple visit\nDay 2: Travel to Rameshwaram, temple and beach visit\nDay 3-4: Kanyakumari, sunset at the southernmost tip of India\nDay 5: Return to Madurai and departure"
  },
  {
    id: 5,
    name: "Varanasi Pilgrimage — 3 Days",
    image: "/TRAVIRA-25/ASSETS/india-top-attractions-varanasi.jpg",
    description: "Ganga aarti, boat ride, and spiritual walks in the holy city.",
    price: "Rs 7,499",
    details: "Day 1: Arrival, evening Ganga Aarti at Dashashwamedh Ghat\nDay 2: Sunrise boat ride, temple visits, and cultural walk\nDay 3: Morning yoga, final ghats visit, and departure"
  },
  {
    id: 6,
    name: "Darjeeling Hills — 8 Days",
    image: "/TRAVIRA-25/ASSETS/Darjeeling-1-1.jpg",
    description: "Tea gardens, toy train ride, and sunrise at Tiger Hill.",
    price: "Rs 10,499",
    details: "Day 1-2: Arrival and local sightseeing\nDay 3: Sunrise at Tiger Hill, visit to tea plantations\nDay 4-5: Toy train ride, visit to monasteries\nDay 6-7: Trekking and nature walks\nDay 8: Departure"
  }
];

document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('visible');

  const bookNowButtons = document.querySelectorAll('.book-now-btn');
  bookNowButtons.forEach(button => {
    button.addEventListener('click', function () {
      const destination = this.getAttribute('data-destination');
      const modalElement = this.closest('.modal');
      
      if (modalElement) {
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide();
        }
      }
      alert(`Successfully booked your trip to ${destination}! We will contact you shortly with the details.`);
    });
  });

  const loginForm = document.getElementById('loginForm');
  const loginMessage = document.getElementById('loginMessage');

  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); 

      setTimeout(() => {
        if (loginMessage) {
          loginMessage.textContent = 'Login successful! Welcome back.';
        }

        setTimeout(() => {
          const loginModalElement = document.getElementById('loginModal');
          if (loginModalElement) {
            const modalInstance = bootstrap.Modal.getInstance(loginModalElement);
            if (modalInstance) {
              modalInstance.hide();
            }
          }
          loginForm.reset();
          if (loginMessage) {
            loginMessage.textContent = '';
          }
        }, 2000);

      }, 500);
    });
  }

});

