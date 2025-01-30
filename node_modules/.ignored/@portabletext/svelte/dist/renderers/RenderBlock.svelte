<script>export let global;
$:
  ({ components } = global);
export let node;
export let indexInParent;
$:
  ({ style = "normal" } = node);
$:
  blockComponent = typeof components.block === "function" ? components.block : components.block[style];
$:
  if (!blockComponent) {
    global.missingComponentHandler(style, "blockStyle");
  }
$:
  blockProps = /* @__PURE__ */ (() => {
    return {
      global,
      indexInParent,
      value: node
    };
  })();
</script>

<svelte:component this={blockComponent || components.unknownBlockStyle} portableText={blockProps}>
  <slot />
</svelte:component>
