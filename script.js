/**
 * Initiate a pop-up that asked how the user learns
 */

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }  

// Handle pop-up logic
let prompts = [
    "transforming team communication to optimize productivity across fields",
    "unifying people in the same course but with different ideas and perspectives",
    "driving innovation and excellence across teams",
    "prioritizing team well-being in highly competitive environments",
    "making learners interdisciplinarily appraise and make judgments of their selected field",
    "exciting collaborative learners about why they are learning their selected field",
    "making people obtain the knowledge and experience to be seen as a valuable asset",
    "making teams comprehensively assess and make judgments of their selected field",
    "aligning the educational system with the evolving student needs",
    "making collaborative learners more curious about what lies beyond their fields",
    "optimizing the synergies among individuals with diverse personalities to elevate quality to new heights",
    "making entire schools holistically examine and make judgments of their selected field",
    "fitting people in specific roles that best suit them and let them thrive in",
    "letting people use reliable journal articles for free whilst still giving the researchers their fair payment",
    "empowering students to achieve their aspirations without compromising their well-being",
    "having people innovate or salvage already existing ideas, whose potential hasn't been reached yet",
    "empowering research groups across multiple sectors to drive unparalleled impact that elevates industry benchmarks",
    "transforming organizations to address the root human experiences behind society’s most pressing challenges",
    "engaging researchers in collective, extensive breakthroughs in both academia and personal development",
    "empowering students to transform their failures into stepping stones towards success",
    "ensuring the place of students with disabilities within our learning systems",
    "engaging cross-disciplinary teams to efficiently catalyze groundbreaking advancements",
    "fostering a transformative learning environment that lets students simultaneously gain depth in their respective fields as well as breadth across disciplines",
    "empowering students with learning disabilities to achieve two-way enrichment in their education"
];

// Shuffle the prompts for random order
shuffle(prompts);

let currentPromptIndex = 0;

// Function to close the pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Function to change the prompt
function changePrompt() {
    currentPromptIndex++;
    if (currentPromptIndex < prompts.length) {
        document.getElementById("popup-text").textContent = `Do you learn by ${prompts[currentPromptIndex]}?`;
    } else {
        // Close the pop-up if no more prompts are available
        closePopup();
    }
}

// Initialize the first prompt
document.getElementById("popup-text").textContent = `Do you learn by ${prompts[currentPromptIndex]}?`;

/**
 * Highlight navigation menu options when trigger word is hovered
 */

document.addEventListener("DOMContentLoaded", function() {
    // Get the span element with id 'light-up'
    const lightUpElement = document.getElementById("light-up");
    
    // Get the list items from the ul with class 'list-horizontal'
    const listItems = document.querySelectorAll(".list-horizontal li a");
    
    // Add hover event listener to the span element
    lightUpElement.addEventListener("mouseover", function() {
        listItems.forEach(function(item) {
            item.style.color = "blue";
            item.style.fontWeight = "900";
        });
    });
    
    // Reset the color when the mouse leaves the span element
    lightUpElement.addEventListener("mouseout", function() {
        listItems.forEach(function(item) {
            item.style.color = "";
            item.style.fontWeight = "";
        });
    });
});

/**
 * Dropdown definitions for collaborative learning
 */

// Initialize result mapping
const resultMap = {
    "option1_option1": "Collaborative learning is a requirement or promotion of team contributions as an essential part of human existence.",
    "option1_option2": "Collaborative learning is a way to create an output that is more than the sum of its individual parts, enhancing the essential human experience of learning.",
    "option1_option3": "Collaborative learning is a method to harness the wisdom of the crowd to enrich the essential human experience of learning.",
    "option1_option4": "Collaborative learning is an approach that seeks to improve outcomes by sharing responsibilities, ideas, and resources among team members as an essential part of human existence.",
    "option2_option1": "Collaborative learning is a requirement or promotion of team contributions in a process that creates progress through radical thinking and pushing boundaries.",
    "option2_option2": "Collaborative learning is a way to create an output that is more than the sum of its individual parts, fostering progress through radical thinking and pushing boundaries.",
    "option2_option3": "Collaborative learning is a method to harness the wisdom of the crowd, enhancing the process of creating progress through radical thinking and pushing boundaries.",
    "option2_option4": "Collaborative learning is an approach that seeks to improve outcomes by sharing responsibilities, ideas, and resources among team members, pushing boundaries and inspiring radical thinking.",
    "option3_option1": "Collaborative learning is a requirement or promotion of team contributions for achieving a deeper understanding of complicated issues.",
    "option3_option2": "Collaborative learning is a way to create an output that is more than the sum of its individual parts, thereby achieving a deeper understanding of complicated issues.",
    "option3_option3": "Collaborative learning is a method to harness the wisdom of the crowd for a deeper understanding of complicated issues.",
    "option3_option4": "Collaborative learning is an approach that seeks to improve outcomes by sharing responsibilities, ideas, and resources among team members to understand complicated issues more deeply.",
    "option4_option1": "Collaborative learning is a requirement or promotion of team contributions as a means to recognize solutions for societal problems.",
    "option4_option2": "Collaborative learning is a way to create an output that is more than the sum of its individual parts, thereby identifying solutions for societal problems.",
    "option4_option3": "Collaborative learning is a method to harness the wisdom of the crowd for identifying solutions for societal problems.",
    "option4_option4": "Collaborative learning is an approach that seeks to improve outcomes by sharing responsibilities, ideas, and resources among team members to solve societal problems."
};

