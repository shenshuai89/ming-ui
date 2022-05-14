import type { Component } from "vue";

export interface IAvatarProps {
  alt?: string;
  fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  shape?: "circle" | "square";
  src?: string;
  icon?: string | Component;
  size?: number | "large" | "default" | "small";
}
