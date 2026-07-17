import { docs } from "@/.source/server";
import { loader } from "fumadocs-core/source";
import { createElement } from "react";
import { BookOpen, CircleHelp, Settings, Monitor, Wrench, ListTodo, Blocks } from "lucide-react";
import { FaWindows, FaLinux } from "react-icons/fa";

// @note maps icon names to components for sidebar
const icons = {
  BookOpen,
  CircleHelp,
  Settings,
  Monitor,
  Wrench,
  Windows: FaWindows,
  Linux: FaLinux,
  ListTodo,
  Blocks,
};

export const source = loader({
  baseUrl: "/",
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return;
    if (icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    }
  },
});
