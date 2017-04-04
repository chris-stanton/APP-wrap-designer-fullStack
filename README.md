
# Fishing Rod Wrap Designer / Spacing Calculator / Blank and Thread DB

---

#### Rod Wrap Designer:

###### Rod Wrap Designer intended use is to emulated real life decorative wraps.  At the top of the page, images will display, from the nine select options below.  The input areas, next to the color select options, require whole numeral values to represent the amount of real life turns.  The user then have an option to print the design.  All select options include real Manufactures thread colors and blank colors.

#### Spacing Calculator:

###### Spacing Calculator is simple a reference guide to specific ice fishing rod models.  When a rod is selected, the DOM will display the rods Manufacture, Rod Name, Length, Handle Length, guide sizes and guide spacing.  The stats display with heading and the guide sizes / guide spacing are referenced to a ice fishing rod image and to their exact location on the rod.  Lastly, the user has the option to print the stats.

#### Submit Stats to DB:

###### Before the user can submit stats they must be Google Authenticated. To get authenticated, the user has two options in the upper right corner.  If the user has a Google account, they can simple click the login button to get authenticated.  If the user does not have an existing Google account, they can click register and be redirected to Google to create the account.  Once authenticated, the DOM will display input fields to allow the user to submit their stats.  The input fields, for guide sizes and spacing, are positioned next to a ice rod image referring to their real life relative spots.  User's stat are then passed on to be reviewed by an Admin before it is usable in the database.

#### Admin Rights/DB:

###### The admin must first be Google Authenticated before entering.  The admin will be asked to enter their Google email address that was used to authenticate with.  Once the admin has entered the view, they will have an option to edit an entry without updating to the DOM and will also have the option to delete the entry and all entry fields are editable. The Certify Entry checkbox must be checked for the submission to be seen on the view when clicking UPDATE.  All non-certified submissions will appear in this view.  

---

## Technologies Used:
  1. MEAN Stack
    - SQL
    - Express.js - version 4.15.2
    - Angular.js - version 1.6.3
    - Node.js
  2. Angular Animate - version 1.6.3
  3. Firebase by Google Auth - version 3.7.2
  4. GIT / GitHub
  5. Sweatalerts
  6. Notyf - version 2.0.1
  7. Bootstrap - version 3.3.7
  8. Animate CSS

## How To Install App:
  1. Download zip file
  2. Open terminal and navigate into solo-project folder
  3. Run commands:
    - ``` npm install ``` Installs Node Packages
    - ``` brew services start postgresql ``` Starts DB server connection to Postico
    - ``` npm test ``` Starts server using Nodemon
  4. Configure / Create DB
    - Download and install SQL DB client to aide in creating the DB
    - Cut and paste code from database.sql file into 3rd party software from the step pervious
    - You will be creating and populating four tables newBlanks, threads, adminEmail and blankColors
