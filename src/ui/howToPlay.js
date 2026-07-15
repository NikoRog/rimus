import { createModal } from './modal.js';

export const HOW_TO_PLAY_SEEN_KEY = 'rimus_how_to_play_seen';

export const HOW_TO_PLAY = {
  title: 'Welcome to Rimus',
  body: 'Read the prompt, then say a line that rhymes with the final word.',
  gameExample: 'Yo momma is really cool.',
  playerExample: 'She thinks you are a fool.',
  continueText: 'When everyone agrees, tap I Got It to continue.',
  steps: [
    'Read the sentence.',
    'Rhyme with the final word.',
    'Tap I Got It when the group accepts it.'
  ]
};

export function createHowToPlayController({
  storage = window.localStorage,
  track = () => {}
} = {}) {
  const modal = createModal({
    id: 'howToPlayModal',
    title: HOW_TO_PLAY.title,
    className: 'how-modal',
    closeOnBackdrop: false,
    closeOnEscape: false
  });

  let pendingContinue = null;
  let currentSource = 'menu';

  modal.body.innerHTML = `
    <p class="how-copy">${HOW_TO_PLAY.body}</p>
    <div class="how-example" aria-label="How to play example">
      <p><b>Game:</b> "${HOW_TO_PLAY.gameExample}"</p>
      <p><b>You:</b> "${HOW_TO_PLAY.playerExample}"</p>
    </div>
    <p class="how-copy">${HOW_TO_PLAY.continueText}</p>
    <label class="how-check">
      <input id="howToPlayDontShow" type="checkbox" checked>
      <span>Don't show again</span>
    </label>
  `;

  const startButton = document.createElement('button');
  startButton.id = 'howToPlayStart';
  startButton.className = 'primary';
  startButton.type = 'button';
  startButton.textContent = "Let's play";
  modal.actions.append(startButton);

  const checkbox = modal.body.querySelector('#howToPlayDontShow');

  const hasSeen = () => storage.getItem(HOW_TO_PLAY_SEEN_KEY) === 'yes';

  const markSeen = () => {
    storage.setItem(HOW_TO_PLAY_SEEN_KEY, 'yes');
  };

  const open = ({ source = 'menu', onContinue = null } = {}) => {
    currentSource = source;
    pendingContinue = onContinue;
    checkbox.checked = true;
    track('how_to_play_opened', { source });
    modal.open();
  };

  const continueFromModal = () => {
    const dontShowAgain = checkbox.checked;
    if (dontShowAgain) markSeen();

    track('how_to_play_start_clicked', {
      source: currentSource,
      dont_show_again: dontShowAgain ? 1 : 0
    });
    track('how_to_play_dismissed', {
      source: currentSource,
      dont_show_again: dontShowAgain ? 1 : 0
    });

    modal.close();
    const run = pendingContinue;
    pendingContinue = null;
    if (typeof run === 'function') run();
  };

  const requestBeforeStart = (onContinue) => {
    if (hasSeen()) {
      onContinue();
      return;
    }
    open({ source: 'first_start', onContinue });
  };

  startButton.addEventListener('click', continueFromModal);

  return {
    open,
    requestBeforeStart,
    hasSeen,
    markSeen
  };
}
