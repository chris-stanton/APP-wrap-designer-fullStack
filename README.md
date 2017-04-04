# Fishing Rod Wrap Designer / Spacing Calculator / Blank and Thread DB

---

#### Rod Wrap Designer:

###### Rod Wrap Designer intended use is to emulated real life decorative wraps.  At the top of the page, images will display, from the nine select options below.  The input areas, next to the color select options, require whole numeral values to represent the amount of real life turns.  The user then have an option to print the design.  All select options include real Manufactures thread colors and blank colors.

#### Spacing Calculator:

###### Spacing Calculator is simple a referance guide to specific ice fishing rod models.  When a rod is selected, the DOM will display the rods Manufacture, Rod Name, Length, Handle Length, guide sizes and guide spacing.  The stats display with heading and the guide sizes / guide spacing are referanced to a ice fishing rod image and to thier exact location on the rod.  Lastly, the user has the option to print the stats.

#### Submit Stats to DB:

###### Before the user can submit stats they must be Google Authenticated. To get authenticated, the user has two options in the upper right corner.  If the user has a Google account, they can simple click the login button to get authenticated.  If the user does not have an existing Google account, they can click register and be redirected to Google to create the account.  Once authenticated, the DOM will display input fields to allow the user to submit thier stats.  The input fields, for guide sizes and spacing, are positioned next to a ice rod image refering to thier real life relative spots.

---

## Technologies Used:
  1. MEAN Stack
    * SQL
    * Express.js
    * Angular.js
    * Node.js
  2. Firebase by Google Auth
  3. GIT / GitHub
  4. Sweatalerts
  5. Notyf
  6. Bootstrap
  7. Animate CSS

## How To Install App:
  1. Download zip file
  2. Open terminal and navigate into solo-project folder
  3. Run commands:
    * ``` npm install ``` Installs Node Packages
    * ``` brew services start postgresql ``` Starts DB server connection to Postico
    * ``` npm test ``` Starts server using Nodemon
  4. Configure / Create DB
    * Download and install SQL DB client to aide in creating the DB
    * Cut and paste code from database.sql file into 3rd party software from the step pervious
    * You will be creating and populating four tables newBlanks, threads, adminEmail and blankColors
