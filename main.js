const quotes = [
    "dunia ini terus berubah setiap detik dan manusia harus belajar beradaptasi dengan keadaan yang baru karena siapa yang tidak mampu berubah akan tertinggal dan akhirnya tergilas oleh zaman yang semakin cepat penuh kejutan dan tantangan yang tak pernah habis di setiap sudut kehidupan yang terus bergerak maju tanpa henti",
    "sejarah mencatat bahwa peradaban besar runtuh bukan hanya karena perang tetapi juga karena kesombongan para pemimpinnya yang tidak mendengarkan rakyat hingga akhirnya kekuasaan mereka hancur perlahan dan digantikan oleh kekuatan yang lebih bijak mampu memimpin dengan hati nurani rasa kemanusiaan dan keadilan bagi semua orang",
    "alam semesta sangat luas dan penuh misteri bahkan sampai hari ini para ilmuwan belum mampu sepenuhnya memahami bagaimana semua itu bermula dan apa yang akan terjadi ketika bintang bintang habis terbakar dan kegelapan abadi menyelimuti seluruh ruang hampa yang terbentang tanpa ujung dalam dimensi yang belum pernah dijelajahi manusia",
    "banyak orang mengejar kesuksesan tanpa tahu arti sukses bagi dirinya sendiri mereka terjebak dalam harapan orang lain sampai lupa siapa mereka sebenarnya dan akhirnya kehilangan arah dalam perjalanan hidup yang mereka jalani penuh kebingungan dan kelelahan sampai merasa hampa dan tidak bahagia dalam hatinya yang terdalam",
    "mitos tentang naga penjaga harta karun di gunung tinggi masih dipercaya oleh sebagian masyarakat sebagai simbol kekuatan pelindung alam dan nilai nilai kuno yang tidak boleh dilupakan meskipun dunia sudah berubah menjadi modern dan teknologi telah menghapus banyak cerita lama dari ingatan dan sejarah nenek moyang kita yang berharga",
    "hujan turun lembut membasahi bumi membawa harapan baru bagi tanaman yang layu dan manusia yang letih seakan alam mengerti semua makhluk membutuhkan jeda untuk bernapas dari panasnya hidup yang kadang menyengat seperti api yang terus membakar semangat tanpa henti hingga akhirnya kita merasa lelah dan perlu beristirahat sejenak",
    "tidak ada perjalanan yang benar benar mudah semua membutuhkan usaha dan kesabaran karena dalam setiap langkah ada pelajaran tersembunyi kadang kita baru menyadari artinya ketika sudah jauh berjalan dan tidak bisa kembali ke masa lalu hanya bisa menatap masa depan dengan harapan baru dan tekad yang kuat untuk maju terus",
    "laut menyimpan banyak rahasia mulai dari kapal karam sampai kota kota yang hilang ditelan ombak dan waktu para penyelam berani menyelam ke kedalamannya untuk mencari kisah lama yang tertinggal di antara pasir dan bebatuan dasar samudra tempat sunyi yang menyimpan sejarah masa lalu dan misteri yang belum terpecahkan hingga kini",
    "di balik setiap kegagalan ada pelajaran berharga yang menunggu untuk ditemukan namun banyak orang memilih menyerah sebelum sempat belajar padahal kegagalan bisa menjadi guru terbaik jika kita mau terbuka dan tidak larut dalam rasa putus asa sebab kesuksesan hanya datang kepada mereka yang tidak pernah menyerah dan selalu berusaha",
    "saat malam tiba langit berubah menjadi panggung bagi bintang bintang yang menari dan bulan yang tersenyum semua itu mengingatkan kita bahwa keindahan tidak selalu bersinar terang kadang muncul justru dalam kegelapan yang sunyi penuh ketenangan yang tidak bisa ditemukan di siang hari yang sibuk dan penuh kebisingan kehidupan manusia modern",
    "banyak hal di dunia ini tidak bisa dijelaskan hanya dengan logika karena perasaan dan intuisi juga berperan penting dalam mengambil keputusan hidup kadang hati lebih tahu arah yang benar dibandingkan pikiran yang dipenuhi keraguan dan ketakutan yang sering kali membuat kita tersesat dalam langkah dan pilihan yang kita ambil setiap hari",
    "seorang petani bangun pagi bekerja tanpa lelah di bawah terik matahari agar keluarganya bisa makan dan hidup layak mereka adalah pahlawan tanpa tanda jasa yang sering dilupakan oleh dunia yang sibuk mengejar kemewahan dan gengsi tanpa pernah memikirkan arti kerja keras sebenarnya yang sering dianggap remeh padahal sangat mulia",
    "masa depan tidak pernah pasti tapi kita bisa menyiapkan diri dengan belajar dari kesalahan dan tidak mengulangi kebodohan yang sama seperti kemarin karena hidup adalah proses panjang bukan tentang siapa yang cepat tapi siapa yang konsisten dan sabar dalam menghadapi rintangan yang datang menghadang di setiap langkah perjalanan",
    "pohon pohon tua di hutan menyimpan cerita ratusan tahun tentang badai yang pernah datang dan pergi burung burung yang pernah bersarang dan manusia yang datang lalu pergi meninggalkan jejak kecil di antara akar dan daun yang tetap hidup menyaksikan waktu berjalan dan perubahan yang terjadi tanpa pernah mengeluh atau menyerah pada nasib",
    "kadang hal hal kecil yang terlihat sepele justru membawa kebahagiaan besar seperti senyum dari orang asing pelukan dari teman atau ucapan semangat tulus saat kita hampir menyerah hal kecil itu menjadi cahaya di tengah gelapnya hari yang membuat kita terus berjalan walau lelah dan penuh keraguan dalam hati",
    "mimpi tidak akan pernah menjadi nyata jika hanya disimpan dalam pikiran semua butuh langkah nyata dan keberanian untuk memulai meski perlahan tidak ada jalan instan menuju keberhasilan semua dimulai dari tekad kecil yang tumbuh menjadi besar seiring waktu dan keyakinan bahwa semua hal besar berasal dari usaha yang tidak kenal lelah",
    "di dunia ini setiap orang memiliki jalan hidup yang berbeda tidak semua harus berlomba menjadi yang tercepat karena yang terpenting adalah tetap melangkah meski perlahan tetap bergerak meski lelah dan tetap percaya meski sering gagal karena pada akhirnya keberhasilan datang kepada mereka yang tidak berhenti berjuang meski dunia terasa berat",
    "waktu berjalan tanpa menunggu siapa pun dan kesempatan tidak selalu datang dua kali maka gunakan setiap detik dengan bijak jangan terlalu lama menyesali masa lalu karena hari ini bisa menjadi awal yang baru jika kita mau berubah dan belajar dari kesalahan tidak ada kata terlambat untuk menjadi versi terbaik dari diri sendiri",
    "langit biru yang luas mengingatkan kita bahwa harapan selalu ada sejauh apa pun masalah yang kita hadapi tetap ada ruang untuk bernapas tetap ada cahaya di balik awan kelabu hidup memang tidak selalu cerah namun bukan berarti kita tidak bisa menemukan keindahan di dalam hujan yang jatuh dengan tenang dan lembut",
    "ketika seseorang tersenyum di tengah kesulitan itu bukan karena hidupnya mudah tetapi karena ia kuat cukup untuk terus melangkah meski dihantam masalah orang yang benar benar kuat bukan yang tidak pernah jatuh tetapi yang selalu bangkit setiap kali terjatuh dan terus melangkah walau dunia seolah tidak memihak kepadanya"
]

