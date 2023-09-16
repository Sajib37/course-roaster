*Project Feature:*
1.Course Details: Provide detailed information about each course when a user clicks on a course card or selects a course.Adding this feature enhances transparency and helps users make informed decisions about their course selections
2.Credit calculation: After selctting acourse. this course credit autometically added to the total credit. So that, User can easily handled the total credit.It also prepesents the remaining credits.
3.course Plan: When users select a course it will autometically added to the selected div. so, user can see What he/she added in a certain container.

*How I managed the state in my assignment project:*
1.using useState: by using usestate I can store data and pass them from parent component to the child component.
2.using useEffect: By using useEffect I can easily fetch the data from a json file .
3.State Variables: I declared multiple state variables at the beginning of  App component:
  (i).selectCourse: This state variable keeps track of the selected courses in the user's cart.
  (ii)totalPrice: This state variable stores the total cost of the selected courses.
  (iii)totalCredit: This state variable tracks the total credit hours of the selected courses.
  (iv)remainingCredit: This state variable represents the remaining credit hours the user has.
