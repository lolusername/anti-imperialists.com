<script>
	import { PortableText } from '@portabletext/svelte';
	import Image from '$lib/components/Image.svelte';
	export let data;
	const { blogs } = data;

	// Format date to be more readable
	function formatDate(dateString) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	const components = {
		types: {
			image: Image
		}
	};
</script>

<main class="relative bg-black text-white min-h-screen pt-12">
	<div class="container mx-auto px-4 max-w-6xl">
		<!-- Header section -->
		<header class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16">
			<div class="w-32 md:w-48 relative">
				<div class="aspect-square rounded-full bg-white glow relative">
					<img 
						src="/logo.jpeg" 
						alt="AISC logo" 
						class="w-full h-full object-contain rounded-full"
					/>
				</div>
			</div>
			<div class="text-left md:max-w-2xl">
				<h1 class="text-left font-hero text-4xl md:text-6xl text-[#2E8B57] tracking-tight leading-none mb-6">
					The Pen is My Machete
				</h1>
				<div class="prose-sm md:prose-md text-white">
					<span class="italic">The Pen is My Machete Blog</span> is a monthly, online publication associated with the Anti-Imperialist Scholars Collective. Liberation and justice are our core values. We understand US-led imperialism as the primary contradiction that works against the realization of liberation and justice for all in the world system. Just as the root causes of our exploitation, oppression and dispossession are connected through the capitalist-imperialist system, so too are our struggles to emancipate ourselves from this system. "Nobody's free till everyone is free," as Fannie Lou Hamer remarked in 1971. We seek to engage in collaborative knowledge production that aims to elucidate how US-led imperialism works and operates in the past and present–and how different popular struggles challenge this violent system of domination while offering revolutionary alternatives. The Machete Blog is committed to platforming voices that both nurture comprehensive and critical analysis of our current time of monsters, and invite us to imagine new revolutionary horizons.
				</div>
			</div>
		</header>

		<!-- Blog posts grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each blogs as post}
				<article class="bg-black border-2 border-[#2E8B57] p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
					{#if post.body}
						<div class="prose text-white max-w-none mb-4">
							<PortableText 
								value={post.body} 
								{components}
							/>
						</div>
					{/if}
					<h2 class="font-hero text-xl font-semibold mb-3">{post.title}</h2>
					<div class="flex justify-between items-center gap-4 mt-4">
						{#if post.author}
							<p class="text-sm text-gray-400">By {post.author}</p>
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
	</div>
</main>

<style>
	.glow {
		box-shadow: 0 0 40px rgba(255, 99, 71, 0.3);
	}

	.glow::after {
		content: '';
		position: absolute;
		inset: -2px;
		border: 2px solid #FF6347;
		border-radius: 9999px;
		animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	@keyframes pulse {
		0%, 100% {
			opacity: 0.8;
			transform: scale(1);
		}
		50% {
			opacity: 0.2;
			transform: scale(1.05);
		}
	}
</style> 