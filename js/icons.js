export function getCardIcon(value) {
  const icons = {
    1: "🍎",
    2: "🍊",
    3: "🍇",
    4: "🍓",
    5: "🍋",
    6: "🍉",
    7: "🍒",
    8: "🥝",
  };
  return icons[value] || "❓";
}
