/**
 * @author Dwiky
 * Form Contact Us - Ambil data form & tampilkan hasilnya
 */

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContactUs");
    const resultContainer = document.getElementById("contactResult");

    initContactForm(form, resultContainer);
});

/**
 * Inisialisasi form contact us
 * @param {HTMLFormElement} formEl - Elemen form
 * @param {HTMLElement} resultEl - Elemen untuk menampilkan hasil
 */
function initContactForm(formEl, resultEl) {
    formEl.addEventListener("submit", function (event) {
        event.preventDefault(); // cegah reload halaman

        // Ambil nilai form
        const formValue = {
            namaLengkap: formEl.querySelector("#nama_lengkap").value.trim(),
            tanggalLahir: formEl.querySelector("#date_of_birth").value,
            gender: formEl.querySelector("input[name='gender']:checked")?.value || "-",
            pesan: formEl.querySelector("#message").value.trim()
        };

        // Buat tampilan hasil
        resultEl.innerHTML = createHtmlResult(formValue);

        // Hilangkan kelas jika ada
        resultEl.classList.remove('result-empty');

        const welcomeNameContainer = document.getElementById("welcome-name");

        // Append text from namaLengkap to welcomeNameContainer
        welcomeNameContainer.innerHTML = `${formValue.namaLengkap}`;
    });
}


function createHtmlResult(data){

    const returnHtml = `
    <h4>Hasil Form</h4>
    <ul>
        <li><strong>Nama:</strong> ${data.namaLengkap}</li>
        <li><strong>Tanggal Lahir:</strong> ${data.tanggalLahir}</li>
        <li><strong>Jenis Kelamin:</strong> ${data.gender}</li>
        <li><strong>Pesan:</strong> ${data.pesan}</li>
    </ul>
    `;

    return returnHtml
}
