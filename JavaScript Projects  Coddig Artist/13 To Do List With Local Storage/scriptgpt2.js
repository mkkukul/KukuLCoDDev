// Yeni görev girişini seç
const newTaskInput = document.querySelector("#new-task input");

// Görevleri içeren bölümü seç
const tasksDiv = document.querySelector("#tasks");

// Silme, düzenleme ve görevleri saklayacak değişkenleri tanımla
let deleteTasks, editTasks, tasks;

// Görevleri güncelleme notunu temsil eden değişkeni boş bir dizeyle başlat
let updateNote = "";

// Görev sayısını saklayacak değişkeni tanımla
let count;

// Sayfa yüklendiğinde yapılacak işlemleri belirt
window.onload = () => {
  // Görevleri güncelleme notunu sıfırla
  updateNote = "";

  // localStorage'daki görev sayısını al ve sakla
  count = Object.keys(localStorage).length;

  // Görevleri görüntüle fonksiyonunu çağır
  displayTasks();
};
