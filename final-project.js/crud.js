// ===========================================================
// Clase FetchCrud → Maneja operaciones CRUD utilizando Fetch API
// ===========================================================
class FetchCrud {
  #url; // Propiedad privada que almacena la URL base de la API

  constructor(url) {
    this.#url = url;
  }

  // -------------------------------
  // Leer (GET): Obtener todos los registros
  // -------------------------------
  async getAll() {
    const result = await fetch(this.#url);

    if (!result.ok) {
      throw new Error("Error al obtener la información");
    }

    return await result.json();
  }

  // -------------------------------
  // Crear (POST): Agregar un nuevo registro
  // -------------------------------
  async create(item) {
    const result = await fetch(this.#url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    });

    if (!result.ok) {
      throw new Error("Error al crear el elemento");
    }

    return await result.json();
  }

  // -------------------------------
  // Actualizar (PUT): Modificar un registro existente
  // -------------------------------
  async update(item) {
    const result = await fetch(`${this.#url}/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    });

    if (!result.ok) {
      throw new Error("Error al editar el elemento");
    }

    return await result.json();
  }

  // -------------------------------
  // Eliminar (DELETE): Borrar un registro por ID
  // -------------------------------
  async delete(id) {
    const result = await fetch(`${this.#url}/${id}`, {
      method: "DELETE"
    });

    if (!result.ok) {
      throw new Error("Error al eliminar el elemento");
    }

    return await result.json();
  }
}

// ===========================================================
// Clase ShowInfo → Muestra y actualiza la información en una tabla HTML
// ===========================================================
class ShowInfo {
  #table;     // Referencia a la tabla HTML
  #fnEdit;    // Función callback para el botón Editar
  #fnDelete;  // Función callback para el botón Eliminar

  constructor(idTable, fnEdit, fnDelete) {
    this.#table = document.getElementById(idTable);
    this.#fnEdit = fnEdit;
    this.#fnDelete = fnDelete;
  }

  // -------------------------------
  // Mostrar todos los registros en la tabla
  // -------------------------------
  show(data) {
    const tbody = this.#table.querySelector("tbody");
    tbody.innerHTML = ""; // Limpia el contenido anterior

    data.forEach((item) => {
      const row = tbody.insertRow();
      row.insertCell().textContent = item.id;
      row.insertCell().textContent = item.title;
      row.insertCell().textContent = item.userId;
      row.insertCell().textContent = item.body;

      // Crear celda con botones de acción
      const actionsCell = row.insertCell();
      const btnEdit = this.#createEditButton(item);
      const btnDelete = this.#createDeleteButton(item);
      actionsCell.appendChild(btnEdit);
      actionsCell.appendChild(btnDelete);
    });
  }

  // -------------------------------
  // Agregar un nuevo registro a la tabla
  // -------------------------------
  add(item) {
    const tbody = this.#table.querySelector("tbody");
    const row = tbody.insertRow();

    row.insertCell().textContent = item.id;
    row.insertCell().textContent = item.title;
    row.insertCell().textContent = item.userId;
    row.insertCell().textContent = item.body;

    const actionsCell = row.insertCell();
    const btnEdit = this.#createEditButton(item);
    const btnDelete = this.#createDeleteButton(item);
    actionsCell.appendChild(btnEdit);
    actionsCell.appendChild(btnDelete);
  }

  // -------------------------------
  // Editar una fila existente en la tabla
  // -------------------------------
  edit(item) {
    const tbody = this.#table.querySelector("tbody");
    const rows = tbody.querySelectorAll("tr");

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].cells[0].textContent == item.id) {
        const row = rows[i];
        row.cells[1].textContent = item.title;
        row.cells[2].textContent = item.userId;
        row.cells[3].textContent = item.body;

        // Actualizar botones
        const actionsCell = row.cells[4];
        actionsCell.innerHTML = "";
        const btnEdit = this.#createEditButton(item);
        const btnDelete = this.#createDeleteButton(item);
        actionsCell.appendChild(btnEdit);
        actionsCell.appendChild(btnDelete);
        break;
      }
    }
  }

  // -------------------------------
  // Eliminar una fila de la tabla por ID
  // -------------------------------
  remove(id) {
    const tbody = this.#table.querySelector("tbody");
    const rows = tbody.querySelectorAll("tr");

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].cells[0].textContent == id) {
        tbody.deleteRow(i);
        break;
      }
    }
  }

  // -------------------------------
  // Crear botón de Edición
  // -------------------------------
  #createEditButton(item) {
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Editar";
    btnEdit.addEventListener("click", (event) => {
      this.#fnEdit(event, item);
    });
    return btnEdit;
  }

  // -------------------------------
  // Crear botón de Eliminación
  // -------------------------------
  #createDeleteButton(item) {
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar";
    btnDelete.addEventListener("click", (event) => {
      this.#fnDelete(event, item);
    });
    return btnDelete;
  }
}

