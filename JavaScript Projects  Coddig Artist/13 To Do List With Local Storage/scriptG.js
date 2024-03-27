// Initial References
const newTaskInput = document.querySelector("#new-task input"); // Yeni görev girişini seç
const tasksDiv = document.querySelector("#tasks"); // Görevleri içeren bölümü seç
let deleteTasks, editTasks, tasks; // Silme, düzenleme ve görevleri saklayacak değişkenler
let updateNote = ""; // Güncelleme notu
let count; // Görev sayacı

// Pencere yüklendiğinde çalışacak işlev
window.onload = () => {
  // **Neden:** Pencere yüklendiğinde görevlerin güncellenmesi ve görüntülenmesi gerekir.
  updateNote = ""; // **Ne:** Güncelleme notunu sıfırla
  count = Object.keys(localStorage).length; // **Ne:** localStorage'daki tüm anahtarları say
  displayTasks(); // **Ne:** Görevleri görüntüle
};

// Görevleri görüntülemek için işlev
const displayTasks = () => {
  // **Neden:** Görevlerin ekranda gösterilmesi gerekir.
  // **Nasıl:**
  // **1.** localStorage'da en az bir anahtar varsa görevleri göster, yoksa gizle
  if (Object.keys(localStorage).length > 0) {
    tasksDiv.style.display = "inline-block";
  } else {
    tasksDiv.style.display = "none";
  }

  // **2.** Görevleri temizle
  tasksDiv.innerHTML = "";

  // **3.** localStorage'daki tüm anahtarları al ve sırala
  let tasks = Object.keys(localStorage);
  tasks = tasks.sort();

  // **4.** Her bir görev için:
  for (let key of tasks) {
    let classValue = "";

    // **5.** Tüm değerleri al
    let value = localStorage.getItem(key);
    let taskInnerDiv = document.createElement("div");
    taskInnerDiv.classList.add("task");
    taskInnerDiv.setAttribute("id", key);
    taskInnerDiv.innerHTML = `<span id="taskname">${key.split("_")[1]}</span>`;

    // **6.** localStorage, boolean değerleri dizgi olarak sakladığından geri dönüştürüyoruz
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

  // **7.** Tamamlanan görevler
  tasks = document.querySelectorAll(".task");
  tasks.forEach((element, index) => {
    element.onclick = () => {
      // **Neden:** Görev tıklandığında tamamlanma veya aktif hale gelme işlevi gerekir.
      // **Nasıl:**
      // **1.** localStorage'ı güncelle
      if (element.classList.contains("completed")) {
        updateStorage(element.id.split("_")[0], element.innerText, false);
      } else {
        updateStorage(element.id.split("_")[0], element.innerText, true);
      }
    };
  });

  // **8.** Görevleri Düzenle
  editTasks = document.getElementsByClassName("edit");
  Array.from(editTasks).forEach((element, index) => {
    element.addEventListener("click", (e) => {
      // **Neden:** Düzenleme düğmesine tıklandığında ilgili görevin düzenlenmesi gerekir.
      // **Nasıl:**
      // **1.** Dış elementlere yayılma önlemek için durdur
      e.stopPropagation();
      // **2.** Bir görev düzenlenirken diğer düzenleme düğmelerini devre dışı bırak
      disableButtons(true);
      // **3.** Giriş değerini güncelle ve div'i kaldır
      let parent = element.parentElement;
      newTaskInput.value = parent.querySelector("#taskname").innerText;
      // **4.** Güncelleme notunu düzenlenen görev olarak ayarla
      updateNote = parent.id;
      // **5.** Görevi kaldır
        parent.remove();
    });
});

// **9.** Görevleri Sil
deleteTasks = document.getElementsByClassName("delete");
Array.from(deleteTasks).forEach((element, index) => {
element.addEventListener("click", (e) => {
  // **Neden:** Silme düğmesine tıklandığında ilgili görevin silinmesi gerekir.
  // **Nasıl:**
  // **1.** Yayılmayı durdur
  e.stopPropagation();
  // **2.** localStorage'dan kaldır ve div'i kaldır
  let parent = element.parentElement;
  removeTask(parent.id);
  parent.remove();
  count -= 1;
});
});
};

// Düzenle düğmesini devre dışı bırak
const disableButtons = (bool) => {
// **Neden:** Bir görev düzenlenirken diğer görevlerin düzenlenmesini engellemek gerekir.
// **Nasıl:**
let editButtons = document.getElementsByClassName("edit");
Array.from(editButtons).forEach((element) => {
element.disabled = bool;
});
};

// localStorage'dan Görevi Kaldır
const removeTask = (taskValue) => {
// **Neden:** Görev silindiğinde localStorage'dan da silinmesi gerekir.
// **Nasıl:**
localStorage.removeItem(taskValue);
displayTasks();
};

// localStorage'a Görev Ekle
const updateStorage = (index, taskValue, completed) => {
// **Neden:** Yeni bir görev eklendiğinde veya bir görev güncellendiğinde localStorage'a kaydedilmesi gerekir.
// **Nasıl:**
localStorage.setItem(`${index}_${taskValue}`, completed);
displayTasks();
};

// Yeni Görev Eklemek İçin İşlev
document.querySelector("#push").addEventListener("click", () => {
// **Neden:** Yeni görev ekleme düğmesine tıklandığında yeni bir görev eklenmesi gerekir.
// **Nasıl:**
// **1.** Düzenleme düğmesini etkinleştir
disableButtons(false);

if (newTaskInput.value.length == 0) {
alert("Lütfen Bir Görev Girin");
} else {
// **2.** Yerel olarak sakla ve yerel depodan görüntüle
if (updateNote == "") {
  // **Yeni görev**
  updateStorage(count, newTaskInput.value, false);
} else {
  // **Görevi güncelle**
  let existingCount = updateNote.split("_")[0];
  removeTask(updateNote);
  updateStorage(existingCount, newTaskInput.value, false);
  updateNote = ""; // **Güncelleme notunu sıfırla**
}
count += 1; // **Görev sayacını artır**
newTaskInput.value = ""; // **Giriş değerini sıfırla**
}
});

