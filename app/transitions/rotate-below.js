// BEGIN-SNIPPET rotate-below
import { stop, animate, Promise } from "liquid-fire";

export default function rotateBelow() {
  stop(this.oldElement);
  if (this.oldElement) {
    this.oldElement.css('transform-origin', '70% 200%');
  }
  if (this.newElement) {
    this.newElement.css('transform-origin', '70% 200%');
  }
  return Promise.all([
    animate(this.oldElement, { rotateZ: -90 + 'deg', opacity: [0, 1] }),
    animate(this.newElement, { rotateZ: ['0deg', 90 + 'deg'] })
  ]);
}
// END-SNIPPET
