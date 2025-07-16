# Portfolio Website

A professional portfolio website with enhanced features including photo section, skills showcase, projects display, and email functionality.

## Features

- **Photo Section**: Professional profile photo in the home section
- **Skills Section**: Technical and soft skills with blue theme
- **Projects Section**: Detailed project cards with technologies used
- **Contact Form**: Email functionality to receive messages directly
- **Responsive Design**: Mobile-friendly layout
- **Professional UI**: Clean blue color theme throughout

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Email Configuration
To enable email functionality, you need to:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Update `server.js` with your app password:
   ```javascript
   pass: 'your-16-character-app-password'
   ```

### 3. Run the Application
```bash
npm start
```

The website will be available at `http://localhost:3000`

## File Structure

- `index.html` - Main HTML file with all sections
- `css/style.css` - Enhanced styles with new sections
- `js/script.js` - JavaScript for form handling and interactions
- `server.js` - Node.js server for email functionality
- `package.json` - Dependencies and scripts

## New Sections Added

1. **Home Photo**: Profile image on the right side of landing section
2. **Skills Section**: Technical and soft skills with icons
3. **Projects Section**: Professional project cards with tech stack
4. **Enhanced Contact**: Working email form with server backend

## Technologies Used

- HTML5, CSS3, JavaScript
- Node.js, Express.js
- Nodemailer for email functionality
- Boxicons for icons
- Responsive CSS Grid and Flexbox