import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name;
  let filename = 1;
  function changeImage(direction) {
    if (direction == 1) {
      if (filename == 16) {
        filename = 0;
      }
      filename += 1;
    } else {
      if (filename == 1) {
        filename = 16;
      }
      filename -= 1;
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener("wheel", (event) => {
      const delta = Math.sign(event.deltaY);
      changeImage(delta);
    });
  }
  name = filename + ".png";
  return `<p>${escape(name)}</p> `;
});
export {
  Page as default
};