// Get elements
const learningDropdown = document.getElementById('learningDropdown');
const collaborationDropdown = document.getElementById('collaborationDropdown');
const resultText = document.getElementById('resultText');

// Event listeners for dropdown changes
learningDropdown.addEventListener('change', displayResult);
collaborationDropdown.addEventListener('change', displayResult);

function displayResult() {
    const learningValue = learningDropdown.value;
    const collaborationValue = collaborationDropdown.value;

    if (learningValue && collaborationValue) {
        const key = `${learningValue}_${collaborationValue}`;
        const result = resultMap[key] || "Unknown combination";
        resultText.innerHTML = result;
    }
}


/**
 * Toggle why we care
 */

// Get references to the elements
const whyLink = document.querySelector('a[href="#why"]');
const whySection = document.getElementById('why');

// Hide the "why" section initially
whySection.style.display = 'none';

// Add a click event listener to the "Why?" link
whyLink.addEventListener('click', function (event) {
   event.preventDefault(); // Prevent the link from navigating

   // Toggle the visibility of the "why" section
   if (whySection.style.display === 'none') {
      whySection.style.display = 'block';
   } else {
      whySection.style.display = 'none';
   }
});

/**
 * Toggle so that and sucks that
 */

// Define arrays of positive and negative prompts
const positivePrompts = [
    "we can advocate for people-centric learning", 
    "we can make learning exciting", 
    "we can help incite creativity in the individual"
];
const negativePrompts = [
    "our current education system is artifact-oriented", 
    "we focus on the 'what is,' not the 'why' or the 'what if'",
    "our socioeconomic reality limits our opportunities"
    ];

// Function to change prompts and cycle through them
function changePrompts() {
    // Update the text of the spans with the current prompts
    document.getElementById("prompt_positive").textContent = positivePrompts[currentPromptIndex];
    document.getElementById("prompt_negative").textContent = negativePrompts[currentPromptIndex];

    // Increment the current prompt index and loop back to 0 if it exceeds the array length
    currentPromptIndex = (currentPromptIndex + 1) % positivePrompts.length;
}

// Attach the changePrompts function to the "Learn more" text
document.getElementById("learn_more").addEventListener("click", changePrompts);

// Initially set the prompts to the first items in the arrays
document.getElementById("prompt_positive").textContent = positivePrompts[0];
document.getElementById("prompt_negative").textContent = negativePrompts[0];

/**
 * Toggle who did we interview
 */

// Get references to the elements
const whoLink = document.querySelector('a[href="#who"]');
const whoSection = document.getElementById('who');

// Hide the "why" section initially
whoSection.style.display = 'none';

// Add a click event listener to the "Why?" link
whoLink.addEventListener('click', function (event) {
   event.preventDefault(); // Prevent the link from navigating

   // Toggle the visibility of the "why" section
   if (whoSection.style.display === 'none') {
      whoSection.style.display = 'block';
   } else {
      whoSection.style.display = 'none';
   }
});

// Get all clickable paragraphs
const clickableParagraphs = document.querySelectorAll('.clickable');

// Initialize the index of the currently visible paragraph
let currentIndex = 0;

// Function to hide all paragraphs
function hideAllParagraphs() {
  clickableParagraphs.forEach((paragraph) => {
    paragraph.style.display = 'none';
  });
}

// Function to show the next paragraph
function showNextParagraph() {
    // Hide all paragraphs
    hideAllParagraphs();
  
    // Show the next paragraph, if it exists
    if (currentIndex < clickableParagraphs.length) {
      clickableParagraphs[currentIndex].style.display = 'block';
      currentIndex++;
    }
  
    // Reset the index to cycle back to the first paragraph
    if (currentIndex >= clickableParagraphs.length) {
      currentIndex = 0;
    }
  }

// Initially, hide all paragraphs except the first one
hideAllParagraphs();
clickableParagraphs[0].style.display = 'block';

// Add a click event listener to the <div id="who"> element
const whoDiv = document.getElementById('who');
whoDiv.addEventListener('click', showNextParagraph);

/**
 * Toggle how we did associations
 */

// Get references to the elements
const howLink = document.querySelector('a[href="#how"]');
const howSection = document.getElementById('how');

// Hide the "why" section initially
howSection.style.display = 'none';

// Add a click event listener to the "Why?" link
howLink.addEventListener('click', function (event) {
   event.preventDefault(); // Prevent the link from navigating

   // Toggle the visibility of the "why" section
   if (howSection.style.display === 'none') {
      howSection.style.display = 'block';
   } else {
      howSection.style.display = 'none';
   }
});

/** 
 * Toggle convergence 
 */

document.addEventListener('DOMContentLoaded', function () {
    // Attach click event listener to the #now menu item
    document.querySelector('a[href="#now"]').addEventListener('click', function (e) {
        e.preventDefault();
        openObjectives();
    });
});

// Function to open all the objectives
function openObjectives() {
    document.getElementById('objectiveModals').style.display = 'block';
    document.getElementById('objective1').style.display = 'block';
    document.getElementById('objective2').style.display = 'block';
    document.getElementById('objective3').style.display = 'block';
}

// Function to close a specific objective
function closeObjective(objectiveId) {
    document.getElementById(objectiveId).style.display = 'none';
    // Check if all objectives are closed
    if (
        document.getElementById('objective1').style.display === 'none' &&
        document.getElementById('objective2').style.display === 'none' &&
        document.getElementById('objective3').style.display === 'none'
    ) {
        document.getElementById('objectiveModals').style.display = 'none';
    }
}