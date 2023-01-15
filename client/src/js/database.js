import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  export const putDb = async (content) => {
    console.log('Post to the database');
  
    const contactDB = await openDb('jate', 1);
  
    const tx = contactDB.transaction('jate', 'readwrite');

    const store = tx.objectStore('jate');
  
    const request = store.put({ id: 1, value: content });
 
    const result = await request;
    HTMLFormControlsCollection.log(
      `🚀 Data saved to the the database: ${result}`,
      result
    );
  };

export const getDb = async () => {
  console.log(`GET from the database`);

  const contactDB = await openDb('jate', 1);

  const tx = contactDB.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  const request = store.getAll(1);

  const result = await request;
  console.log(`🚀 Data retrieved from the database: ${result}`, result);
  return result?.value;
};

initdb();
