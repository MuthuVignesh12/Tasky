const taskContainer = document.querySelector(".task_container");

const addNewCard = () => {
  //get task data
  const taskData = {
    id: `${Date.now()}`,
    title: document.getElementById("taskTitlte").value,
    image: document.getElementById("imageUrl").value,
    type: document.getElementById("taskType").value,
    description: document.getElementById("taskDescription").value,
  };

  //generate HTML
  const newCard = `<div class="col-md-6 col-lg-4" id=${taskData.id}>
  <!--cards-->
  <div class="card my-4">
    <div class="card-header gap-2 d-flex justify-content-end">
      <button class="btn btn-outline-info">
        <i class="fal fa-pencil"></i>
      </button>
      <button class="btn btn-outline-warning">
        <i class="fal fa-trash-alt"></i>
      </button>
    </div>
    <div class="card-body">
      <img
        src="${taskData.image}"
        alt="image"
        class="card-img"
      />
      <h5 class="card-title mt-3">${taskData.title}</h5>
      <p class="card-text">
        ${taskData.description}
      </p>
      <span class="badge bg-primary">${taskData.type}</span>
    </div>
    <div class="card-footer">
      <button class="btn btn-outline-primary">Open Task</button>
    </div>
  </div>
</div>`;

  //inject to DOM
  taskContainer.insertAdjacentHTML("beforeend", newCard); 

  //clear form
  document.getElementById("taskTitlte").value="";
  document.getElementById("imageUrl").value="";
  document.getElementById("taskType").value="";
  document.getElementById("taskDescription").value="";
  return ;
};

