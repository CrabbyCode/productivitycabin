# Productivity Cabin  

## Overview  
Productivity Cabin is a web application designed to streamline project management and enhance productivity. Built with HTML, CSS, JavaScript, Node.js, and MongoDB, it provides tools for organizing tasks, setting deadlines, tracking progress, and fostering team collaboration.  

## Features  
- **User Authentication**: Secure sign-up and log-in functionality.  
- **Project Management**: Create, view, and manage projects with team collaboration tools.  
- **Task Management**: Assign tasks, set deadlines, and track progress seamlessly.  
- **Deadline Tracking**: Monitor project and task deadlines with automated notifications.  
- **Productivity Tracking**: Log work hours and analyze productivity trends.  
- **Customizable Settings**: Tailor the app to your preferences, including notifications and profile updates.  

## Getting Started  
1. Clone the repository: `git clone <repository_url>`  
2. Navigate to the project directory: `cd productivity-cabin`  
3. Install dependencies: `npm install`  
4. Start the server: `node server.js`  
5. Access the app at `http://localhost:3000`.  

## Project Structure  
- **Public Directory**: Contains the client-side HTML files for user interfaces.  
  - Examples: `createNewProject.html`, `overview.html`, `login.html`.  
- **Model Directory**: Defines database schemas for projects, users, tasks, and progress.  
- **Router Directory**: Handles API routes for deadlines, tasks, progress tracking, and settings.  
- **server.js**: The main server file, responsible for setting up the Express app and routes.  
- **db.js**: Configures the MongoDB connection using Mongoose.  

## Dependencies  
| Dependency       | Version | Description                             |  
|-------------------|---------|-----------------------------------------|  
| Express.js        | ^4.17.1 | Web framework for building APIs         |  
| Mongoose          | ^6.0.0  | MongoDB object modeling for Node.js     |  
| Cookie-parser     | ^1.4.5  | Middleware for parsing cookies          |  

## License  
This project is licensed under the MIT License. See the LICENSE file for details.  

---  

With these adjustments, the README becomes more concise, engaging, and professional while still delivering all necessary information. Let me know if you'd like a fully rewritten version!
