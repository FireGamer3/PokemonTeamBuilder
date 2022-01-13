import { writable } from "svelte/store";
import { browser } from "$app/env";

const defaultValue = { favs: []};
const favoriteStorage = browser ? JSON.parse(window.localStorage.getItem('favorites')) ?? defaultValue : defaultValue;
export const favorites = writable(favoriteStorage);

favorites.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('favorites', JSON.stringify(value));
    }
});
