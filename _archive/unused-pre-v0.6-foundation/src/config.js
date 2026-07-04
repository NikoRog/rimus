export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCNsUfI_Fo3w5hR1FweX1kgBVHOb3wlqFA",
  authDomain: "hfprhymegame.firebaseapp.com",
  projectId: "hfprhymegame",
  storageBucket: "hfprhymegame.firebasestorage.app",
  messagingSenderId: "250195641550",
  appId: "1:250195641550:web:48294ed7282441ab01bc9f"
};

export const APP_CONFIG = {
  version: "0.6.0",
  queueSize: 20,
  backgroundQueueSize: 30,
  minLoadingMs: 2000,
  maxLoadingMs: 5000,
  coinsPerSentence: 10,
  subjectPriceCoins: 1000,
  apiTimeoutMs: 3000,
  recentTargetLimit: 40,
  recentReferenceLimit: 24,
  recentTemplateLimit: 18,
  recentSentenceLimit: 80
};

export const STORAGE_KEYS = {
  coins: "re_coins",
  analyticsConsent: "re_analytics_consent",
  analyticsQueue: "re_analytics_queue",
  promptCache: "re_prompt_cache",
  rhymeCache: "re_rhyme_cache",
  conceptCache: "re_concept_cache",
  offlinePacks: "re_offline_packs",
  volume: "re_volume"
};
