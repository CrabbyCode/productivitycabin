# Productivity Cabin

## Overview

Welcome to Productivity Cabin! This web application is your ultimate destination for enhancing productivity and managing projects efficiently. Leveraging HTML, CSS, JavaScript, Node.js, and MongoDB, Productivity Cabin provides a robust platform for organizing tasks, setting deadlines, tracking progress, and optimizing team collaboration.

### Project Structure

#### Public Directory

- **createNewProject.html**: This file contains a form where users can create a new project. It collects project details such as title, description, and members.
- **deadline.html**: Manage project deadlines effectively using this page. Users can view existing deadlines, set new ones, and update or delete existing deadlines as needed.
- **login.html**: Secure user authentication for logging into the application.
- **overview.html**: The main dashboard providing an overview of ongoing projects, tasks, and deadlines. It offers a comprehensive view of the user's project landscape.
- **productivityCabin.html**: Track productivity, log work hours, and analyze trends with this feature-rich page.
- **projectList.html**: View a list of all projects the user is involved in. Clicking on each project provides access to detailed information and task management features.
- **setting.html**: Customize profile settings, including preferences, notifications, and account information.
- **signUp.html**: New users can register for an account using this page. It collects essential user information such as name, email, username, and password.

#### Model Directory

- **progress.js**: Model for tracking project progress. It includes fields such as member ID, task ID, project ID, and progress status.
- **project.js**: Encapsulates project-related data, including title, description, members, deadlines, and associated tasks.
- **task.js**: Represents individual tasks within projects. It includes fields such as name, details, urgency, type (e.g., to-do, in progress, done), deadline, and project ID.
- **user.js**: Defines the structure for user accounts, storing details such as name, email, username, password, and preferences.

#### Router Directory

- **deadline_router.js**: Handles HTTP requests related to project deadlines, including routes for retrieving, creating, updating, and deleting deadlines.
- **overview_router.js**: Manages requests for the main dashboard, including routes for retrieving project data, task lists, and productivity statistics.
- **progress_router.js**: Facilitates progress tracking functionality, defining routes for logging progress updates, retrieving progress data, and generating productivity reports.
- **setting_router.js**: Handles user settings-related requests, including routes for updating user profiles, preferences, and account information.

#### server.js

- Entry point for the Node.js server. It initializes the Express application, configures middleware, defines route handlers, and starts the server listening on port 3000.

#### db.js

- Establishes a connection to the MongoDB database using Mongoose. It exports the database connection for use in other modules.

### Functionality

Productivity Cabin offers a wide range of functionality to support effective project management and team collaboration:

- **User Authentication**: Users can securely sign up for an account or log in using their credentials.
- **Project Management**: Create, view, and manage projects with ease. Add descriptions, invite members, and set deadlines effortlessly.
- **Task Management**: Create, update, and delete tasks within projects. Assign tasks to team members, set deadlines, and track task progress seamlessly.
- **Deadline Tracking**: Set deadlines for projects and tasks, view upcoming deadlines, and receive notifications to stay on track.
- **Productivity Tracking**: Log work hours, track task completion rates, and monitor productivity trends using built-in productivity tracking features.
- **Settings Customization**: Customize profile settings, including notification preferences, profile picture, and account information.

### Getting Started

To get started with Productivity Cabin:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Start the server by running `node server.js`.
4. Access the application through a web browser at `http://localhost:3000`.
5. Sign up for a new account or log in with existing credentials.
6. Explore the various features of the application, including project management, task tracking, deadline management, and productivity monitoring.

### Dependencies

Productivity Cabin relies on the following dependencies:

- **Express.js**: A minimalist web framework for Node.js used for building web applications and APIs.
- **Mongoose**: An elegant MongoDB object modeling tool designed to work in an asynchronous environment.
- **Cookie-parser**: A middleware for parsing cookies attached to the request object.

### Usage

Here are some tips for using Productivity Cabin effectively:

- Ensure MongoDB is running locally on port `27017` to enable database functionality.
- Navigate through the different sections of the application using the provided navigation links.
- Create new projects, add tasks, set deadlines, and track progress to stay organized and efficient.
- Customize your profile settings to tailor the application to your preferences and workflow.

### Additional Notes

- For detailed documentation and code comments, refer to the codebase within the repository.
- Customize and extend the project according to your specific requirements and use cases.
- If you encounter any issues or have questions, please reach out to [project author's name/email/contact] for assistance.

Thank you for choosing Productivity Cabin for your project management and productivity needs!

---

