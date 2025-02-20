<script>
	import { PortableText } from '@portabletext/svelte';
	import Nav from '$lib/components/Nav.svelte';
	export let data;
</script>

<main class="bg-black text-white min-h-screen">
	<div class="container mx-auto px-4 max-w-6xl pt-24 text-md md:text-xl lg:text-2xl">
		<h1 class="font-hero text-5xl font-bold mb-12 text-center text-[#2E8B57]">Points of Unity</h1>
		
		{#if data.pointsOfUnity && data.pointsOfUnity.content}
			<div class="prose prose-2xl prose-invert max-w-none">
				<PortableText value={data.pointsOfUnity.content} />
			</div>
		{:else}
			<p class="text-gray-400 text-center">Content is being updated...</p>
		{/if}
	</div>
</main>

<style lang="postcss">
	:global(.prose) {
		@apply text-gray-300;
	}
	:global(.prose strong) {
		@apply text-white text-2xl md:text-3xl lg:text-4xl;
	}
	:global(.prose a) {
		@apply text-[#2E8B57] hover:text-[#FF6347] transition-colors duration-300;
	}
	:global(.prose h2) {
		@apply text-[#2E8B57] font-hero text-4xl md:text-5xl lg:text-6xl;
	}
	:global(.prose h3) {
		@apply text-[#2E8B57] font-hero text-3xl md:text-4xl lg:text-5xl;
	}
	:global(.prose ul) {
		@apply text-xl md:text-2xl lg:text-3xl;
	}
	:global(.prose li) {
		@apply mb-6;
	}
</style> 