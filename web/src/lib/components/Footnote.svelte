<script>
  export let value;
  export let portableText = { context: { footnotes: [] } };
  
  $: index = portableText?.context?.footnotes?.findIndex(f => f._key === value._key) + 1 || '†';
</script>

<sup class="footnote-number">[{index}]</sup>

<slot />

<style>
  .footnote-number {
    color: #FF6347;
    font-size: 0.75em;
    font-weight: bold;
    vertical-align: super;
  }
</style> 