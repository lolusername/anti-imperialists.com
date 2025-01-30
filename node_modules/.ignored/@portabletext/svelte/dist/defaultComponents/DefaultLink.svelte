<script>export let portableText;
$:
  ({ value } = portableText);
$:
  href = value?.href || value?.url || value?.link || value?.value;
</script>

{#if typeof href === 'string'}
  <a {href}><slot /></a>
{:else}
  <slot />
{/if}
