export function createModal({
  id,
  title,
  className = '',
  closeOnBackdrop = false,
  closeOnEscape = true
}) {
  const root = document.createElement('div');
  root.id = id;
  root.className = `modal hidden ${className}`.trim();
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-labelledby', `${id}-title`);

  const card = document.createElement('div');
  card.className = 'modal-card';

  const header = document.createElement('div');
  header.className = 'mh';

  const heading = document.createElement('h2');
  heading.id = `${id}-title`;
  heading.textContent = title;

  header.append(heading);

  const body = document.createElement('div');
  const actions = document.createElement('div');
  actions.className = 'modal-actions';

  card.append(header, body, actions);
  root.append(card);
  document.body.append(root);

  const open = () => {
    root.classList.remove('hidden');
  };

  const close = () => {
    root.classList.add('hidden');
  };

  if (closeOnBackdrop) {
    root.addEventListener('click', (event) => {
      if (event.target === root) close();
    });
  }

  if (closeOnEscape) {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !root.classList.contains('hidden')) close();
    });
  }

  return { root, card, body, actions, open, close };
}
