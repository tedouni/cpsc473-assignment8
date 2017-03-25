CPSC 473 - Web Front-End Engineering for Internet Applications
Assignment 8 - Spring 2017
Section 2 due April 3.  Section 1 due April 5.
In this assignment, you will finish the CoffeeRun app, complete a Programming Challenge, and modify the app to work with a new back-end.
Complete the following:
Work through Chapter 13 to connect CoffeeRun to a back-end service.
Complete the SIlver Challenge: Validating Against the Remote Server.
Note: Steps (3) through (6) may be completed either before or after working through Chapter 14.
From the command line, install the json-server tool with
npm install -g json-server
then switch to your coffeerun/ directory.
Download db.json from GitHub.  Place it in your coffeerun/ directory, then start the server with
json-server --port=3002 --watch db.json
 Modify SERVER_URL in scripts/main.js to use
http://localhost:3002/coffeeorders
Update scripts/remotedatastore.js as necessary to use the local json-server as CoffeeRun’s new back end.

Note that you will need to make changes to the way that orders are created.  These changes should not affect the rest of the code.

Hint: POST a new order and see how the newly-created order differs from the order currently stored in db.json.
Work through Chapter 14 to switch over to Promises and JQuery Deferred objects when storing data.
Push the contents of your coffeerun directory into a new public GitHub repository
Grading
How to know if the assignment has been successfully completed:
Is there a .eslintrc.json file?
Have you fixed any issues detected by the linter-eslint plugin?
Have you run the atom-beautify plugin?
Have you fixed any JavaScript issues displayed in the DevTools Console?
Is there a new scripts/remotedatastore.js module?
Is json-server installed and running?
Is SERVER_URL pointing to json-server?
Does the CheckList show the orders stored in the back-end service?
Are you able to add rows to the CheckList by submitting the order form?
Are you able to make deliveries by clicking rows in the CheckList?
Are you able to see orders being added and removed from db.json?
Has the code been updated to use Promise objects with the local DataStore?
Has the code been updated to use Deferred objects with the RemoteDataStore?
Do you have a new repository for this assignment?
Have you checked in the changes from this assignment and pushed them to GitHub?

