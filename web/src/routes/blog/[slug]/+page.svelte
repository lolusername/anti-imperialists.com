<script>
  import { PortableText } from '@portabletext/svelte'
  import Nav from '$lib/components/Nav.svelte';
  export let data
  const { blog } = data

  // Helper function to get image URL
  function getImageUrl(image) {
    if (!image?.image?.asset?.url) return null
    return image.image.asset.url
  }
</script>

<main class="bg-black text-white min-h-screen">
  <Nav />
  
  <!-- Content wrapper with proper padding for nav -->
  <div class="pt-24"> <!-- Increased padding-top to account for nav height -->
    <!-- Hero section with full-width image if available -->
    {#if blog.mainImage && getImageUrl(blog.mainImage)}
      <div class="w-full h-[50vh] relative">
        <img 
          src={getImageUrl(blog.mainImage)} 
          alt={blog.mainImage.alt || blog.title}
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    {/if}

    <div class="container mx-auto px-4 max-w-4xl relative z-10 {blog.mainImage ? '-mt-24' : 'mt-12'}">
      <article class="prose prose-invert prose-lg mx-auto">
        <!-- Title and metadata section -->
        <header class="mb-16 mt-24 text-center">
          <h1 class="font-hero text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
            {blog.title}
          </h1>
          
          {#if blog.author || blog.publishedAt}
            <div class="border-t border-b border-[#2E8B57] py-4 text-gray-400 flex items-center justify-center space-x-4">
              {#if blog.author}
                <span>By {blog.author}</span>
              {/if}
              {#if blog.publishedAt}
                <span class="text-[#FF6347]">•</span>
                <time datetime={blog.publishedAt}>
                  {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              {/if}
            </div>
          {/if}
        </header>

        <!-- Article content -->
        <div class="mt-8 prose-headings:text-[#2E8B57] prose-a:text-[#FF6347] prose-a:no-underline hover:prose-a:underline">
          <PortableText value={blog.body} />
        </div>

        <!-- Author bio section -->
        {#if blog.author && blog.authorBio}
          <footer class="mt-16 border-t border-[#2E8B57] pt-8">
            <div class="flex items-start gap-6">
              {#if blog.authorImage && getImageUrl(blog.authorImage)}
                <img 
                  src={getImageUrl(blog.authorImage)} 
                  alt={blog.authorImage.alt || `Photo of ${blog.author}`}
                  class="w-20 h-20 rounded-full object-cover"
                />
              {/if}
              <div>
                <h2 class="text-xl font-bold text-[#2E8B57] mb-4">About {blog.author}</h2>
                <div class="prose-sm prose-invert">
                  <PortableText value={blog.authorBio} />
                </div>
              </div>
            </div>
          </footer>
        {/if}
      </article>
    </div>
  </div>
</main>

<style>
  :global(.prose) {
    max-width: none;
  }
  :global(.prose p) {
    font-family: "ivystyle-tw", serif;
    line-height: 1.8;
  }
  :global(.prose blockquote) {
    border-left-color: #2E8B57;
    color: #FF6347;
    font-style: normal;
    padding-left: 2rem;
  }
</style> 