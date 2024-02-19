import React from "react";
import ReactDOM from "react-dom";

import singleSpaReact from "single-spa-react";
import App from "./App";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  parcelCanUpdate: true,
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];

export const update = [reactLifecycles.update];

console.info(`Vite-UI-released`);
