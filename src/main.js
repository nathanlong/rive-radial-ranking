import "./style.css";
import * as rive from "@rive-app/canvas";

const r = new rive.Rive({
  src: "/radial_ranking.riv",
  // OR the path to a discoverable and public Rive asset
  // src: '/public/example.riv',
  canvas: document.getElementById("radial"),
  autoplay: true,
  // artboard: "Artboard", // Optional. If not supplied the default is selected
  stateMachines: "State Machine 1",
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});
