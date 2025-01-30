<script>export let global;
$:
  ({ components } = global);
export let indexInParent;
export let node;
$:
  ({ style = "normal" } = node);
$:
  listItemComponent = typeof components.listItem === "function" ? components.listItem : components.listItem[style];
$:
  if (!listItemComponent) {
    global.missingComponentHandler(style, "listItemStyle");
  }
$:
  styleComponent = style !== "normal" ? components.block[style] : void 0;
$:
  listItemProps = /* @__PURE__ */ (() => {
    return {
      global,
      value: node,
      indexInParent
    };
  })();
</script>

<svelte:component
  this={listItemComponent || components.unknownListItem}
  portableText={listItemProps}
>
  {#if styleComponent}
    <svelte:component
      this={styleComponent}
      portableText={{
        // Different props for the block that will hold this list
        ...listItemProps,
        value: {
          ...node,
          // BlockComponentProps shouldn't receive a listItem
          listItem: undefined
        }
      }}
    >
      <slot />
    </svelte:component>
  {:else}
    <slot />
  {/if}
</svelte:component>
