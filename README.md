# React Fortschritte Lernjournal

> Abgeschlossenes Lernprojekt: Moderne React-Themen vom Routing bis zu Testing und Next.js.

## Ueberblick
In diesem Repository sammle ich alle Uebungen und Abschlussprojekte eines modernen React-Kurses, den ich erfolgreich abgeschlossen habe. Jede Einheit ist als eigenes Mini-Projekt umgesetzt, sodass ich einzelne Themen gezielt nachvollziehen kann.

## Technologie-Stack
- React 19 und React DOM
- React Router inklusive Data APIs
- Material UI fuer UI-Komponenten
- Axios mit Interceptors und Toast-Feedback
- Redux Toolkit, Thunks und Entity Adapter
- React Hook Form samt Validierungs-Workflows
- Next.js 14 mit API Routes und SQLite
- Vitest, React Testing Library und user-event

## Modul fuer Modul: Das habe ich gelernt

### 02 - React Router
- `createBrowserRouter` eingefuehrt und Layout-Hierarchien mit Nested Routes aufgebaut.
- Loader und Action Funktionen fuer Datenabruf und Formulare genutzt.
- Route Parameter, `useSubmit` und Error Elements fuer robuste Oberflaechen eingesetzt.

### 03 - Store App
- Projektgrundlage erstellt und Mehrseiten-Navigation per React Router umgesetzt.
- Responsive Store-Oberflaeche mit Material UI gestaltet.
- Produktliste, Karten und Detailseiten als wiederverwendbare Komponenten entwickelt.

### 04 - Error Handling
- Zentrale Axios-Instanz mit Interceptors aufgebaut.
- Nutzerfeedback ueber `react-toastify` integriert.
- Unterschiedliche Fehlerbilder (Client, Server, Validierung) mit eigenen Views abgefangen.

### 05 - Shopping Cart
- Backend-Anbindung per Axios realisiert und Produkte dynamisch geladen.
- Warenkorb via Context API im gesamten Projekt verfuegbar gemacht.
- Hinzufuegen, Aktualisieren und Uebersichten des Warenkorbs modelliert.

### 06 - Redux Toolkit
- Globaler Store und Slices fuer modulare Zustandsverwaltung aufgebaut.
- Asynchrone Logik mit Thunks orchestriert.
- Mit `createEntityAdapter` Caching und Performance verbessert.

### 07 - Authentication
- Flexible Login- und Registrierungs-Forms mit React Hook Form umgesetzt.
- `accountSlice` und eigene Middleware fuer Sitzungsverwaltung implementiert.
- Initialen Auth-Check beim App-Start durch `initApp` realisiert.

### 08 - Checkout
- Geschuetzte Routen via AuthGuard eingerichtet.
- Schrittweiser Checkout-Prozess (Info, Adresse, Zahlung) mit Stepper umgesetzt.
- Bestellungen gespeichert, gelistet und mit Detailansicht versehen.

### 09 - Next.js
- Datei-basierendes Routing und Layout-Konventionen von Next.js vertieft.
- Server-seitige Datenabfragen, Caching und API Routes mit SQLite kombiniert.
- Dynamischen Blog mit Listen- und Detailseiten erstellt.

### 10 - React Testing
- Komponenten mit Vitest und React Testing Library getestet.
- Nutzeraktionen via `@testing-library/user-event` simuliert.
- Asynchrone Flows und Mock-Daten fuer zuverlaessige Tests verwendet.

## Abschlussprojekte
- `___final_projects___/store`: Kompletter Store mit Redux Toolkit und API-Anbindung.
- `___final_projects___/course`: Full-Stack-Kursverwaltung mit Frontend und Backend.
- `___final_projects___/blog-app`: Next.js Blog mit SQLite und eigenem API-Layer.
- `___final_projects___/react-testing`: Testgetriebenes Mini-Projekt mit umfangreichen Specs.

## Kursstatus
- Lernpfad abgeschlossen und Inhalte fuer zukuenftige Referenz dokumentiert.
- Weitere Experimente plane ich in separaten Branches oder Archiven.

## So startest du ein Modul lokal

```bash
cd src/05_shopping_cart/5_5_cart_page
npm install
npm run dev   # fuer Vite-basierte Module
```

- Create React App Projekte verwenden `npm start`.
- Next.js Projekte starten mit `npm run dev`.

## Repository-Struktur
```
src/
  02_react_router/
  03_store_app/
  04_error_handling/
  05_shopping_cart/
  06_redux_toolkit/
  07_authentication/
  08_checkout/
  09_next_js/
  10_react_testing/
  ___final_projects___/
README.md
```

Ich halte das Repository als Nachschlagewerk und Inspiration fuer kommende React-Projekte vor.
