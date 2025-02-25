<script>
  import { page } from '$app/stores'
</script>

<nav class="fixed w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm text-[#2E8B57] py-4 px-4 top-0 md:block hidden">
  <div class="container mx-auto max-w-6xl relative">
    <ul class="flex justify-center space-x-8 py-2 text-sm md:text-base tracking-widest">
      <li><a href="/" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/' ? 'italic' : ''}">ABOUT</a></li>
      <li><a href="/blog" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/blog/' ? 'italic' : ''}">BLOG</a></li>
      <li><a href="/members" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/members/' ? 'italic' : ''}">MEMBERS</a></li>
      <li><a href="/points-of-unity" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/points-of-unity/' ? 'italic' : ''}">POINTS OF UNITY</a></li>
      <li><a href="/community" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/community/' ? 'italic' : ''}">COMMUNITY</a></li>
      <li><a href="/photos" class="hover:text-[#FF6347] transition-colors duration-300 {$page.url.pathname === '/photos/' ? 'italic' : ''}">PHOTOS</a></li>
    </ul>
  </div>
</nav>

<!-- Mobile Top Navigation -->
<nav class="md:hidden fixed top-0 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-sm text-[#2E8B57] py-2 px-1 z-50 border-b border-[#2E8B57]">
  <ul class="flex justify-between items-center">
    <li class="flex-1">
      <a 
        href="/" 
        class="block text-center py-3 px-1 {$page.url.pathname === '/' ? 'text-[#FF6347]' : ''} active:text-[#FF6347]"
      >
        <span class="text-xs font-medium">ABOUT</span>
      </a>
    </li>
    <li class="flex-1">
      <a 
        href="/blog" 
        class="block text-center py-3 px-1 {$page.url.pathname === '/blog/' ? 'text-[#FF6347]' : ''} active:text-[#FF6347]"
      >
        <span class="text-xs font-medium">BLOG</span>
      </a>
    </li>
    <li class="flex-1">
      <a 
        href="/members" 
        class="block text-center py-3 px-1 {$page.url.pathname === '/members/' ? 'text-[#FF6347]' : ''} active:text-[#FF6347]"
      >
        <span class="text-xs font-medium">MEMBERS</span>
      </a>
    </li>
    <li class="flex-1">
      <a 
        href="/points-of-unity" 
        class="block text-center py-3 px-1 {$page.url.pathname === '/points-of-unity/' ? 'text-[#FF6347]' : ''} active:text-[#FF6347]"
      >
        <span class="text-xs font-medium">UNITY</span>
      </a>
    </li>
    <li class="flex-1">
      <a 
        href="/community" 
        class="block text-center py-3 px-1 {$page.url.pathname === '/community/' ? 'text-[#FF6347]' : ''} active:text-[#FF6347]"
      >
        <span class="text-xs font-medium">COM</span>
      </a>
    </li>
    <li class="flex-1">
      <a 
        href="/photos" 
        class="block text-center py-3 px-1 {$page.url.pathname === '/photos/' ? 'text-[#FF6347]' : ''} active:text-[#FF6347]"
      >
        <span class="text-xs font-medium">PHOTOS</span>
      </a>
    </li>
  </ul>
</nav>