import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";

inView(".staggeranimation1", ({ target }) => {
  animate(
    target.querySelectorAll("li"),
    { opacity: [0, 1] },
    { duration: 0.25, delay: stagger(1, { start: 1 }) }
  );
});
inView(".staggeranimation2", ({ target }) => {
  animate(
    target.querySelectorAll("li"),
    { opacity: [0, 1] },
    { duration: 1.2, delay: stagger(1, { start: 0.1 }) }
  );
});
inView(".staggeranimation3", ({ target }) => {
  animate(
    target.querySelectorAll("li"),
    { opacity: [0, 1] },
    { duration: 0.7, delay: stagger(1, { start: 0.9 }) }
  );
});

inView(".hellorotate", ({ target }) => {
  animate(target, { rotate: 0 }, { delay: 1, duration: 2 });
  return () => {
    animate(target, { rotate: 180 });
  };
});

inView(".text-left", ({ target }) => {
  animate(".text-left", { x: [-2000, 0] }, { duration: 1 });
});

inView(".text-right", ({ target }) => {
  animate(".text-right", { x: [2000, 5] }, { duration: 1 });
});

inView(".slide", ({ target }) => {
  animate(".slide", { x: [1000, 0] }, { duration: 1 });
});

inView(".rotate", ({ target }) => {
  animate(target, { rotate: -360 }, { duration: 1 });
});

const items = document.querySelectorAll("#horisontalliste li");
scroll(
  animate("#horisontalliste", {
    transform: ["none", `translateX(-${items.length - 1}00vw)`],
  }),
  { target: document.querySelector("#horisontalscrollsection") }
);

const btnLight = document.querySelector("#light");
const btnDark = document.querySelector("#dark");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function toggleTheme(e) {
  const mode = e.target.dataset.theme;
  if (mode !== "dark") {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

btnLight.addEventListener("click", toggleTheme);
btnDark.addEventListener("click", toggleTheme);
