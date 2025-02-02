document.getElementById('runButton').addEventListener('click', function() {
    // Отримуємо код з полів
    let htmlCode = document.getElementById('htmlCode').value;
    let cssCode = "<style>" + document.getElementById('cssCode').value + "</style>";
    let jsCode = "<script>" + document.getElementById('jsCode').value + "<\/script>";

    // Об'єднуємо HTML, CSS та JS у один документ
    let fullCode = htmlCode + cssCode + jsCode;

    // Вставляємо код у iframe
    let outputFrame = document.getElementById('output').contentWindow.document;
    outputFrame.open();
    outputFrame.write(fullCode);
    outputFrame.close();
});
