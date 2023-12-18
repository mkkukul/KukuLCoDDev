document.addEventListener('DOMContentLoaded', function() {
    openContent('7thGrade'); // Sayfa ilk açıldığında 7. sınıf içeriğini göster
});

function openContent(grade) {
    const contentElements = document.querySelectorAll('.content');
    contentElements.forEach((element) => {
        element.style.display = 'none';
    });

    const selectedContent = document.getElementById(`${grade}Content`);
    selectedContent.style.display = 'flex';
}
