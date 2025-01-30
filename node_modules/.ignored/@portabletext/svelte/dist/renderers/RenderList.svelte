<script>export let global;
$:
  ({ components } = global);
export let indexInParent;
export let node;
$:
  ({ listItem } = node);
$:
  handler = typeof components.list === "function" ? components.list : components.list[listItem];
$:
  listComponent = handler;
$:
  if (!listComponent) {
    global.missingComponentHandler(listItem, "listStyle");
  }
$:
  listProps = /* @__PURE__ */ (() => {
    return {
      global,
      value: node,
      indexInParent
    };
  })();
</script>

<svelte:component this={listComponent || components.unknownList} portableText={listProps}>
  <slot />
</svelte:component>
