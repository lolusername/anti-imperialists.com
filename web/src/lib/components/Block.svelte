<script>
  export let node;
  export let children;
</script>

{#if node.style === 'normal'}
  <p class="text-black">{children}</p>
{:else if node.style === 'h1'}
  <h1 class="text-4xl font-bold text-black">{children}</h1>
{:else if node.style === 'h2'}
  <h2 class="text-3xl font-bold text-black">{children}</h2>
{:else if node.style === 'h3'}
  <h3 class="text-2xl font-bold text-black">{children}</h3>
{:else if node.style === 'h4'}
  <h4 class="text-xl font-bold text-black">{children}</h4>
{:else if node.style === 'blockquote'}
  <blockquote class="border-l-4 border-[#2E8B57] pl-4 text-black">{children}</blockquote>
{:else if node.listItem === 'bullet'}
  <ul class="list-disc pl-4 text-black">
    <li>{children}</li>
  </ul>
{:else if node.listItem === 'number'}
  <ol class="list-decimal pl-4 text-black">
    <li>{children}</li>
  </ol>
{:else}
  <p class="text-black">{children}</p>
{/if} 