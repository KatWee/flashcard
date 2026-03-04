# flashcard

## Project title: Flashcard Learning App
A single‑page responsive flashcard tool that lets users create questions, reveal answers with a click, and clear cards after use.

## The technical stack
### Frontend (React.js + Material UI)
I use React.js to build a single‑page and responsive interface. For styling, I use Material UI, an open‑source React component library that provides modern, accessible, and responsive UI components, helping the app look clean and consistent across devices.

### Routing 
Because the app is a single‑page application, all routing and state changes are handled on the client side. React manages component rendering.

### Backend (Node.js + Express.js)
The backend is built with Node.js and Express.js, which handle API requests between the frontend and the database. This includes creating, retrieving, updating, and deleting (CRUD) flashcards. Express provides a simple and organized structure for defining REST API endpoints.

### Database (MySQL)
I use MySQL as the database because the flashcard data follows a fixed, structured schema—each card contains a question and an answer. A relational database ensures consistency, easy querying, and reliable data storage.

## Feature List
1. Create new flashcards
2. Edit existing flashcards
3. Reveal answers with a click: Each card shows the question first, and the answer appears when clicked.
4. Delete flashcards
 - Bin icon: Delete a card immediately without viewing the answer.
 - Check icon: Delete a card after reviewing the answer.
5. Display cards in descending order
6. Responsive design

## The folder structure
```bash
├─Flashcard
    ├─Backend
    │   ├─server.js (connecting to the database.)
    │   ├─package-lock.json
    │   └─package.json
    └─flashcard-react (Frontend)
        ├─public (static files)
        │ └─index.html (Single HTML file where the entire React app is mounted.)
        ├─src
        │ ├─components (contain components in web page)
        │ ├─App.js (main UI structure)
        │ ├─index.js (The entry point to index.html)
        ├─package-lock.json
        └─package.json
```

## A summary of challenges overcome
- <b>Steep learning curve with React</b> 
Building a full website with React required strong JavaScript fundamentals and new concepts. I followed YouTube tutorials and used generative AI explanations to understand how React works in real projects.
- <b>Understanding state and props</b>
Managing data flow in React was initially confusing. It took time and practice to understand how state updates, props passing, and component re-rendering work together.
- <b>Finding the right way to connect to the database</b> 
There are many different approaches to linking a Node.js backend with MySQL and MongoDB. I experimented with multiple tutorials and code examples before finding a method that worked reliably for my project.
- <b>Implementing responsive design</b>
Making the layout adapt across desktop and mobile was challenging, so I used Material UI to handle responsiveness more efficiently and avoid writing complex CSS from scratch.

## How to run the project
1. start MySQL and Apache service on Xammp
2. run backend
```
> cd backend
> npm start
```
3. run forntend
```
> cd flashcard-react
> npm start
```