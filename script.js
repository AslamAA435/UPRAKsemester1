document.addEventListener('DOMContentLoaded', function() {
    
    const pesanButton = document.getElementById('pesanButton');
    pesanButton.addEventListener('click', function() {
        // Scroll ke bagian menu saat tombol diklik
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });

    // 2. Validasi Formulir Kontak Sederhana
    const kontakForm = document.getElementById('kontakForm');
    const formFeedback = document.getElementById('formFeedback');

    kontakForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nama = document.getElementById('nama').value.trim();
        const pesan = document.getElementById('pesan').value.trim();

        if (nama == '' || pesan == '') {;
        } else {
            // Log data ke konsol (Simulasi pengiriman data)
            console.log('Nama:', nama);
            console.log('Pesan:', pesan);

            // Berikan feedback ke pengguna
            formFeedback.textContent = ` Pesan dari ${nama} berhasil dikirim! Kami akan segera menghubungi Anda.`;
            
            // Reset form
            kontakForm.reset();

            // Opsional: pop-up alert
            alert(`Terima kasih, ${nama}! Pesan Anda telah kami terima.`);
        }
    });

    // Fungsi ini akan menambahkan kelas 'active' pada link navigasi
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Gunakan offset - 100px agar link aktif sebelum mencapai section persis
            if (pageYOffset >= sectionTop - 100) { 
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

});