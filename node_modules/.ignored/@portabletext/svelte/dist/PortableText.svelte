<script>import { LIST_NEST_MODE_HTML, nestLists } from "@portabletext/toolkit";
import assertBlockKey from "./assertBlockKey";
import defaultComponents from "./defaultComponents/defaultComponents";
import { mergeComponents } from "./defaultComponents/mergeComponents";
import RenderNode from "./RenderNode.svelte";
import { getWarningMessage, printWarning } from "./warnings";
export let value = [];
export let components;
export let context = {};
export let onMissingComponent = true;
$:
  mergedComponents = mergeComponents(defaultComponents, components);
$:
  keyedBlocks = (Array.isArray(value) ? value : [value]).map(assertBlockKey);
$:
  blocks = nestLists(keyedBlocks, LIST_NEST_MODE_HTML);
$:
  missingComponentHandler = (type, nodeType) => {
    if (onMissingComponent === false) {
      return;
    }
    const message = getWarningMessage(type, nodeType);
    if (typeof onMissingComponent === "function") {
      onMissingComponent(message, { type, nodeType });
      return;
    }
    printWarning(message);
  };
</script>

{#each blocks as node, index (node._key)}
  <RenderNode
    global={{
      components: mergedComponents,
      missingComponentHandler,
      context,
      ptBlocks: blocks,
      ptRawValue: value
    }}
    options={{
      node,
      isInline: false,
      indexInParent: index
    }}
  />
{/each}
