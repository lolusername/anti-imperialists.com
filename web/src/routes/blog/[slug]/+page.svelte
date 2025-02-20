<script>
  import { PortableText } from '@portabletext/svelte'
  import Nav from '$lib/components/Nav.svelte';
  import Footnote from '$lib/components/Footnote.svelte';
  export let data
  const { blog } = data

  // Helper function to get image URL
  function getImageUrl(image) {
    if (!image?.image?.asset?.url) return null
    return image.image.asset.url
  }

  // Extract footnotes from body content
  let footnotes = [];
  if (blog.body) {
    blog.body.forEach(block => {
      if (block.markDefs) {
        block.markDefs.forEach(mark => {
          if (mark._type === 'footnote') {
            footnotes.push({
              _key: mark._key,
              text: mark.text
            });
          }
        });
      }
    });
  }

  const components = {
    marks: {
      footnote: Footnote
    }
  }
</script>

<main class="bg-black text-white min-h-screen">
  <!-- Content wrapper with proper padding for nav -->
  <div class="pt-24">
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
          <PortableText 
            value={blog.body} 
            {components}
            context={{footnotes}} 
          />
        </div>

        <!-- Footnotes section -->
        {#if footnotes.length > 0}
          <section class="mt-16 pt-8 border-t border-[#2E8B57]">
            <h2 class="text-2xl font-bold text-[#2E8B57] mb-6">Notes</h2>
            <div class="space-y-4">
              {#each footnotes as footnote, i}
                <div class="flex gap-4 text-sm">
                  <span class="text-[#FF6347] font-bold">[{i + 1}]</span>
                  <div class="prose-sm prose-invert">
                    {footnote.text}
                  </div>
                </div>
              {/each}
            </div>
          </section>
        {/if}
      </article>
    </div>
  </div>
</main>

<style>
  :global(.prose) {
    max-width: none;
  }
  :global(.prose blockquote) {
    border-left-color: #2E8B57;
    color: #FF6347;
    font-style: normal;
    padding-left: 2rem;
  }
  :global(.footnote-number) {
    color: #FF6347;
    font-size: 0.75em;
    font-weight: bold;
    vertical-align: super;
    position: relative;
    top: -0.5em;
    line-height: 0;
  }
</style> 