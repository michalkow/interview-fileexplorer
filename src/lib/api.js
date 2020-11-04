import { API_BASE_URL, ROOT_ID } from './constants'

const fetchJson = (url) =>
  new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}${url}`)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(reject);
  });

export const getDirectoryRoot = () => fetchJson('/directories');

export const getDirectoryById = (id) => fetchJson(`/directories/${id}`);

export const findDirectory = (id) => id === ROOT_ID ? getDirectoryRoot() : getDirectoryById(id);