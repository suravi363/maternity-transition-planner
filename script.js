
// script.js

// Function to display Home page content
function showHome() {
    document.getElementById('content').innerHTML = `
      <h2>Welcome to the Maternity Transition Planner</h2>
      <p>This planner helps you prepare for a smooth maternity transition by organizing tasks, tracking leave, and providing resources.</p>
    `;
}

// Function to display Resource Center page content
function showResourceCenter() {
    document.getElementById('content').innerHTML = `
      <h2>Resource Center</h2>
      <p>Here you can find resources for maternity leave, childcare tips, and legal information.</p>
      <ul>
        <li><a href="#" onclick="showMaternityLeaveLaws()">Maternity Leave Laws</a></li>
        <li><a href="#" onclick="showChildcareOptions()">Childcare Options</a></li>
      </ul>
    `;
}

// Function to show Maternity Leave Laws
function showMaternityLeaveLaws() {
    document.getElementById('content').innerHTML = `
      <h2>Maternity Leave Laws in India</h2>
      <p>The Maternity Benefit Act, 1961 governs maternity leave in India. Here are the key provisions:</p>
      <ul>
        <li><strong>Duration of Maternity Leave:</strong> Women are entitled to <strong>26 weeks</strong> of paid maternity leave for their first two children. For subsequent children, the leave is <strong>12 weeks</strong>.</li>
        <br><li><strong>Eligibility Criteria:</strong> A woman must have worked for at least <strong>80 days</strong> in the 12 months preceding maternity leave.</li>
        <br><li><strong>Leave for Miscarriage or Medical Termination:</strong> Women are entitled to <strong>6 weeks</strong> of paid leave in case of miscarriage or medical termination of pregnancy.</li>
        <br><li><strong>Adoption and Surrogacy:</strong> Women who adopt a child under the age of <strong>3 months</strong> or opt for surrogacy are entitled to <strong>12 weeks</strong> of maternity leave from the date of adoption or delivery.</li>
        <br><li><strong>Workplace Conditions:</strong> Employers are prohibited from dismissing or terminating a woman during her maternity leave and must provide a crèche facility for organizations with 50+ employees.</li>
        <br><li><strong>Breastfeeding Breaks:</strong> Women can take <strong>two nursing breaks</strong> of 15 minutes each during working hours for breastfeeding or expressing milk, until the child is 15 months old.</li>
        <br><li><strong>Right to Return to Work:</strong> Women have the right to return to their same position or an equivalent one after maternity leave.</li>
      </ul>
      <p>Non-compliance with the provisions can lead to penalties, including fines and imprisonment.</p>
      <br>
      <p class="underline">Links to maternity leave laws in India:</p>
      <div id="links-section">
      <ul>
        <li>
          <a href="https://www.tataaig.com/knowledge-center/group-health-insurance/maternity-leave-rules-in-india" target="_blank">
            Maternity Leave Rules in India - Tata AIG
          </a>
        </li>
        <li>
          <a href="https://www.businessnewsdaily.com/16298-maternity-leave-in-india.html" target="_blank">
            Maternity Leave in India - Business News Daily
          </a>
        </li>
        <li>
          <a href="https://www.citizensadvice.org.uk/work/your-rights/maternity-leave-and-pay/" target="_blank">
            Maternity Leave and Pay - Citizens Advice
          </a>
        </li>
        <!-- New added links -->
        <li>
          <a href="https://www.forbesindia.com/article/explainers/maternity-leave-policy/92921/1" target="_blank">
            Maternity Leave Policy - Forbes India
          </a>
        </li>
        <li>
          <a href="https://clc.gov.in/clc/acts-rules/maternity-benefit-act" target="_blank">
            Maternity Benefit Act - CLC India
          </a>
        </li>
        <li>
          <a href="https://www.onsurity.com/blog/maternity-leave-in-india/" target="_blank">
            Maternity Leave in India - Onsurity Blog
          </a>
        </li>
        <li>
          <a href="https://labour.gov.in/sites/default/files/the_maternity_benefit_act_1961_0.pdf" target="_blank">
            The Maternity Benefit Act, 1961 (PDF)
          </a>
        </li>
      </ul>
    </div>

    `;
}

