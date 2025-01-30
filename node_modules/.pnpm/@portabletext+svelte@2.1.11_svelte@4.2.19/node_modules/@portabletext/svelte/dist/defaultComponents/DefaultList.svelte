<script>export let portableText;
$:
  ({ value } = portableText);
$:
  ({ listItem } = value);
</script>

{#if listItem === 'number'}
  <ol><slot /></ol>
{:else}
  <ul><slot /></ul>
{/if}