const quoteElement = document.getElementById("quote");
const userInput = document.getElementById("quote-input");
const startTestBtn = document.getElementById("start-test");
const stopTestBtn = document.getElementById("stop-test");
const result = document.querySelector(".result");

let currentQuote = "";
let timeLeft = 60;
let timer = null;
let mistakes = 0;
let isTyping = false;

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--
        document.getElementById("timer").textContent = timeLeft + " detik"
        let correctChars = userInput.value.length - mistakes
        let wpm = Math.round((correctChars / 5) / (60 - timeLeft) * 60)
        document.getElementById("wpm").textContent = wpm + " WPM"
    } else {
        finishTest()
    }
}

function finishTest() {
    clearInterval(timer)
    userInput.disabled = true

    let correctChars = userInput.value.length - mistakes
    let wpm = Math.round((correctChars / 5) / (60 - timeLeft) * 60)
    let accuracy = Math.round(((userInput.value.length - mistakes) / userInput.value.length) * 100)

    result.style.display = "block"
    document.getElementById("wpm").textContent = wpm + " WPM"
    document.getElementById("accuracy").textContent = accuracy + "%"
    document.getElementById("mistakes").textContent = mistakes + " huruf"
}

function renderNewQuote() {
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteElement.textContent = currentQuote
}

userInput.addEventListener("input", () => {
    if (!isTyping) {
        timer = setInterval(updateTimer, 1000)
        isTyping = true
    }

    let currentInput = userInput.value
    let currentQuoteChars = currentQuote.split("")
    let typedChars = currentInput.split("")

    mistakes = 0

    typedChars.forEach((char, index) => {
        if (char !== currentQuoteChars[index]) {
            mistakes++
        }
    })

    if (currentInput === currentQuote) {
        finishTest()
        return
    }

    document.getElementById("mistakes").textContent = mistakes

    let accuracy = ((typedChars.length - mistakes) / typedChars.length) * 100
    if (!typedChars.length) accuracy = 0
    document.getElementById("accuracy").textContent = Math.round(accuracy) + "%"
})

startTestBtn.addEventListener("click", () => {
    userInput.value = "";
    userInput.disabled = false;
    isTyping = false;
    timeLeft = 60;
    mistakes = 0;
    timer = null;
    renderNewQuote();
    document.getElementById("timer").textContent = timeLeft;
    document.getElementById("mistakes").textContent = "0";
    document.getElementById("wpm").textContent = "0 WPM";
    document.getElementById("accuracy").textContent = "0%";
    result.style.display = "none";
});

stopTestBtn.addEventListener("click", finishTest);

window.addEventListener("load", () => {
    renderNewQuote();
    userInput.disabled = true;
});