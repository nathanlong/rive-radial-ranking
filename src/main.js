import "./style.css";
import * as rive from "@rive-app/canvas";

let selectedZone, isRegistered, isSelected;

const selectedText = document.querySelector("[data-selected-zone]");
const resetButton = document.querySelector("[data-reset]");

const r = new rive.Rive({
  src: "/radial_ranking.riv",
  canvas: document.getElementById("radial"),
  autoplay: true,
  autoBind: true,
  stateMachines: "State Machine 1",
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
    const defaultVM = r.defaultViewModel();
    const instance = r.viewModelInstance;
    selectedZone = instance.number("selected_zone");
    isRegistered = instance.boolean("is_registered");
    isSelected = instance.boolean("is_selected");

    selectedZone.on((event) => {
      if (isRegistered.value === false && selectedZone.value !== 0) {
        console.log(
          "pre-change",
          isRegistered.value,
          isSelected.value,
          selectedZone.value
        );
        isRegistered.value = true;
        selectedText.innerHTML = parseInt(event);
        resetButton.removeAttribute("disabled");
        console.log(
          "post-change",
          isRegistered.value,
          isSelected.value,
          selectedZone.value
        );
      } else {
        console.log(
          "else",
          isRegistered.value,
          isSelected.value,
          selectedZone.value
        );
      }
    });
  },
});

resetButton.addEventListener("click", (e) => {
  isRegistered.value = false;
  isSelected.value = false;
  selectedZone.value = 0;
  resetButton.setAttribute("disabled", "true");
  selectedText.innerHTML = parseInt(selectedZone.value)
  console.log(
    "reset",
    isRegistered.value,
    isSelected.value,
    selectedZone.value
  );
});
