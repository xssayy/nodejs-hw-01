import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  const theThanosSnap = contacts.filter(() => Math.random() >= 0.5);
  await fs.writeFile(PATH_DB, JSON.stringify(theThanosSnap), 'utf-8');
};

await thanos();
