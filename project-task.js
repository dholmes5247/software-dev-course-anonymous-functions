/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const toDos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
  
  /*
  🔹 Task 1: Filter Incomplete Tasks
    Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */

 let incompleteTasks = toDos.filter((toDo) => toDo.completed === false); // anonymous function with filter method pulling false values
 console.log("Tasks that are incomplete: ", incompleteTasks); // outputs the incomplete tasks only
    
  /*
  🔹 Task 2: Sort Tasks by Priority
    Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */

  let sortedTasks = toDos.sort((a,b) => a.priority - b.priority);// anonymous fX sorting by the priority
  console.log("Sorted Tasks by Priority: ", sortedTasks); // logs ToDos sorted by the priority value
  
  /*
  🔹 Task 3: Mark All Tasks as Completed
    Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */

  let markCompleted = toDos.map((toDo) => {
    return {...toDo, completed: true};
    });  // anonymous fX mapping through array and changing values to true.  ...toDo is the spread operator, which copies the array values into a new array, and then the completed value is changed to true.
  console.log("All Tasks Completed: ", markCompleted); // logs the new array with all instances changed to true
  
  /*
  🔹 Task 4: Combine Filters
    Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */

  let filterSortResult = toDos.filter((toDos) => 
    !toDos.completed).sort((a,b) => 
    a.priority - b.priority); // 1st filters incomeplete tasks and then sort by priority with anonymous fX
console.log("Sorted Incomplete Tasks: ", filterSortResult);
  
  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
//I console.log'd after each anonymous function so for practice I tried to do it all in a step that I could call to. 

  function manageTasks(tasks) {
    return {
      getIncompleteTasks: () => tasks.filter(task => !task.completed),
      getSortedPriorityTasks: () => [...tasks].sort((a, b) => a.priority - b.priority),
      getAllTasksComplete: () => tasks.map(tasks => ({...tasks, completed: true})),
      getSortedIncompTasks: () => tasks.filter(tasks => !tasks.completed).sort((a,b) => a.priority - b.priority),
    };
  }

const taskManager = manageTasks(toDos);

console.log("Incomplete Tasks: ", taskManager.getIncompleteTasks());
console.log("Sorted by Priority: ", taskManager.getSortedPriorityTasks());
console.log("All Tasks Complete: ", taskManager.getAllTasksComplete());
console.log("Sorted, Incomplete Tasks: ", taskManager.getSortedIncompTasks());




  
  