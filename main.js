// Collaboration Features

// Trip Sharing: Generate a shareable link for the trip
function shareTrip() {
    const tripDetails = {
      destination: document.getElementById("destination").value,
      duration: document.getElementById("duration").value,
    };
    
    if (tripDetails.destination && tripDetails.duration) {
      const tripLink = `http://example.com/share-trip?destination=${tripDetails.destination}&duration=${tripDetails.duration}`;
      alert(`Your trip can be shared using the link: ${tripLink}`);
      // Optionally, save trip details in a cloud backend for real sharing (e.g., Firebase, AWS)
    } else {
      alert("Please complete the trip details before sharing.");
    }
  }
  
  // Plan Group Trip: Basic simulation of planning a group trip (you could use Firebase or backend storage for real-time updates)
  function planGroupTrip() {
    const groupTrip = {
      destination: document.getElementById("destination").value,
      duration: document.getElementById("duration").value,
      members: ["John", "Jane", "Ayana"], // Example of group members (could be dynamically added)
    };
    
    if (groupTrip.destination && groupTrip.duration) {
      alert(`Planning group trip to ${groupTrip.destination} for ${groupTrip.duration} days with: ${groupTrip.members.join(', ')}`);
    } else {
      alert("Please complete the trip details before planning the group trip.");
    }
  }
  
  // Invite Friends: Sending trip details via email (simulating with a prompt)
  function inviteFriends() {
    const tripDetails = {
      destination: document.getElementById("destination").value,
      duration: document.getElementById("duration").value,
    };
    
    const friendsEmails = prompt("Enter the email addresses of friends (comma separated):");
    
    if (friendsEmails && tripDetails.destination && tripDetails.duration) {
      alert(`Inviting friends: ${friendsEmails} to join the trip to ${tripDetails.destination} for ${tripDetails.duration} days.`);
      // You can send an actual email using an email API (like SendGrid, Mailgun, or SES)
    } else {
      alert("Please fill in the trip details and enter at least one email.");
    }
  }
  
  // Additional Functionalities
  
  // Discover Events: Use Eventbrite API or similar service (for simplicity, using a placeholder)
  function discoverEvents() {
    const location = prompt("Enter the city or location to discover events:");
    if (location) {
      alert(`Discovering events in ${location}...`);
      // Use an event discovery API like Eventbrite
      // Example: Use the Eventbrite API to fetch events based on the location
    } else {
      alert("Please provide a location to discover events.");
    }
  }
  
  // Recommend Restaurants: Use Yelp API or a similar service
  function recommendRestaurants() {
    const location = prompt("Enter your location to find restaurants:");
    if (location) {
      alert(`Recommending restaurants in ${location}...`);
      // Use the Yelp API to recommend restaurants
      // Example: Yelp API search based on location
    } else {
      alert("Please provide a location to recommend restaurants.");
    }
  }
  
  // Provide Cultural Insights: Simple placeholder for now
  function provideCulturalInsights() {
    const destination = document.getElementById("destination").value;
    if (destination) {
      alert(`Providing cultural insights for ${destination}...`);
      // You can integrate APIs that provide cultural information based on the destination (e.g., Wikipedia, local travel guides)
    } else {
      alert("Please enter a destination to get cultural insights.");
    }
  }
  
  // Translate Emergency Phrases: Placeholder for translation of emergency phrases
  function translateEmergencyPhrases() {
    const phrase = prompt("Enter emergency phrase to translate:");
    if (phrase) {
      alert(`Translating emergency phrase: "${phrase}"...`);
      // Example: Use Google Translate API to translate the emergency phrase into a selected language
    } else {
      alert("Please enter a phrase to translate.");
    }
  }
  
  // Currency Conversion: Use a currency conversion API (e.g., Open Exchange Rates or Currency Layer)
  function convertCurrency() {
    const amount = prompt("Enter amount to convert:");
    const fromCurrency = prompt("Enter from currency (e.g., USD):");
    const toCurrency = prompt("Enter to currency (e.g., EUR):");
    if (amount && fromCurrency && toCurrency) {
      alert(`Converting ${amount} ${fromCurrency} to ${toCurrency}...`);
      // You can use an API for real-time currency conversion here
      // Example: Fetch conversion rates from an API like Open Exchange Rates
    } else {
      alert("Please provide all conversion details.");
    }
  }
  
  // Guide Transportation: Placeholder for transportation guides
  function guideTransportation() {
    const location = prompt("Enter your location for transportation guide:");
    if (location) {
      alert(`Fetching transportation options for ${location}...`);
      // Use Google Maps API or a similar API for transportation details
      // Example: Google Maps API to get directions or public transport options
    } else {
      alert("Please provide a location to fetch transportation options.");
    }
  }
// Intersection Observer to trigger animation when elements come into view
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.image-container img, section');  // Select both images and sections
  
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // Trigger animation when 50% of the element is in view
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.tagName === 'IMG') {
            entry.target.classList.add('in-view-img'); // Add class to animate image
          } else {
            entry.target.classList.add('in-view'); // Add class to animate text or box
          }
          observer.unobserve(entry.target); // Stop observing once the element is in view
        }
      });
    }, observerOptions);
  
    elements.forEach(element => observer.observe(element)); // Observe each element
  });
    // Scroll Animation Logic
document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
  
    const elementInView = (el, offset = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
    };
  
    const displayScrollElement = (element) => {
      element.classList.add('visible');
    };
  
    const hideScrollElement = (element) => {
      element.classList.remove('visible');
    };
  
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };
  
    window.addEventListener('scroll', handleScrollAnimation);
  
    // Initial check
    handleScrollAnimation();
  });
  