// Function to show Childcare Options
function showChildcareOptions() {
    document.getElementById('content').innerHTML = `
      <h2>Childcare Options</h2>
      <p>Working parents in India have several childcare options to choose from. These options help balance work and parenting responsibilities while ensuring children receive the care and attention they need.</p>
  
      <h3>Available Childcare Options:</h3>
      <ul>
        <br><li><strong>Daycare Centers (Creches):</strong> Daycare centers provide care during working hours and offer essential services like feeding, play, and learning activities for children.</li>
        <br><li><strong>Nannies or Babysitters:</strong> Parents can hire nannies or babysitters for personalized childcare at home.</li>
        <br><li><strong>Grandparents or Relatives:</strong> Many working parents rely on family members, especially grandparents, for childcare support.</li>
        <br><li><strong>Workplace Childcare Facilities:</strong> Some companies offer daycare services for their employees, helping to reduce childcare costs and improve work-life balance.</li>
        <br><li><strong>Preschools and Playschools:</strong> Sending children to preschools or playschools can be an ideal option for early childhood education and socialization.</li>
        <br><li><strong>Online Childcare Platforms:</strong> Several online platforms connect parents with certified childcare providers, offering convenience in booking services.</li>
        <br><li><strong>Flexible Work Arrangements:</strong> Some employers offer flexible working hours or remote working options, allowing parents to manage childcare while fulfilling professional responsibilities.</li>
      </ul>
      <br>
      <p class="underline">Reference Links for Childcare Options:</p>
      <ul>
        <li><a href="https://www.sunshinepreschools.com/blog/national-creche-scheme-in-india#:~:text=Empowering%20Working%20Parents%20with%20Sunshine's%20Creche%20Facilities&text=With%20over%2030%20corporate%20in,more%20about%20our%20cr%C3%A8che%20facilities." target="_blank">National Creche Scheme in India - Sunshine Preschools</a></li>
        <li><a href="https://m.economictimes.com/news/india/how-indian-companies-are-becoming-more-childcare-friendly-for-employees/articleshow/115563274.cms" target="_blank">How Indian Companies Are Becoming More Childcare-Friendly for Employees - Economic Times</a></li>
        <li><a href="https://asbl.in/blog/creche-facility-empowering-working-parents-for-professional-and-personal-growth/" target="_blank">Creche Facility: Empowering Working Parents for Professional and Personal Growth - ASBL</a></li>
        <li><a href="https://www.sodexo.in/blog/supporting-working-parents-follow-the-guide/" target="_blank">Supporting Working Parents: Follow the Guide - Sodexo</a></li>
      </ul>
    `;
  }
  

function showLeaveTracker() {
    document.getElementById('content').innerHTML = `
      <h2>Leave Tracker</h2>
      <p>Track the number of leave days you've taken and plan your upcoming leave schedule.</p>
      <form onsubmit="submitLeaveForm(event)">
        <label for="leave-start">Leave Start Date:</label>
        <input type="date" id="leave-start" name="leave-start" />
        <label for="leave-end">Leave End Date:</label>
        <input type="date" id="leave-end" name="leave-end" />
        <button type="submit">Track Leave</button>
      </form>
    `;
}


// Function to submit the leave form
function submitLeaveForm(event) {
    event.preventDefault();
    const startDate = document.getElementById('leave-start').value;
    const endDate = document.getElementById('leave-end').value;
    
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
  
      // Calculate the difference between the start and end dates in months
      const diffTime = Math.abs(end - start); 
      const diffDays = diffTime / (1000 * 60 * 60 * 24); // Convert time difference to days
      const diffMonths = diffDays / 30; // Approximate number of months (30 days per month)
  
      if (diffMonths > 6) {
        alert("Leave duration cannot exceed 6 months.");
      } else {
        // Displaying the leave details after the form
        const leaveDetails = `Leave has been added from ${startDate} to ${endDate}.`;
  
        // Creating a new paragraph element to display the leave details
        const leaveMessage = document.createElement('p');
        leaveMessage.textContent = leaveDetails;
  
        // Appending the leave details to the content area
        document.getElementById('content').appendChild(leaveMessage);
        
        // Optionally, you can clear the form fields after submission
        document.getElementById('leave-start').value = '';
        document.getElementById('leave-end').value = '';
      }
    } else {
      alert('Please fill out both start and end dates.');
    }
  }
  

