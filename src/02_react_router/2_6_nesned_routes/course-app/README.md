# React + Vite

## Nested Routes Açıklaması (Türkçe)

Bu örnek projede nested (iç içe) rotalar React Router kullanılarak `src/App.jsx` içinde tanımlanmıştır. Özetle:

- **Parent layout**: `src/layouts/MainLayout.jsx` kök rota (`/`) için kullanılır ve içinde bir `Outlet` bileşeni bulunur. Bu `Outlet` parent rota altındaki çocuk rota içeriklerini render eder.
- **Alt layout**: `src/layouts/HelpLayout.jsx` `help` rotası için özel bir layout sağlar; o da kendi içinde bir `Outlet` içerir, böylece `/help` altındaki sayfalar burada gösterilir.
- **Child sayfalar**: `src/pages/help/ContactPage.jsx` ve `src/pages/help/FaqPage.jsx` gibi bileşenler `help` rotasının çocuklarıdır.

Nasıl çalışır:

- URL `/help/faq` ziyareti sırasında React Router önce `MainLayout`'i render eder (kök layout). `MainLayout` içindeki `<Outlet />` `HelpLayout`'i yerleştirir. `HelpLayout` içindeki `<Outlet />` ise `FaqPage` bileşenini render eder. Sonuç olarak sayfa, `MainLayout` > `HelpLayout` > `FaqPage` hiyerarşisiyle görünür.

Örnek rota ağacı:

- `/` -> `MainLayout` -> index -> `Home`
- `/about` -> `MainLayout` -> `About`
- `/courses` -> `MainLayout` -> `Courses`
- `/help` -> `MainLayout` -> `HelpLayout` -> index -> `Contact`
- `/help/contact` -> `HelpLayout` -> `Contact`
- `/help/faq` -> `HelpLayout` -> `Faq`

Önemli notlar:

- `index: true` ile tanımlanan rota, parent yoluna tam eşleşme olduğunda gösterilir (ör. `/help` için index `ContactPage`).
- `Link` veya `NavLink` içinde `to="contact"` gibi relative (göreli) yollar kullanıldığında, bulunduğu parent rotaya göre (`/help`) tam yol oluşturulur => `/help/contact`.
- `NavLink to="/" end` kullanımı, kök linkinin kısmi eşleşmelerde aktif görünmesini önler.

Nasıl yeni bir nested rota eklersiniz (örnek):

1. `src/pages/help/TeamPage.jsx` adında bir bileşen oluşturun.
2. `src/App.jsx` içindeki `help` children array'ine şu satırı ekleyin:

```js
{ path: "team", element: <TeamPage /> }
```

3. `HelpLayout` içindeki navigasyona `Link to="team"` ekleyin.

Geliştirme sunucusunu çalıştırmak için (project root: `course-app`):

```bash
npm install
npm run dev
```

