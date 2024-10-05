document.getElementById('loginButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi username dan password
    const validUsername = 'slebew'; // Username yang valid
    const validPassword = 'alok'; // Password yang valid

    if (username === validUsername && password === validPassword) {
        alert('Login berhasil!');

        // Menampilkan bagian pengecekan angka
        document.querySelector('.number-checker').classList.remove('hidden');
        document.getElementById('numberInput').disabled = false; // Mengaktifkan input angka
        document.getElementById('checkType').disabled = false;  // Mengaktifkan dropdown
        document.getElementById('checkButton').disabled = false; // Mengaktifkan tombol cek
    } else {
        alert('Username atau password salah.');
    }
});

document.getElementById('checkButton').addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    const checkType = document.getElementById('checkType').value;

    if (numberInput === '') {
        resultDiv.textContent = 'Silakan masukkan angka.';
        resultDiv.classList.remove('visible');
        return;
    }

    const number = parseInt(numberInput);

    if (isNaN(number)) {
        resultDiv.textContent = 'Input bukan angka yang valid.';
        resultDiv.classList.remove('visible');
        return;
    }

    switch (checkType) {
        case 'ganjil':
            if (number % 2 === 0) {
                resultDiv.textContent = `${number} adalah angka genap.`;
            } else {
                resultDiv.textContent = `${number} adalah angka ganjil.`;
            }
            break;

        case 'genap':
            if (number % 2 === 0) {
                resultDiv.textContent = `${number} adalah angka genap.`;
            } else {
                resultDiv.textContent = `${number} bukan angka genap.`;
            }
            break;

        case 'positif':
            if (number > 0) {
                resultDiv.textContent = `${number} adalah bilangan bulat positif.`;
            } else {
                resultDiv.textContent = `${number} bukan bilangan bulat positif.`;
            }
            break;

        default:
            resultDiv.textContent = 'Silakan pilih tipe pengecekan.';
            break;
    }
    
    // Tambahkan kelas untuk menampilkan hasil dengan efek
    resultDiv.classList.add('visible');
});
