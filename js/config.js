// ======================================================
// CONFIG — VERSION PRO+
// Endpoints, constantes, sonomètres, adresses
// ======================================================


// ------------------------------------------------------
// Logging PRO+
// ------------------------------------------------------
const IS_DEV = location.hostname.includes("localhost") || location.hostname.includes("127.0.0.1");
const log = (...a) => IS_DEV && console.log("[CONFIG]", ...a);


// ======================================================
// 1) ENDPOINTS API
// ======================================================
// Tous les modules PRO+ utilisent fetchJSON() avec fallback
// Ces URLs sont centralisées ici pour éviter les doublons
// ======================================================

export const PROXY = "https://eblg-dashboard-v84.onrender.com";

export const ENDPOINTS = {
    metar: "/metar",
    taf: "/taf",
    fids: "/fids",
    sonometers: "/sonos"   // ← CORRECTION CRITIQUE
};

log("Endpoints configurés :", ENDPOINTS);


