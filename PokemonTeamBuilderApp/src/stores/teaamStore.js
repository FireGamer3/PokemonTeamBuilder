import { writable } from "svelte/store";
import { browser } from "$app/env";

const defaultValue = { teamData: [null, null, null, null, null, null]};
const teamStorage = browser ? JSON.parse(window.localStorage.getItem('team')) ?? defaultValue : defaultValue;
export const team = writable(teamStorage);

team.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('team', JSON.stringify(value));
    }
});