// Function to show Task Scheduler page content
function showTaskScheduler() {
    document.getElementById('content').innerHTML = `
      <h2>Task Scheduler</h2>
      <p>Organize tasks related to your maternity leave transition.</p>
      <form onsubmit="submitTaskForm(event)">
        <label for="task-name">Task Name:</label>
        <input type="text" id="task-name" name="task-name" placeholder="Enter task name" />
        <label for="task-date">Task Deadline:</label>
        <input type="date" id="task-date" name="task-date" />
        <button type="submit">Add Task</button>
      </form>
    `;
}

// Function to submit the task form
function submitTaskForm(event) {
    event.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const taskDate = document.getElementById('task-date').value;
    
    if (taskName && taskDate) {
      // Creating a new paragraph element to display the task details
      const taskDetails = `Task: ${taskName} Deadline: ${taskDate}`;
      const taskMessage = document.createElement('p');
      taskMessage.textContent = taskDetails;
  
      // Appending the new task message below the form
      document.getElementById('content').appendChild(taskMessage);
      
      // Optionally, you can clear the form fields after submission
      document.getElementById('task-name').value = '';
      document.getElementById('task-date').value = '';
    } else {
      alert('Please fill out both task name and deadline.');
    }
  }
 


 //login.js
  // Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
  const loginContainer = document.getElementById("loginContainer");
  const contentSection = document.getElementById("content");
  
  // Show login page initially
  loginContainer.style.display = 'block'; // Show login page
  contentSection.style.display = 'none';  // Hide main content

  // Handle the "Login" navigation link click
  const loginLink = document.querySelector("a[onclick='showLoginPage()']");
  loginLink.addEventListener("click", function() {
    showLoginPage();
  });
});

// Show login page and hide main content
function showLoginPage() {
  const loginContainer = document.getElementById("loginContainer");
  const contentSection = document.getElementById("content");

  // Hide main content and show login container
  contentSection.style.display = 'none';  // Hide main content
  loginContainer.style.display = 'block'; // Show login page
}

// Optionally, you can define a function to hide the login page and show the main content
function hideLoginPage() {
  const loginContainer = document.getElementById("loginContainer");
  const contentSection = document.getElementById("content");

  loginContainer.style.display = 'none'; // Hide login page
  contentSection.style.display = 'block'; // Show main content
}
// Handle Sign Up
function handleSignUp(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (name && email && password) {
    // Store user info in localStorage
    localStorage.setItem("username", name);
    // Redirect to homepage
    window.location.href = "homepage.html";
  }
}

// Handle Sign In
function handleSignIn(event) {
  event.preventDefault();
  const name = document.getElementById("signinName").value;
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (name && email && password) {
    // Store user info in localStorage
    localStorage.setItem("username", name);
    // Redirect to homepage
    window.location.href = "homepage.html";
  }
}

// Function to show the home page content
function showHomePage() {
  const content = document.getElementById("content");
  const username = localStorage.getItem("username");

  content.innerHTML = `
    <div class="home-container">
      <div class="welcome-image">
        <img src="images/4269116.jpg" alt="Maternity Image" />
      </div>
      <div class="welcome-text">
        <h1>Welcome, <span id="username">${username || "Guest"}</span>!</h1>
        <p>This planner helps you prepare for a smooth maternity transition by organizing tasks, tracking leave, and providing resources.</p>
      </div>
    </div>
  `;
}

showHome();
