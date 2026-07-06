export function createVisualEffects({ audio }) {
  return {
    flash() {
      audio.lose();
      document.body.classList.remove('flash');
      void document.body.offsetWidth;
      document.body.classList.add('flash');
    }
  };
}
