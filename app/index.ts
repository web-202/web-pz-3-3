import "./styles/main.scss"
// @ts-ignore
import imageGif from "./ea1785b078d0fd3.gif";

const app: HTMLElement | null = document.getElementById("app");

const img: HTMLImageElement = document.createElement("img")
img.className = "image"
img.src = imageGif;
img.alt = "MyParrot"

const title: HTMLDivElement = document.createElement("div");
title.className = "title";

title.appendChild(img);

app?.appendChild(title)

