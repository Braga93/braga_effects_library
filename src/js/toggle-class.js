/** Alterna uma classe e retorna o estado final. */
export function toggleClass(element, className, force) {
  if (!element?.classList) {
    throw new TypeError("toggleClass: element deve possuir classList.");
  }
  if (typeof className !== "string" || className.trim() === "") {
    throw new TypeError("toggleClass: className deve ser uma string não vazia.");
  }
  return typeof force === "boolean"
    ? element.classList.toggle(className, force)
    : element.classList.toggle(className);
}
