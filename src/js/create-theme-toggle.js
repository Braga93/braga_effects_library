/**
 * Conecta um checkbox de tema a um container e salva a escolha.
 * @param {HTMLInputElement} input
 * @param {{ scope?: HTMLElement, storageKey?: string, defaultTheme?: 'a'|'b' }} options
 * @returns {() => void} função de limpeza
 */
export function createThemeToggle(input, options = {}) {
  if (!(input instanceof HTMLInputElement) || input.type !== 'checkbox') {
    throw new TypeError('createThemeToggle: input deve ser um checkbox.');
  }

  const scope = options.scope ?? document.documentElement;
  const storageKey = options.storageKey ?? 'bfx-theme';
  const defaultTheme = options.defaultTheme === 'b' ? 'b' : 'a';

  const readStoredTheme = () => {
    try {
      const value = localStorage.getItem(storageKey);
      return value === 'a' || value === 'b' ? value : defaultTheme;
    } catch {
      return defaultTheme;
    }
  };

  const applyTheme = (theme) => {
    const normalized = theme === 'b' ? 'b' : 'a';
    scope.dataset.bfxTheme = normalized;
    input.checked = normalized === 'b';
    input.setAttribute('aria-checked', String(input.checked));

    try {
      localStorage.setItem(storageKey, normalized);
    } catch {
      // O tema continua funcional mesmo quando o armazenamento está bloqueado.
    }
  };

  const handleChange = () => applyTheme(input.checked ? 'b' : 'a');

  applyTheme(readStoredTheme());
  input.addEventListener('change', handleChange);

  return () => input.removeEventListener('change', handleChange);
}
