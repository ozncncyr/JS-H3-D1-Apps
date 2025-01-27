alert("Üniversite Puan Hesaplayıcıya Hoşgeldiniz! :)"); // Karşılama mesajımız.

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
}