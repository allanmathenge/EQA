# Setting up Frontend With Django


This guide provides step-by-step instructions for integrating a React frontend into an existing Django project. It covers setting up the project, configuring Django to serve React's static files, and automating the process with a script.

# Prerequisites
Node.js and npm are installed on your machine.
Python and Django are set up in your development environment.

# Step 1: Setup React

1. Navigate to the Frontend Repository

### `cd frontend/`

2. Install all necessary Dependencies:

### `npm install`

3. Start up the Server

### `npm start`

This will start the React development server at http://localhost:3000.

You should now (hopefully) see this on screen

![Alt Text](https://cdn.discordapp.com/attachments/839784544798638090/1261398778498388091/Screen_Shot_2024-07-12_at_9.07.18_PM.png?ex=6692d0a8&is=66917f28&hm=71676dc27877ad6daa1564d8783166257192648133e2711050c200fb303c7227&)

# Step 2  - Serving Static Files from React

After you develop something on the React end, it needs to be migrated over to the Django Templates that are setup. These are the steps for that:

There is a custom script to automate the Build process. It does this by running the build scripts and moving the updated files to the Django Static directories

Run the Script by :

### `./copy-react-build.sh`
Before running the script ensure that you are in the freshly_set directory. This should then update your Django app with the latest static files served from React. 

If you go to your Django app on localhost:8000, you should now see the same changes

