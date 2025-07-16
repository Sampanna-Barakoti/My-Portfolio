// Contact Form Email Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Create email content
            const emailSubject = `Portfolio Contact: ${name}`;
            const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
            `;
            
            // Send email using EmailJS (you'll need to set up EmailJS account)
            // For now, we'll use mailto as a fallback
            const mailtoLink = `mailto:barakotisampu55@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Send email via server
            fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    message: message
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showNotification('Message sent successfully!', 'success');
                    contactForm.reset();
                } else {
                    throw new Error(data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showNotification('Failed to send message. Opening email client...', 'error');
                // Fallback to mailto
                setTimeout(() => {
                    window.location.href = mailtoLink;
                }, 2000);
            });
        });
    }
});

// Notification function
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transition: all 0.3s ease;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#05b4ff';
            break;
        case 'error':
            notification.style.backgroundColor = '#ff4757';
            break;
        case 'info':
            notification.style.backgroundColor = '#3742fa';
            break;
        default:
            notification.style.backgroundColor = '#2f3542';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

if (menuIcon && navList) {
    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('open');
    });
}

// Show all projects function
function showAllProjects() {
    const projectsList = [
        'Flutter UI Clone Collection',
        'AI Chatbot Application',
        'Farming Bidding Platform',
        'Flutter State Management Examples',
        'E-commerce Mobile App',
        'Weather Forecast App',
        'Task Management System',
        'Social Media Dashboard'
    ];
    
    let projectsText = 'All Projects:\n\n';
    projectsList.forEach((project, index) => {
        projectsText += `${index + 1}. ${project}\n`;
    });
    
    alert(projectsText + '\nVisit my GitHub for complete project details!');
}