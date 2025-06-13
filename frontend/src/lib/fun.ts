export function typewriter(
  node: Element,
  { speed = 1 }: { speed?: number } = {}
) {
  const valid =
    node.childNodes.length === 1 &&
    node.childNodes[0].nodeType === Node.TEXT_NODE;

  if (!valid) {
    throw new Error(
      `The typewriter transition only works on elements with a single text node`
    );
  }

  const text = node.textContent ?? '';
  const duration = text.length / (speed * 0.01);

  return {
    duration,
    tick: (t: number) => {
      const i = Math.floor(text.length * t);
      node.textContent = text.slice(0, i);
    }
  };
}