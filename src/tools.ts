import { writable } from "svelte/store";

export const LocationHash = writable(window.location.hash);

export const HTMLCollectionIndexOf = (
  collection: HTMLCollection | HTMLCollectionOf<HTMLElement>,
  item: HTMLElement
) => {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] == item) return i;
  }
  return -1;
};

export const HTMLCollectionIndexById = (
  collection: HTMLCollection | HTMLCollectionOf<HTMLElement>,
  id: string
) => {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id == id) return i;
  }
  return -1;
};
