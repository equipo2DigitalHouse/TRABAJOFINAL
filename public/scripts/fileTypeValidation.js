document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', event => {
        const fileInput = document.getElementById('img_validation');
        const errorMessage = document.getElementById('error-message');

        if (fileInput.files.length === 0) {

            return;
        }

        if (!/\.(jpg|jpeg|png|gif)$/i.test(fileInput.files[0].name)) {
            errorMessage.style.display = 'block';
            event.preventDefault();
        }
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     var form = document.querySelector('form');

//     form.addEventListener('submit', function (event) {
//         var fileInput = document.querySelector('input[type="file"]');
//         var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

//         if (!allowedExtensions.exec(fileInput.value)) {
//             alert('Por favor, selecciona un archivo de imagen válido (JPG, JPEG, PNG, GIF).');
//             event.preventDefault(); // Evita que el formulario se envíe si la validación falla
//         }
//     });
// });
