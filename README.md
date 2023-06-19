Hello team!

This project is a simple, yet functional Contacts Book single-page application. It provides an easy-to-use interface to add, delete, and edit contacts. It features client-side persistence, so that the added contacts are not lost when the application is reloaded.

Contacts are stored with essential details such as First Name, Last Name, Email, and Country. The application includes field validation to ensure data integrity.


Additionally, I installed the following libraries:

- SASS, which enables the use of mixins and nesting within classes;
- Jest, along with all necessary environment libraries;
- uuid, to generate unique and collision resistant Ids;
- country-list to list all countries.


The application mainly consists of two views: the contacts list and add contact modal.

The contacts list is the main view that users see when they launch the application. It presents users with a list of all their saved contacts. Each contact is displayed with relevant details. Users can interact with this view to search for contacts, delete existing ones, or initiate the process of adding a new contact.


The add contact modal view appears when users decide to add a new contact to their list, or automatically when the contacts list is initially empty. It provides a simple form where users input the new contact's information, such as name, phone number, email, etc. After filling in the details, users can save the new contact, which will then appear in the 'Contacts List' view.


The design is minimalistic and fully responsive.


What could be improved:

- write tests to cover all functions;
- write a component that encapsulates all input fields;
- allow users to categorize their contacts into custom groups (e.g., family, coworkers, friends), making it easier to manage and navigate through large numbers of contacts;
- introduce a dark theme;
- write custom error forms and alerts to improve user interaction and provide clearer error messages;
- add pagination to manage large quantities of contacts more effectively, improving app performance and user experience.


## Getting Started

To set up this project, please follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using npm install.
3. Launch the development server using npm start.

To run tests: npm  test

Thank you for testing and I really hope you will enjoy.

Have a great rest of the day!