// ===========================================================
// Funciones auxiliares (editar / eliminar)
// ===========================================================

// Mostrar modal de edición con los datos del elemento
function showEdit(event, item) {
  document.getElementById("dlg").showModal();
  document.getElementById("id").value = item.id;
  document.getElementById("title").value = item.title;
  document.getElementById("userId").value = item.userId;
  document.getElementById("body").value = item.body;
}

// Mostrar modal de confirmación para eliminar
function showDelete(event, item) {
  document.getElementById("dlgRemove").showModal();
  document.getElementById("textRemove").textContent =
    `Desea eliminar el elemento con ID ${item.id}`;
  document.getElementById("idRemove").value = item.id;
}

// ===========================================================
// Lógica principal al cargar la página
// ===========================================================
document.addEventListener("DOMContentLoaded", async () => {
  // URL base y creación de instancias
  const url = "https://jsonplaceholder.typicode.com/posts";
  const fetchCrud = new FetchCrud(url);
  const showInfo = new ShowInfo("table", showEdit, showDelete);

  // -----------------------------------
  // Botón "Nuevo": abre el formulario vacío
  // -----------------------------------
  document.getElementById("btnNew").addEventListener("click", () => {
    document.getElementById("frm").reset();
    document.getElementById("dlg").showModal();
  });

  // -----------------------------------
  // Botón "Cerrar" del formulario principal
  // -----------------------------------
  document.getElementById("btnClose").addEventListener("click", () => {
    document.getElementById("dlg").close();
  });

  // -----------------------------------
  // Envío del formulario (crear o editar)
  // -----------------------------------
  document.getElementById("frm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const post = {
      id: document.getElementById("id").value,
      title: document.getElementById("title").value,
      userId: document.getElementById("userId").value,
      body: document.getElementById("body").value
    };

    try {
      if (post.id) {
        // Actualizar registro existente
        const postUpdated = await fetchCrud.update(post);
        showInfo.edit(postUpdated);
      } else {
        // Crear nuevo registro
        const postCreated = await fetchCrud.create(post);
        showInfo.add(postCreated);
      }

      document.getElementById("dlg").close();
      alert("Elemento guardado correctamente");

    } catch (error) {
      console.error(error);
      alert("Error al guardar el elemento");
    }
  });

  // -----------------------------------
  // Botón "Cerrar" del diálogo de eliminación
  // -----------------------------------
  document.getElementById("btnCloseRemove").addEventListener("click", () => {
    document.getElementById("dlgRemove").close();
  });

  // -----------------------------------
  // Botón "Eliminar" (confirmación)
  // -----------------------------------
  document.getElementById("btnRemove").addEventListener("click", async () => {
    const id = document.getElementById("idRemove").value;

    try {
      await fetchCrud.delete(id);
      showInfo.remove(id);
      document.getElementById("dlgRemove").close();
      alert("Elemento eliminado correctamente");
    } catch (error) {
      console.error(error);
      alert("Error al eliminar el elemento");
    }
  });

  // -----------------------------------
  // Cargar los datos iniciales al iniciar la app
  // -----------------------------------
  const posts = await fetchCrud.getAll();
  showInfo.show(posts);
});
