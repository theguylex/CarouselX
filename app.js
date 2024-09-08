// Toggle navigation menu on mobile screens
function toggleNav() {
    //selects the navlink id from the html doc
    const navLinks = document.getElementById("navLinks");
    // Toggle the 'active' class to show/hide the navigation links
    navLinks.classList.toggle("active");
  }
  
  // Carousel functionality
  //declared variable that helps track the current index of the current slide
  let currentIndex = 0;
  //implements auto navigation through the slides with the value in milliseconds which is 3seconds
  const autoSlideInterval = 3000; // Time between slides in milliseconds
  
  // Function to show the current slide
  function showSlide(index) {
    // selecting the carousel from the html doc via id
    const carousel = document.getElementById("carousel");
    // taking the elements inside the element that has its id as "carousel"
    const slides = carousel.children;
    // getting the total slides in the carousel
    const totalSlides = slides.length;
  
    // Ensure index stays within bounds
    // this checks if the index is greater than or equal to the total number of slides
    if (index >= totalSlides) {
        // this ensures that when the slide is currently at the last and the next is clicked,
        //it goes back to the very first slide
      currentIndex = 0; // Loop back to the first slide

      // if the index is less than 0 while moving backwards, the index moves to the very last slide
    } else if (index < 0) {
      currentIndex = totalSlides - 1; // Go to the last slide if index is negative
    } else {
        // this updates the current index to the given index if in valid range
      currentIndex = index;
    }
  
    // Move the carousel to the correct slide
    // We multiply the index by 100% to shift the carousel to the correct slide
    const offset = -currentIndex * 100;
    // `translateX()` shifts the container by a certain percentage along the X-axis (horizontal axis)
    // Negative values move the container to the left, showing the appropriate slide
    carousel.style.transform = `translateX(${offset}%)`;
    // (``) used to embed the offset value in JavaScript
  }
  
  // Function to go to the next slide
  function nextSlide() {
    // This will move the carousel to the next slide by calling the showslide function
    // and incrementing by 1
    showSlide(currentIndex + 1);
  }
  
  // Function to go to the previous slide
  function prevSlide() {
    // This will move the carousel to the previous slide by calling the showslide function
    // and decrementing by 1
    showSlide(currentIndex - 1);
  }
  
  // Automatic slide change
  function autoSlide() {
    //call the nextslide function
    nextSlide(); // Automatically go to the next slide
    // Set a timer using the setTimeout() function to call autoSlide() again after the specified interval
    // This creates a loop that continuously moves the carousel to the next slide every 3 seconds (3000 milliseconds)
    setTimeout(autoSlide, autoSlideInterval); // Set the timer for the next slide
  }
  
  // Automatically start the carousel and show the first slide on page load
  document.addEventListener("DOMContentLoaded", () => {
    showSlide(0); // Show the first slide initially
    setTimeout(autoSlide, autoSlideInterval); // Start the auto-slide functionality
  });
  