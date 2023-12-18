function openContent(grade) {
    const contentElements = document.querySelectorAll('.content');
    contentElements.forEach((element) => {
        element.style.display = 'none';
    });

    const selectedContent = document.getElementById(`${grade}Content`);
    selectedContent.style.display = 'flex';
}

function openSubContent(subContent) {
    alert(`Opening ${subContent}`);
    // Implement the logic to open sub-content here
}
