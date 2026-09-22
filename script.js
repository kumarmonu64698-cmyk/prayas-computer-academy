// सभी Enroll Now buttons को select करना
let enrollButtons = document.querySelectorAll(".enroll-btn");

// Enrollment form को select करना
let enrollForm = document.getElementById("enrollForm");

// Course select box को select करना
let courseSelect = document.getElementById("courseSelect");

// हर Enroll Now button पर click event
enrollButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // जिस course पर click किया गया उसका नाम लेना
        let courseName = button.parentElement.querySelector("h3").textContent;

        // Course को automatically select करना
        courseSelect.value = courseName;

        // Form खोलना
        enrollForm.style.display = "flex";

    });

});

// Form बंद करना
function closeForm() {

    enrollForm.style.display = "none";

}
// Enrollment form submit
// WhatsApp number
let whatsappNumber = "919997066722";

// Enrollment form submit
let form = document.querySelector("#enrollForm form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Student details लेना
    let name = form.querySelector('input[type="text"]').value;
    let mobile = form.querySelector('input[type="tel"]').value;
    let course = document.getElementById("courseSelect").value;

    // WhatsApp message
    let message =
        "🎓 New Course Enrollment\n\n" +
        "Name: " + name + "\n" +
        "Mobile: " + mobile + "\n" +
        "Course: " + course;

    // WhatsApp link बनाना
    let whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    // WhatsApp खोलना
    window.open(whatsappURL, "_blank");

    // Form reset
    form.reset();

    enrollForm.style.display = "none";

});

// Course Details
let detailsBox = document.getElementById("detailsBox");
let detailsTitle = document.getElementById("detailsTitle");
let detailsText = document.getElementById("detailsText");

let courseSyllabus = {

    "Basic Computer": [
        "Computer Fundamentals",
        "Introduction to Windows",
        "MS Word Basics",
        "MS Excel Basics",
        "PowerPoint",
        "Internet and Email",
        "Typing Practice"
    ],

    "DCA": [
        "Computer Fundamentals",
        "MS Word and MS Excel",
        "PowerPoint",
        "Internet and Email",
        "HTML and CSS Basics",
        "Database Introduction",
        "Practical Projects"
    ],

    "Tally": [
        "Introduction to Accounting",
        "Tally Prime Installation",
        "Company Creation",
        "Ledger and Groups",
        "Voucher Entry",
        "Purchase and Sales Entry",
        "GST",
        "Inventory Management",
        "Bank Reconciliation",
        "Profit and Loss Report",
        "Balance Sheet",
        "Practical Accounting Projects"
    ],

    "Advanced Excel": [
        "Excel Fundamentals",
        "Advanced Formulas",
        "IF, SUMIF and COUNTIF",
        "VLOOKUP and XLOOKUP",
        "Pivot Tables",
        "Charts and Dashboards",
        "Data Validation",
        "Conditional Formatting",
        "Excel Automation Basics",
        "Practical Projects"
    ],

    "CCC": [
        "Computer Fundamentals",
        "Operating System",
        "Word Processing",
        "Spreadsheet",
        "Presentation",
        "Internet and Email",
        "Digital Financial Services",
        "Cyber Security Basics",
        "Practical Computer Tasks"
    ],

    "O Level": [
        "Computer Fundamentals",
        "IT Tools and Network Basics",
        "Web Designing",
        "HTML and CSS",
        "JavaScript Basics",
        "Python Programming",
        "Internet Technology",
        "Database Management",
        "Practical Lab Work",
        "Final Project"
    ],

    "AI": [
        "Introduction to Artificial Intelligence",
        "Machine Learning Basics",
        "Generative AI",
        "Prompt Engineering",
        "AI Tools and Applications",
        "Python for AI",
        "Chatbot Development Basics",
        "AI Ethics and Safety",
        "Practical AI Projects"
    ],

    "MS Office": [
        "MS Word",
        "MS Excel",
        "MS PowerPoint",
        "MS Access Basics",
        "Document Formatting",
        "Excel Formulas",
        "Professional Presentations",
        "Office Productivity",
        "Practical Office Projects"
    ],

    "Web Designing": [
        "Introduction to Web Designing",
        "HTML Fundamentals",
        "HTML Forms and Tables",
        "CSS Fundamentals",
        "Colors and Typography",
        "Flexbox and Grid",
        "Responsive Web Design",
        "JavaScript Basics",
        "Website Hosting Basics",
        "Practical Website Projects"
    ],

    "Python": [
        "Introduction to Python",
        "Python Installation and VS Code",
        "Variables and Data Types",
        "Operators",
        "Conditional Statements",
        "Loops (for and while)",
        "Lists, Tuples and Dictionaries",
        "Functions",
        "File Handling",
        "Exception Handling",
        "Object-Oriented Programming Basics",
        "Mini Projects"
    ]

};

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("details-btn")) {

        let course = event.target.closest(".course");

        let courseName = course.querySelector("h3").textContent.trim();
        console.log("Course Name:", courseName);
        let description = course.querySelector("p").textContent;
        let price = course.querySelector("h4").textContent;
        let duration = course.querySelector("span").textContent;

        let syllabus = courseSyllabus[courseName] || [
            "Course syllabus coming soon"
        ];

        detailsTitle.textContent = courseName;

        detailsText.innerHTML = `
            <p>${description}</p>
            <p><b>${price}</b> | ${duration}</p>

            <h3>Course Syllabus</h3>

            <ul>
                ${syllabus.map(function (topic) {
            return `<li>${topic}</li>`;
        }).join("")}
            </ul>

            <h3>Course Benefits</h3>

            <p>
                Develop practical computer skills
                for education and office work.
            </p>
        `;

        detailsBox.style.display = "flex";
    }
});

function closeDetails() {
    detailsBox.style.display = "none";
}
let detailsEnrollButton = document.querySelector(".enroll-details-btn");

detailsEnrollButton.addEventListener("click", function () {

    let selectedCourse = detailsTitle.textContent;

    courseSelect.value = selectedCourse;

    detailsBox.style.display = "none";

    enrollForm.style.display = "flex";

});
let detailsCloseButton = document.querySelector(".details-close");

detailsCloseButton.addEventListener("click", function () {
    detailsBox.style.display = "none";
});

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        let target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});// Course Search Function

let courseSearch = document.getElementById("courseSearch");
let courses = document.querySelectorAll(".course");

let noCourseMessage = document.createElement("p");
noCourseMessage.textContent = "❌ No course found";
noCourseMessage.style.textAlign = "center";
noCourseMessage.style.fontSize = "20px";
noCourseMessage.style.color = "white";
noCourseMessage.style.display = "none";

document.querySelector(".courses").appendChild(noCourseMessage);

courseSearch.addEventListener("input", function () {

    let searchText = courseSearch.value.toLowerCase();
    let found = false;

    courses.forEach(function (course) {

        let courseName = course.querySelector("h3").textContent.toLowerCase();

        if (courseName.includes(searchText)) {
            course.style.display = "block";
            found = true;
        } else {
            course.style.display = "none";
        }

    });

    if (found) {
        noCourseMessage.style.display = "none";
    } else {
        noCourseMessage.style.display = "block";
    }

});
// Back to Top Functionality

let backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// Dark Mode with LocalStorage

let darkModeBtn = document.getElementById("darkModeBtn");

// Page load par saved theme check
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️ Light Mode";
}

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("darkMode", "enabled");
    } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("darkMode", "disabled");
    }

});