document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phoneNumber: document.getElementById('phoneNumber').value
    };

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Başvurunuz başarıyla gönderildi!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Başvurunuz gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    });
});


// Hedef tarihi belirle (örneğin, 31 Aralık 2024 00:00:00)
const targetDate = new Date("Oct 8, 2024 21:30:00").getTime();

// Geri sayım işlevi
const countdown = setInterval(() => {
    // Şu anki zamanı al
    const now = new Date().getTime();

    // Hedef tarihe kalan süreyi hesapla
    const distance = targetDate - now;

    // Gün, saat, dakika ve saniyeyi hesapla
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hesaplanan değerleri HTML elemanlarına yaz
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Geri sayım bittiğinde yapılacak işlemler
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerText = "Maç Başladı!";
    }
}, 1000);


;
