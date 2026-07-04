import { STORAGE_KEYS } from "./config.js";
import { readJSON, writeJSON, removeKey, estimateLocalStorageBytes, formatBytes } from "./storage.js";

export class OfflinePacks {
  listPacks() {
    const packs = readJSON(STORAGE_KEYS.offlinePacks, {});
    return Object.entries(packs).map(([id, data]) => ({
      id,
      promptCount: data.prompts?.length || 0,
      createdAt: data.createdAt,
      size: formatBytes(JSON.stringify(data).length)
    }));
  }

  savePack(id, prompts, sizeLabel) {
    const packs = readJSON(STORAGE_KEYS.offlinePacks, {});
    packs[id] = {
      version: 1,
      sizeLabel,
      createdAt: Date.now(),
      prompts
    };
    writeJSON(STORAGE_KEYS.offlinePacks, packs);
  }

  getPack(id) {
    const packs = readJSON(STORAGE_KEYS.offlinePacks, {});
    return packs[id] || null;
  }

  deletePack(id) {
    const packs = readJSON(STORAGE_KEYS.offlinePacks, {});
    delete packs[id];
    writeJSON(STORAGE_KEYS.offlinePacks, packs);
  }

  deleteAll() {
    removeKey(STORAGE_KEYS.offlinePacks);
  }

  storageUsed() {
    return formatBytes(estimateLocalStorageBytes("re_"));
  }
}
