<script>export let global;
$:
  ({ components } = global);
export let node;
$:
  ({ text } = node);
</script>

{#if text === '\n'}
  {#if typeof components.hardBreak === 'function'}
    <svelte:component this={components.hardBreak} />
  {:else}
    {text}
  {/if}
{:else}
  {text}
{/if}
