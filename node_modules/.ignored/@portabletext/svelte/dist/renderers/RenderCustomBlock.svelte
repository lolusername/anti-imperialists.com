<script>export let global;
$:
  ({ components } = global);
export let node;
export let parentBlock;
export let indexInParent;
export let isInline = false;
$:
  ({ _type } = node);
$:
  customComponent = components.types[_type];
$:
  if (!customComponent) {
    global.missingComponentHandler(_type, "block");
  }
$:
  componentProps = /* @__PURE__ */ (() => {
    return {
      global,
      value: node,
      indexInParent,
      parentBlock,
      isInline
    };
  })();
</script>

<svelte:component this={customComponent || components.unknownType} portableText={componentProps} />
