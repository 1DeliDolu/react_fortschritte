# React + Vite

Bu README dosyasındaki `<style>@import ...</style>` bloğu Google Fonts üzerinden "Open Sans" yazı tipini yüklemeye çalışır. Ancak README içinde stil etiketi kullanmak pratik değildir ve çoğu Markdown görüntüleyicisi (ör. GitHub) `<style>` içindeki kuralları uygulamayabilir veya güvenlik nedeniyle engelleyebilir. Bu nedenle fontların uygulama çalışırken beklediğiniz gibi yüklenmemesi mümkündür.

Öneriler:

- `README.md` içindeki `<style>...@import...</style>` bloğunu kaldırın; README'i belge amaçlı tutmak daha doğrudur.
- Fontları sayfa yüklemesi sırasında güvenilir ve performanslı şekilde kullanmak için projenizin `index.html` dosyasının `<head>` bölümüne aşağıdaki etiketleri ekleyin:

# React Router ile Sayfa Tasarımı — Öğrenme Kursu

Bu doküman, Vite + React kullanılarak hazırlanmış küçük eğitim projesi üzerinden adım adım React Router ve sayfa tasarımı konularını öğreten bir kurs notudur. Hedef, uygulamalı örneklerle temel kavramları öğrenmek ve küçük bir uygulama geliştirmektir.

Kurs Hedefleri

- React Router ile sayfalar arası gezinmeyi öğrenmek
- Layout (düzen) bileşenleri kullanarak ortak sayfa yapıları kurmak
- Form ve basit stil uygulamalarıyla sayfa tasarımı yapmak

Ön Koşullar

- Temel HTML, CSS bilgisi
- JavaScript ve temel React bilgisi (JSX, bileşenler)

Hızlı Kurulum

1. Bağımlılıkları yükleyin:

```bash
npm install
```

2. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

3. Üretim için paketleyin:

```bash
npm run build
```

Proje Dosya Yapısı (Öne Çıkanlar)

- `index.html` — Uygulama giriş dosyası
- `src/main.jsx` — Uygulama başlangıcı
- `src/App.jsx` — Yönlendirmeleri içeren kök bileşen
- `src/index.css` — Genel stiller (tema değişkenleri ve font import burada yer alır)
- `src/layouts/MainLayout.jsx` — Ana sayfa düzeni (header, footer vb.)
- `src/layouts/HelpLayout.jsx` — Yardım/alt sayfalar için düzen
- `src/pages/Home.jsx`, `About.jsx`, `Courses.jsx` — Temel sayfalar
- `src/pages/help/ContactPage.jsx`, `FaqPage.jsx` — Yardım alt sayfaları

Dersler / Konu Başlıkları

1. Proje yapısını inceleme ve başlatma
2. `MainLayout` içinde ortak header/navigation oluşturma
3. Sayfa bileşenleri oluşturma (`Home`, `About`, `Courses`)
4. `HelpLayout` ve alt sayfalar (`Contact`, `FAQ`) ile nested routes
5. Form gönderimi ve basit doğrulama (Contact page)
6. Stil ve tema değişkenleri (`:root`) — renk paleti ve responsive küçük düzenlemeler

Alıştırmalar

- `Courses.jsx` sayfasına yeni bir kurs kartı ekleyin ve route ile detay sayfasına bağlayın.
- `FaqPage` için bir açılır/kapalı akordeon ekleyin (basit state ile).
- Form gönderildiğinde kullanıcıya başarı mesajı gösterin; 3 saniye sonra formu sıfırlayın.

Notlar ve İpuçları

- `src/index.css` içinde Google Fonts için bir `@import` bulunur. Dokümantasyon amaçlı README içinde stil bloğu kullanmayın; uygulama çalışırken fontları güvenilir şekilde yüklemek için `index.html` içine aşağıdaki `<link>` etiketlerini ekleyebilirsiniz:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto&family=Rubik+Gemstones&family=Workbench&display=swap"
  rel="stylesheet"
/>
```

- CSS'de `font-family: "Open Sans", serif;` yerine `font-family: "Open Sans", sans-serif;` kullanılması tavsiye edilir.

Katkıda Bulunma

Projeye katkı yapmak isterseniz, yeni branch açıp PR gönderin. Küçük görevler ve alıştırmalar için `issues` altında not bırakabilirsiniz.

İletişim

Sorularınız olursa repo sahibiyle iletişime geçin.
