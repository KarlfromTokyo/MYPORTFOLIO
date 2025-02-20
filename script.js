// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Modal functionality
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    const closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.textContent = "×";

    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Get all project images
    const projectImages = document.querySelectorAll(".project img");

    // Loop through each image and add a click event listener
    projectImages.forEach(image => {
        image.addEventListener("click", () => {
            const imgClone = image.cloneNode();
            modalContent.appendChild(imgClone);
            modal.style.display = "flex"; // Show modal
        });
    });

    // Close modal when close button is clicked
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
        modalContent.removeChild(modalContent.lastChild); // Remove the image
    });

    // Close modal when clicked outside of the modal content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modalContent.removeChild(modalContent.lastChild); // Remove the image
        }
    });

    // Smooth scroll for anchor links (navigation)
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = link.getAttribute("href").substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const scrollTopButton = document.getElementById("scroll-top");
    const scrollBottomButton = document.getElementById("scroll-bottom");

    // Show scroll buttons when the user scrolls
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) { // Show buttons after scrolling down 200px
            scrollTopButton.style.display = "block";
            scrollBottomButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
            scrollBottomButton.style.display = "none";
        }
    });

    // Scroll to top when clicking the up arrow
    scrollTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Scroll to bottom when clicking the down arrow
    scrollBottomButton.addEventListener("click", () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const scrollLink = document.querySelector(".scroll-link");

    if (scrollLink) {
        scrollLink.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = scrollLink.getAttribute("href").substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    }
});
document.addEventListener('mousemove', function(e) {
    let circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
    document.body.appendChild(circle);
    
    setTimeout(function() {
        circle.remove();
    }, 1000);
});

// CSS for the animation effect
const style = document.createElement('style');
style.innerHTML = `
    .circle {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        animation: fadeOut 1s forwards;
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(2);
        }
    }
`;
document.head.appendChild(style);

