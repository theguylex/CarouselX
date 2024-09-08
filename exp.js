// Function to toggle the visibility of the navigation menu on mobile screens
function toggleNav() {
    // Retrieve the navigation links container by its ID 'navLinks' from the HTML document
    const navLinks = document.getElementById("navLinks");
  
    // Use the classList.toggle() method to add or remove the 'active' class on the 'navLinks' element
    // When the 'active' class is present, it makes the navigation links visible (shown in the CSS)
    // When the 'active' class is not present, the navigation links will be hidden (also controlled by CSS)
    navLinks.classList.toggle("active");
    // Explanation: 'classList' is a property that contains all classes of an element, and 'toggle' is a method
    // that adds the class if it's not present and removes it if it is present.
    // 'active' here is a custom class name defined in CSS that changes the visibility of the menu.
  }
  
  // Carousel functionality to automate the image slides
  
  // Declare a variable to track the current index of the slide being shown
  let currentIndex = 0;
  
  // Set a constant value for the interval between automatic slide transitions
  // The value 3000 is in milliseconds, so this represents 3 seconds
  const autoSlideInterval = 3000;
  
  // Function to display the slide corresponding to the index passed as a parameter
  function showSlide(index) {
    // Select the carousel container by its ID 'carousel' from the HTML document
    const carousel = document.getElementById("carousel");
  
    // Retrieve all the child elements (slides) within the carousel container
    const slides = carousel.children;
  
    // Get the total number of slides available in the carousel by counting the child elements
    const totalSlides = slides.length;
  
    // Check if the index is greater than or equal to the total number of slides
    // This ensures that if we go beyond the last slide, it loops back to the first slide (index 0)
    if (index >= totalSlides) {
      // Reset the currentIndex to 0, making the first slide appear
      currentIndex = 0;
    }
    // Check if the index is less than 0, meaning the user tried to go to a negative slide
    // This ensures that if we go before the first slide, it loops to the last slide
    else if (index < 0) {
      // Set the currentIndex to the last slide, so the last slide appears
      currentIndex = totalSlides - 1;
    }
    // If the index is within the valid range, simply update the currentIndex to the given index
    else {
      currentIndex = index;
    }
  
    // Calculate the offset for the translation based on the currentIndex
    // The carousel is displayed as a horizontal strip, so we translate (move) it horizontally
    // We multiply the index by 100% to shift the carousel to the correct slide
    const offset = -currentIndex * 100;
  
    // Apply a CSS transform property to the carousel container to move it horizontally
    // `translateX()` shifts the container by a certain percentage along the X-axis (horizontal axis)
    // Negative values move the container to the left, showing the appropriate slide
    carousel.style.transform = `translateX(${offset}%)`;
    // Explanation: We use template literals (``) in JavaScript to embed the offset value dynamically within
    // the CSS transform rule. The carousel slides will move left or right based on this calculation.
  }
  
  // Function to move to the next slide in the carousel
  function nextSlide() {
    // Call the showSlide() function with the currentIndex incremented by 1
    // This will move the carousel to the next slide
    showSlide(currentIndex + 1);
    // Explanation: 'currentIndex' is the current position in the slide.
    // By adding 1 to it, we move to the next slide, and the 'showSlide' function will handle boundary checks.
  }
  
  // Function to move to the previous slide in the carousel
  function prevSlide() {
    // Call the showSlide() function with the currentIndex decremented by 1
    // This will move the carousel to the previous slide
    showSlide(currentIndex - 1);
    // Explanation: 'currentIndex' is the current position in the slide.
    // By subtracting 1 from it, we move to the previous slide, and the 'showSlide' function will handle boundary checks.
  }
  
  // Function to automatically move to the next slide after a set interval
  function autoSlide() {
    // Call the nextSlide() function to move to the next slide
    nextSlide();
  
    // Set a timer using the setTimeout() function to call autoSlide() again after the specified interval
    // This creates a loop that continuously moves the carousel to the next slide every 3 seconds (3000 milliseconds)
    setTimeout(autoSlide, autoSlideInterval);
    // Explanation: 'setTimeout' is a built-in JavaScript function that schedules a function to be called
    // after a specified delay. Here, we're using it to schedule 'autoSlide' after every 3 seconds.
  }
  
  // Event listener to run certain code when the HTML document has fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Initially show the first slide when the page loads by calling showSlide() with index 0
    showSlide(0);
  
    // Start the automatic slide rotation by calling autoSlide() for the first time
    setTimeout(autoSlide, autoSlideInterval);
    // Explanation: 'DOMContentLoaded' is an event that triggers when the initial HTML document
    // has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
    // By placing 'showSlide(0)' and 'autoSlide' here, we ensure the carousel starts automatically once the page is ready.
  });
  