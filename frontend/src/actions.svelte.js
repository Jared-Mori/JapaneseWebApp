import * as wanakana from "wanakana";

/** @param {HTMLInputElement} node */
export function bindWanakana(node) {

    if (wanakana && wanakana.bind) {
        wanakana.bind(node);
    } else {
        console.error("Wanakana failed to load.");
    }
}