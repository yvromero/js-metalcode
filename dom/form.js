class TaskForm{
   constructor(idForm, idInput, idList){
     // store DOM references by selector
     this.form = document.querySelector(idForm);
     this.input = document.querySelector(idInput);
     this.list = document.querySelector(idList)
   }

   build(){
      // listen for form submission
      this.form.addEventListener("submit", (event) => {
         event.preventDefault(); // stop the page from reloading

         // read input value
         const description = this.input.value;

         // create a new list item with timestamp
         const li = document.createElement("li");
         li.innerText = `${description} - ${new Date().toLocaleString()}`;

         // create delete button and append to the list item
         const btn = this.#createButtonDelete();
         li.appendChild(btn);

         // append the new item to the visible list
         this.list.appendChild(li);

         // reset the form (clears the input)
         this.form.reset();
      });
   }
     // Private method that creates a "Delete" button
   #createButtonDelete(){
      const btn = document.createElement("button");
      btn.innerText = "Delete";
      btn.type = "button"; // ensure it does not submit the form

      // when clicked, remove the parent <li>
      btn.addEventListener("click", (e) => {
         e.target.parentNode.remove();
      });
      return btn;
   }
};

// instantiate and activate behavior
const taskForm = new TaskForm("#form", "#txtDescription", "#ulList");
taskForm.build();