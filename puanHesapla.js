function vizeHesapla(puan, agirlik) { // Vize Puanını Hesaplayan Fonksiyon
    return (puan * agirlik) / 100;
}

function finalHesapla(puan, agirlik) { // Final Puanını Hesaplayan Fonksiyon
    return (puan * agirlik) / 100;
}

function projeHesapla(puan, agirlik) { // Proje Puanını Hesaplayan Fonksiyon
    return (puan * agirlik) / 100;
}

function genelToplam(vize, final, proje) { // Genel Toplam Puanı Hesaplayan Fonksiyon
    return vize + final + proje;
}

function harfNotuHesapla(puan) {
    if (puan < 35) {
        return "FF";
    }
    else if (puan >= 35 && puan < 50) {
        return "FD";
    }
    else if (puan >= 50 && puan < 58) {
        return "DD";
    }
    else if (puan >= 58 && puan < 65) {
        return "DC";
    }
    else if (puan >= 65 && puan < 75) {
        return "CC";
    }
    else if (puan >= 75 && puan < 80) {
        return "CB";
    }
    else if (puan >= 80 && puan < 85) {
        return "BB";
    }
    else if (puan >= 85 && puan < 90) {
        return "BA";
    }
    else {
        return "AA";
    }
}

function notMetinUret(harf) {
    switch (harf) {
        case "AA": return "Harikasın!";
        case "BA": return "Çok Başarılı!";
        case "BB": return "Başarılı!";
        case "CB": return "İyi!";
        case "CC": return "Geçerli!";
        case "DC": return "Koşullu Geçer!";
        case "DD": return "Koşullu Geçer(Düşük)!";
        case "FD": return "Başarısız!";
        case "FF": return "Rezalet!";
        default: return "";
    }
}

function puanHesapla() { // Programı Çalıştıran Ana Fonksiyon

    // Vize ile ilgili değerleri kullanıcıdan alıyor ve vize puanını hesaplıyoruz.
    let vizePuan = Number(prompt("Vize puanınızı giriniz:"));
    let vizeOran = Number(prompt("Vize sınavının ağırlığını giriniz (% kullanmayın):"));
    let vizeToplam = vizeHesapla(vizePuan, vizeOran);

    // Final ile ilgili değerleri kullanıcıdan alıyor ve final puanını hesaplıyoruz.
    let finalPuan = Number(prompt("Final puanınızı giriniz:"));
    let finalOran = Number(prompt("Final sınavının ağırlığını giriniz (% kullanmayın):"));
    let finalToplam = finalHesapla(finalPuan, finalOran);

    // Proje ile ilgili değerleri kullanıcıdan alıyor ve proje puanını hesaplıyoruz.
    let projePuan = Number(prompt("Proje puanınızı giriniz:"));
    let projeOran = Number(prompt("Projenizin ders toplam puanına olan ağırlığını giriniz (% kullanmayın):"));
    let projeToplam = projeHesapla(projePuan, projeOran);

    // Aldığımız vize, final ve proje puanları kendi ağırlıklarına göre hesaplandı ve genel toplama ulaşıyoruz.
    let genelToplamPuan = genelToplam(vizeToplam, finalToplam, projeToplam);

    // Aldığımız Toplam Puana göre harf notu karşılığını kaydediyoruz.
    let harfNotu = harfNotuHesapla(genelToplamPuan);

    // Sahip olduğumuz harf notlarının metinsel bir karşlığını alıyoruz.
    let notMetni = notMetinUret(harfNotu);

    // Kullanıcıya sonuçları gösteriyoruz.
    alert(`Ders Puan Bilgileriniz: \n${genelToplamPuan} - ${harfNotu} - ${notMetni}`);
    if (confirm("Programı kullandığınız için teşekkürler. Devam etmek istiyor musunuz?")) {
        puanHesapla();
    }
    else {
        alert("Görüşmek Üzere :)");
    }
}

alert("Üniversite Puan Hesaplayıcıya Hoşgeldiniz! :)"); // Karşılama mesajımız.

puanHesapla();