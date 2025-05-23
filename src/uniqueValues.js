// Layter list
export async function defineActions(event) {
  const { item } = event;

  if (item.layer.type !== "group") {
    item.panel = {
      content: "legend",
      open: true,
    };
  }

  item.title === "Chainage" ||
  item.title === "Tree Compensation" ||
  item.title === "Tree Conservation"
    ? (item.visible = false)
    : (item.visible = true);
}
