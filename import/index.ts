import { createBindCollection, deleteCollection } from './collection.ts';
import { importMediaFiles } from './import.ts';

const collectionName = 'BindExample';

const run = async () => {
  await deleteCollection(collectionName);
  await createBindCollection(collectionName);
  await importMediaFiles(collectionName);
}

run();


