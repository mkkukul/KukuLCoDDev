// 'push' ID'sine sahip butona tıklanıldığında çalışacak fonksiyon. Bu satır, HTML içindeki push ID'li bir butona tıklanıldığında çalışacak kodları tanımlar.
document.querySelector('#push').onclick = function() {

    // Eğer yeni görev için input alanı boşsa: Bu satır, newtask ID'li eleman içerisindeki input alanının değerinin uzunluğunu kontrol eder. Eğer bu alan boşsa (uzunluğu 0 ise) bir uyarı mesajı gösterilir.
    if (document.querySelector('#newtask input').value.length == 0) {
        
        // Kullanıcıya bir uyarı mesajı gösterir.Eğer yukarıdaki koşul sağlanırsa, kullanıcıya bir görev girmesi gerektiğini belirten bir uyarı penceresi gösterilir.
        alert("Please Enter a Task");
      
    } else {
      
        // 'tasks' ID'sine sahip div'in içine yeni bir görev öğesi ekler. Eğer input alanı boş değilse, aşağıdaki işlemler gerçekleştirilir.
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

        // Tüm silme butonlarına tıklama olayını ekler. Bu bölümde, tasks ID'li elemanın HTML içeriğine yeni bir görev eklenir. Görev, input alanından alınan değeri ve bir silme butonu içerir.
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                // Tıklanan butonun üst divini (görev öğesini) kaldırır. Tüm görev silme butonlarına tıklama olayı eklenir. Her butona tıklandığında, o görevi içeren ana eleman (parent element) DOM'dan kaldırılır.
                this.parentNode.remove();
            }
        }

        // Tüm görev öğelerine tıklama olayını ekler.
        var tasks = document.querySelectorAll(".task");
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                // Tıklanan görev öğesinin tamamlanmış mı olduğunu kontrol eder ve durumunu değiştirir.
                this.classList.toggle('completed');
            }
        }

        // Input alanını temizler, yeni bir görev eklemeye hazır hale getirir. Tüm görevlere tıklama olayı eklenir. Göreve tıklandığında, görevin üzerine çizgi çekilerek tamamlandı olarak işaretlenir veya işareti kaldırılır.
        document.querySelector("#newtask input").value = "";
    }
}
