document.addEventListener('DOMContentLoaded', () => {
  const createAccountForm = document.getElementById('create-account-form');
  const registerBookForm = document.getElementById('register-book-form');
  const borrowBookForm = document.getElementById('borrow-book-form');
  const returnBookForm = document.getElementById('return-book-form');

  // Event Listener für Kontoerstellung
  createAccountForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const accountType = document.getElementById('account-type').value;
      const accountName = document.getElementById('account-name').value;
      // Konto erstellen
      console.log(`Konto erstellt: ${accountType}, ${accountName}`);
      // Hier könnte man die Daten in einer Datenbank speichern
  });

  // Event Listener für Buchregistrierung
  registerBookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const bookIsbn = document.getElementById('book-isbn').value;
      const bookTitle = document.getElementById('book-title').value;
      const bookBarcode = document.getElementById('book-barcode').value;
      const bookStatus = document.getElementById('book-status').value;
      // Buch registrieren
      console.log(`Buch registriert: ISBN=${bookIsbn}, Titel=${bookTitle}, Barcode=${bookBarcode}, Status=${bookStatus}`);
      // Hier könnte man die Daten in einer Datenbank speichern
  });

  // Event Listener für Buchausleihe
  borrowBookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const borrowBarcode = document.getElementById('borrow-barcode').value;
      const borrowAccount = document.getElementById('borrow-account').value;
      // Buch ausleihen
      console.log(`Buch ausgeliehen: Barcode=${borrowBarcode}, Konto=${borrowAccount}`);
      // Hier könnte man die Daten in einer Datenbank speichern
  });

  // Event Listener für Buchrückgabe
  returnBookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const returnBarcode = document.getElementById('return-barcode').value;
      // Buch zurückgeben
      console.log(`Buch zurückgegeben: Barcode=${returnBarcode}`);
      // Hier könnte man die Daten in einer Datenbank speichern
  });

  // Admin-Optionen
  document.getElementById('backup-data').addEventListener('click', () => {
      // Daten sichern
      console.log('Daten gesichert');
        // Hier könnte man eine Sicherungsfunktion implementieren
    });

    document.getElementById('import-books').addEventListener('click', () => {
        // Bücher importieren
        console.log('Bücher importiert');
        // Hier könnte man eine Importfunktion implementieren
    });
});
