<script>
  import { page } from '$app/stores'
  let isMenuOpen = false;
</script>

<nav class="fixed w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm text-[#2E8B57] py-4 px-4 top-0">
  <div class="container mx-auto max-w-6xl relative">
    <!-- Mobile menu button -->
    <button 
      class="md:hidden absolute left-0 top-1/2 -translate-y-1/2"
      on:click={() => isMenuOpen = !isMenuOpen}
      aria-label="Toggle menu"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {#if isMenuOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        {/if}
      </svg>
    </button>

    <!-- Desktop navigation -->
    <ul class="hidden md:flex justify-center space-x-8 py-2 text-sm md:text-base tracking-widest">
      <li><a href="/" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/' ? 'italic' : ''}">ABOUT</a></li>
      <li><a href="/blog" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/blog/' ? 'italic' : ''}">BLOG</a></li>
      <li><a href="/members" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/members/' ? 'italic' : ''}">MEMBERS</a></li>
      <li><a href="/points-of-unity" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/points-of-unity/' ? 'italic' : ''}">POINTS OF UNITY</a></li>
      <li><a href="/community" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/community/' ? 'italic' : ''}">COMMUNITY</a></li>
    </ul>

    <!-- Mobile menu -->
    {#if isMenuOpen}
      <div class="absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-sm border-t border-[#2E8B57] md:hidden">
        <div class="flex flex-col p-4 space-y-4">
          <a href="/" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/' ? 'italic' : ''}" on:click={() => isMenuOpen = false}>ABOUT</a>
          <a href="/blog" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/blog/' ? 'italic' : ''}" on:click={() => isMenuOpen = false}>BLOG</a>
          <a href="/members" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/members/' ? 'italic' : ''}" on:click={() => isMenuOpen = false}>MEMBERS</a>
          <a href="/points-of-unity" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/points-of-unity/' ? 'italic' : ''}" on:click={() => isMenuOpen = false}>POINTS OF UNITY</a>
          <a href="/community" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/community/' ? 'italic' : ''}" on:click={() => isMenuOpen = false}>COMMUNITY</a>
        </div>
      </div>
    {/if}
  </div>
</nav>