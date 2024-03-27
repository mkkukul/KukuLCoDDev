// Initial References
const newTaskInput = document.querySelector("#new-task input"); // Yeni görev girişini seç
const tasksDiv = document.querySelector("#tasks"); // Görevleri içeren bölümü seç
let deleteTasks, editTasks, tasks; // Silme, düzenleme ve görevleri saklayacak değişkenler
let updateNote = ""; // Güncelleme notu
let count; // Görev sayacı

// Pencere yüklendiğinde çalışacak işlev
window.onload = () => {
  updateNote = ""; // Güncelleme notunu sıfırla
  count = Object.keys(localStorage).length; // localStorage'daki tüm anahtarları say
  displayTasks(); // Görevleri görüntüle
};

// Görevleri görüntülemek için işlev
const displayTasks = () => {
  // localStorage'da en az bir anahtar varsa görevleri göster, yoksa gizle
  if (Object.keys(localStorage).length > 0) {
    tasksDiv.style.display = "inline-block";
  } else {
    tasksDiv.style.display = "none";
  }

  // Görevleri temizle
  tasksDiv.innerHTML = "";

  // localStorage'daki tüm anahtarları al ve sırala
  let tasks = Object.keys(localStorage);
  tasks = tasks.sort();

  for (let key of tasks) {
    let classValue = "";

    // Tüm değerleri al
    let value = localStorage.getItem(key);
    let taskInnerDiv = document.createElement("div");
    taskInnerDiv.classList.add("task");
    taskInnerDiv.setAttribute("id", key);
    taskInnerDiv.innerHTML = `<span id="taskname">${key.split("_")[1]}</span>`;

    // localStorage, boolean değerleri dizgi olarak sakladığından geri dönüştürüyoruz
    let editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    if (!JSON.parse(value)) {
      editButton.style.visibility = "visible";
    } else {
      editButton.style.visibility = "hidden";
      taskInnerDiv.classList.add("completed");
    }
    taskInnerDiv.appendChild(editButton);
    taskInnerDiv.innerHTML += `<button class="delete"><i class="fa-solid fa-trash"></i></button>`;
    tasksDiv.appendChild(taskInnerDiv);
  }

  // Tamamlanan görevler
  tasks = document.querySelectorAll(".task");
  tasks.forEach((element, index) => {
    element.onclick = () => {
      // localStorage'ı güncelle
      if (element.classList.contains("completed")) {
        updateStorage(element.id.split("_")[0], element.innerText, false);
      } else {
        updateStorage(element.id.split("_")[0], element.innerText, true);
      }
    };
  });

  // Görevleri Düzenle
  editTasks = document.getElementsByClassName("edit");
  Array.from(editTasks).forEach((element, index) => {
    element.addEventListener("click", (e) => {
      // Dış elementlere yayılma önlemek için durdur
      e.stopPropagation();
      // Bir görev düzenlenirken diğer düzenleme düğmelerini devre dışı bırak
      disableButtons(true);
      // Giriş değerini güncelle ve div'i kaldır
      let parent = element.parentElement;
      newTaskInput.value = parent.querySelector("#taskname").innerText;
      // Güncelleme notunu düzenlenen görev olarak ayarla
      updateNote = parent.id;
      // Görevi kaldır
      parent.remove();
    });
  });

  // Görevleri Sil
  deleteTasks = document.getElementsByClassName("delete");
  Array.from(deleteTasks).forEach((element, index) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
      // localStorage'dan kaldır ve div'i kaldır
      let parent = element.parentElement;
      removeTask(parent.id);
      parent.remove();
      count -= 1;
    });
  });
};

// Düzenle düğmesini devre dışı bırak
const disableButtons = (bool) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};

// localStorage'dan Görevi Kaldır
const removeTask = (taskValue) => {
  localStorage.removeItem(taskValue);
  displayTasks();
};

// localStorage'a Görev Ekle
const updateStorage = (index, taskValue, completed) => {
  localStorage.setItem(`${index}_${taskValue}`, completed);
  displayTasks();
};

// Yeni Görev Eklemek İçin İşlev
document.querySelector("#push").addEventListener("click", () => {
  // Düzenle düğmesini etkinleştir
  disableButtons(false);
  if (newTaskInput.value.length == 0) {
    alert("Lütfen Bir Görev Girin");
  } else {
    // Yerel olarak sakla ve yerel depodan görüntüle
    if (updateNote == "") {
      // Yeni görev
      updateStorage(count, newTaskInput.value, false);
    } else {
      // Görevi güncelle
      let existingCount = updateNote.split("_")[0];
      removeTask(updateNote);
      updateStorage(existingCount, newTaskInput.value, false);
      updateNote = ""; // Güncelleme notunu sıfırla
    }
    count += 1; // Görev sayacını artır
    newTaskInput.value = ""; // Giriş değerini sıfırla
  }
});
