/**
 * Adiciona um efeito ripple a um elemento clicável.
 * Retorna uma função que remove o listener.
 */
export function createRipple(element, options = {}) {
  if (!(element instanceof Element)) {
    throw new TypeError("createRipple: element deve ser um Element.");
  }

  const { color = "rgb(255 255 255 / 35%)", duration = 500 } = options;
  const originalPosition = getComputedStyle(element).position;
  const originalOverflow = getComputedStyle(element).overflow;

  if (originalPosition === "static") element.style.position = "relative";
  element.style.overflow = "hidden";

  function handlePointerDown(event) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const ripple = document.createElement("span");

    Object.assign(ripple.style, {
      position: "absolute",
      width: `${size}px`,
      height: `${size}px`,
      left: `${event.clientX - rect.left - size / 2}px`,
      top: `${event.clientY - rect.top - size / 2}px`,
      borderRadius: "50%",
      background: color,
      pointerEvents: "none",
      transform: "scale(0)",
      opacity: "1",
      transition: `transform ${duration}ms ease, opacity ${duration}ms ease`
    });

    element.append(ripple);
    requestAnimationFrame(() => {
      ripple.style.transform = "scale(1)";
      ripple.style.opacity = "0";
    });
    window.setTimeout(() => ripple.remove(), duration);
  }

  element.addEventListener("pointerdown", handlePointerDown);

  return function destroyRipple() {
    element.removeEventListener("pointerdown", handlePointerDown);
    element.style.position = originalPosition;
    element.style.overflow = originalOverflow;
  };
}
