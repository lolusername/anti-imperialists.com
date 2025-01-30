<script>
	import Nav from '$lib/components/Nav.svelte';
	export let data;

	// Format date to be more readable
	function formatDate(dateString) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<Nav />

<main class="relative bg-black text-white min-h-screen pt-24">
	<div class="container mx-auto px-4 max-w-6xl">
		<h1 class="font-hero text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-[#2E8B57]">The Pen is My Machete</h1>
		
		{#if data.blogs && data.blogs.length > 0}
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each data.blogs as post}
					<article class="bg-black border-2 border-[#2E8B57] p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
						<h2 class="font-hero text-xl font-semibold mb-3">{post.title}</h2>
						{#if post.preview}
							<p class="text-gray-400 mb-4 line-clamp-3">{post.preview}</p>
						{/if}
						<div class="flex justify-between items-center gap-4 mt-4">
							{#if post.author}
								<p class="text-sm text-gray-400">By {post.author}</p>
							{/if}
							{#if post.publishedAt}
								<p class="text-sm text-gray-400">{formatDate(post.publishedAt)}</p>
							{/if}
						</div>
						<a 
							href="/blog/{post.slug.current}" 
							class="inline-block mt-4 text-[#2E8B57] hover:text-[#FF6347] font-bold uppercase tracking-wider transition-colors duration-300"
						>
							Read more →
						</a>
					</article>
				{/each}
			</div>
		{:else}
			<p class="text-gray-400 text-center text-xl">No blog posts available yet.</p>
		{/if}
	</div>
</main>

<style lang="postcss">
	a {
		@apply hover:text-[#FF6347];
	}
</style> 