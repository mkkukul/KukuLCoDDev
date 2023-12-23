// 'push' ID'li butona tıklama olayı ekleme
document.querySelector('#push').onclick = function() {
    // Input alanının değerinin boş olup olmadığını kontrol etme
    if (document.querySelector('#newtask input').value.length == 0) {
        // Eğer input boşsa, kullanıcıya uyarı gösterme
        alert("Lütfen bir görev girin");
    } else {
        // Eğer input doluysa, görevi 'tasks' konteynerine ekleme
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        // Tüm silme butonlarına olay dinleyici ekleme
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                // Butona tıklandığında görevi kaldırma
                this.parentNode.remove();
            }
        }

        // Tüm görevlere tamamlandı özelliği ekleyecek olay dinleyici ekleme
        var tasks = document.querySelectorAll(".task");
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                // Göreve tıklanıldığında 'completed' sınıfını ekleyip kaldırma
                this.classList.toggle('completed');
            }
        }

        // Görev ekledikten sonra input alanını temizleme
        document.querySelector("#newtask input").value = "";
    }
}
