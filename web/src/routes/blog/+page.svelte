<script>
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


<main class="relative bg-black text-white min-h-screen pt-36">
	<div class="container mx-auto px-4 max-w-6xl">
		<div class=" flex justify-center">
			<img src="/logo.jpeg" alt="AISC logo" class="transition-all duration-300  rounded-full w-60 bg-white h-60 object-contain shadow-[0_0_2rem_1.5rem_#FF6347]">
		</div>
		<h1 class="mt-12 font-hero text-4xl md:text-5xl text-center lg:text-5xl  text-[#2E8B57]">The Pen is My Machete</h1>
		<div class="text-lg md:text-xl mb-12">
			<span class="italic">The Pen is My Machete Blog </span> is a monthly, online publication associated with the Anti-Imperialist Scholars Collective. Liberation and justice are our core values. We understand US-led imperialism as the primary contradiction that works against the realization of liberation and justice for all in the world system. Just as the root causes of our exploitation, oppression and dispossession are connected through the capitalist-imperialist system, so too are our struggles to emancipate ourselves from this system. “Nobody’s free till everyone is free,” as Fannie Lou Hamer remarked in 1971. We seek to engage in collaborative knowledge production that aims to elucidate how US-led imperialism works and operates in the past and present–and how different popular struggles challenge this violent system of domination while offering revolutionary alternatives. The Machete Blog is committed to platforming voices that both nurture comprehensive and critical analysis of our current time of monsters, and invite us to imagine new revolutionary horizons.
		</div>
		<div class="flex justify-between items-center gap-4 mt-4">
		{#if data.blogs && data.blogs.length > 0}
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each data.blogs as post}
					<article class="bg-black border-2 border-[#2E8B57] p-6  transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
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