import "./scss/main.scss";
// @ts-ignore
import webpackIcon from "./assets/webpack-icon.png";

const app: HTMLElement | null = document.getElementById("app");

const title: HTMLDivElement = document.createElement("div");
title.className = "title";
title.textContent = "Hell";

const titleImg: HTMLImageElement = document.createElement("img");
titleImg.className = "title__img";
titleImg.src = webpackIcon;
titleImg.alt = "Webpack logo";

title.appendChild(titleImg);

app?.appendChild(title);
