
### Bugs (mandatory):

- [X] B1. Bug: status filter button displays on top of the calendar view when selecting due date of a task
- [X] B2. Bug: the app crashes after adding a new todo

### Tasks (optional):

- [ ] T1. Change a favicon and title of the app into something cool. __1 point__
- [ ] T2. Highlight due dates in the todo list with different colors. __4 points__ 
Requirements:
* Green - the task's due date is 2+ days from today or the task is already completed.
* Yellow - the task's due date is <2 days from today or today
* Red - the task's due date has already passed
- [ ] T3. Highlight the currently selected category in the sidebar with bold text __2 points__
- [ ] T4. Allow user to delete any category created by him (category.readonly is false). Note: delete all todos in this category as well. __6 points__
- [ ] T5. Allow user to edit category name of categories created by him (category.readonly is false) __6 points__
- [ ] T6. On the "All" category page for each category display a separate card with the todos that belong to this category (to make this task easier, you can hide the filter and show only Open todos for each category only on this page). __8 points__
- [ ] T7. Adapt the app to be usable on mobile (add a sidebar toggle button) __4 points__
- [ ] T8. Deploy your demo app on Netlify or another hosting __4 points__ 
Links:
* http://netlify.com
* https://zeit.co/
- [ ] T9. Drag'n'drop to do list item into another list in desktop version __10 points__
* https://github.com/atlassian/react-beautiful-dnd
* https://egghead.io/lessons/react-reorder-a-list-with-react-beautiful-dnd

__Note:__ you can do some extra stuff even if you completed 0 tasks here. Please write about it somewhere and we will add extra points to your application and we may add you extra points!

-----

## Handy links that might help you

0. JS fundamentals - https://www.codecademy.com/learn/introduction-to-javascript
1. Intro to React - https://reactjs.org/tutorial/tutorial.html
2. React Crashcourse 2021 - https://www.youtube.com/watch?v=w7ejDZ8SWv8
3. ES6 - https://medium.freecodecamp.org/want-to-learn-es6-take-this-free-23-part-course-and-become-a-javascript-ninja-55002db1ff74
4. How to Learn React — A roadmap from beginner to advanced - https://medium.freecodecamp.org/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6

--- 

## Environment

- Node.js v12.16.3 (nvm)
- npm - v6.14.4 (you can use yarn instead of npm)

The app should work in Node 8, 10, 12, 14 as well

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run lint:fix`

Runs eslint and fixes auto-fixable problems

### `npm run lint`

Only runs eslint without auto-fix

### `npm run test`

Runs tests
