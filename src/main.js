import "./style.css";
import * as rive from "@rive-app/canvas";

const r = new rive.Rive({
  src: "/radial_ranking.riv",
  canvas: document.getElementById("radial"),
  autoplay: true,
  autoBind: true,
  stateMachines: "State Machine 1",
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});
