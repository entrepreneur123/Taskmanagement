let task = [];
let id = 1;
let editStatus = false;
const taskForm = document.getElementById("task-form");

let user = [
  {
    id: 1,
    name: "A",
  },
  {
    id: 2,
    name: "B",
  },
  {
    id: 3,
    name: "C",
  },
  {
    id: 4,
    name: "D",
  },
];

let complexity = [
  {
    type: "Hard",
  },
  {
    type: "Easy",
  },
  {
    type: "Medium",
  },
];

user.forEach((element) => {
  document.getElementById("assign_task").innerHTML += `
    <option value="${element.id}">${element.name}</option>`;
});

complexity.forEach((give) => {
  document.getElementById("select_complexity").innerHTML += `
  <option>"${give.type}"</option>`;
});

const display = () => {
  document.getElementById("resultid").innerHTML = task
    .map(
      (todo) => `
    <div class="flex-area">
    <div class="task-content ">
    <div>title:${todo.title}</div>
    <div>description:${todo.description}</div>
    </div>
    </br>
    <div class="assignn">Assignee:${todo.assignee}</div>
    </br>
    <div class="complexx">complexity:${todo.complexity}</div>
    </br> 
    <div class="button-area">
    <button class="btn edit" onClick="edit(${todo.id})">Edit</button>
    <button class="btn delete" onClick="deleteTodo(${todo.id})">Delete</button>
    </div>
    </div>
    `
    ) //no semicolon
    .join(" ");
};

const Add = (x) => {
  let title = document.getElementById("input__titleid").value;
  let description = document.getElementById("input__descriptionid").value;
  let complexity = document.getElementById("select_complexity").value;
  let assigneeId = document.getElementById("assign_task").value;
  console.log(assigneeId);
  let assignee = user.filter((assign) => assign.id == assigneeId)[0].name;
  task.push({
    id,
    title,
    description,
    user,
    complexity,
  });
  id++;
  document.getElementById("input__titleid").value = "";
  document.getElementById("input__descriptionid").value = "";

  display();
};

// const assignValue = (x) => {
//   x.preventDefault();
//   console.log(x);
// };

taskForm.addEventListener("click", (x) => x.preventDefault());
//prevents default action i.e. refreshing the page when form is submitted

const edit = (id) => {
  editStatus = True;
  document.getElementById("btnid").innerHTML =
    editStatus == false
      ? `<button type="submit" id="submitbutton" onClick="{Add()}">Add</button>`
      : `<button type="submit" id="submitbutton" onClick="{Update(${id})}">Update</button>`;
  let selectValues = task.filter((value) => value.id == id)[0];
  document.getElementById("input__titleid").value = selectValues.title;
  document.getElementById("input__descriptionid").value =
    selectValues.description;
  document.getElementById("select_complexity").value = selectValues.complexity;
  document.getElementById("assign_task").value = selectValues.assignee;
  display();
};
const Update = (id) => {
  let title = document.getElementById("input__titleid").value;
  let description = document.getElementById("input__descriptionid").value;
  let complexity = document.getElementById("select_complexity").value;
  let assigneeId = document.getElementById("assign_task").value;
  console.log(assigneeId);
  let assignee = user.filter((assign) => assign.id == assigneeId)[0].name;
  task.map((x) => {
    if (x.id == id) {
      x.title = title;
      x.description = description;
      x.complexity = complexity;
      x.assignee = assignee;
    }
  });
  editStatus = false;
  editStatus == false
    ? `<button type="submit" id="submitbutton" onClick="{Add()}">Add</button>`
    : `<button type="submit" id="submitbutton" onClick="{Update(${id})}">Update</button>`;

  display();
};

const deleteTodo = (id) => {
  task = task.filter((todos) => todos.id !== id);
  display();
};
