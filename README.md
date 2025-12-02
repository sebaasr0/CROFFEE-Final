CROFFEE - Installation Guide
Complete step-by-step instructions to run the CROFFEE project on your computer.

Prerequisites
Before running this project, you need to install the following software:
1. Install Visual Studio Code (VS Code)
VS Code is the code editor we'll use to open and run the project.

Go to https://code.visualstudio.com/
Click the Download button for your operating system (Windows, macOS, or Linux)
Run the installer and follow the installation wizard
Once installed, open VS Code to make sure it works


2. Install Node.js
Node.js is required to run the project and manage dependencies.

Go to https://nodejs.org/
Download the LTS (Long Term Support) version (recommended for most users)

Verify the installation by opening a terminal:

Windows: Press Win + R, type cmd, and press Enter
macOS: Press Cmd + Space, type Terminal, and press Enter
In the terminal, type the following commands to verify Node.js and npm are installed:
bash   node --version
You should see something like v20.x.x or v18.x.x
bash   npm --version
You should see something like 10.x.x or 9.x.x
If both commands show version numbers, Node.js is installed correctly!

Project Setup
Step 1: Download or Clone the Project
Option A: Download as ZIP

Download the project ZIP file
Extract the ZIP file to a folder on your computer

Option B: Clone from GitHub (if you have Git installed)
bashgit clone https://github.com/sebaasr0/CROFFEE-Final.git

Step 2: Open the Project in VS Code

Open Visual Studio Code
Go to File → Open Folder
Navigate to the CROFFEE project folder and select it
Click Select Folder (or Open on macOS)

You should now see the project files in the VS Code sidebar (Explorer panel).

Step 3: Open the Terminal in VS Code

In VS Code, go to Terminal → New Terminal 
A terminal panel will open at the bottom of VS Code
Make sure you're in the project folder. The terminal should show something like:

   C:\Users\YourName\Documents\CROFFEE>
or on macOS:
   ~/Documents/CROFFEE$

Step 4: Install Project Dependencies
In the VS Code terminal, run the following command:

 **Install dependencies:**
   ```bash
   npm install
   ```

This command will:

Read the package.json file
Download all required packages (React, TypeScript, Tailwind CSS, etc.)
Create a node_modules folder with all the dependencies

Wait for the installation to complete. This may take 1-3 minutes depending on your internet connection. You'll see a progress indicator and when it's done, you'll see a summary of installed packages.

Note: If you see any warnings (yellow text), that's usually okay. Only errors (red text) indicate a problem.


Step 5: Run the Development Server
After the dependencies are installed, run:
 **Start development server:**
   ```bash
   npm run dev
   ```
You should see output similar to this:
  VITE v4.3.9  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

Step 6: View the Project in Your Browser

Open your web browser (Chrome, Firefox, Edge, Safari, etc.)
Go to: http://localhost:5173
You should see the CROFFEE website running!
