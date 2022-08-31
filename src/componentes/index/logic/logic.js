const smooth = (location) => {
  if (location.state != null) {
    if (location.state.scroll) {
      const element = document.getElementById(location.state.hash);
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      console.log(element);
    }
  }
};

const setTheme = (darkmodeOn) => {
  let root = document.getElementById("root");

  if (darkmodeOn) {
    root.classList.add("bg-darkmode");
  } else {
    root.classList.remove("bg-darkmode");
  }
};

function avoidScroll(e, location, navigate) {
  if (e.keyCode === 116 && location.pathname === "/") {
    navigate(location.pathname, { replace: true });
  }
}

const removeblockOverflow = (condition) => {
  const root = document.getElementById("root");
  const ul = document.getElementById("ulhidden");

  if (condition) {
    root.classList.add("overflow-hidden");
    ul.classList.add("flex");
    ul.classList.add("hidden");
  } else {
    root.classList.remove("overflow-hidden");
    ul.classList.remove("flex");
    ul.classList.add("hidden")
  }
};

export { smooth, setTheme, avoidScroll, removeblockOverflow };
