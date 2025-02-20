<script>
	import { PortableText } from '@portabletext/svelte';
	import Nav from '$lib/components/Nav.svelte';
	export let data; // SvelteKit automatically passes the returned data from load()
	let pointsOfUnity = data.pointsOfUnity;

	let isDark = true;
</script>

<main class="{isDark ? 'bg-black text-white' : ' text-black'}">
	<Nav />
	<div class="container mx-auto px-4 max-w-4xl">
		<section class="pt-20 md:pt-28">
			<article class="pt-12 -mb-9 ">
				<article class="font-hero text-4xl md:text-5xl lg:text-6xl font-extrabold 2xl:text-7xl text-center">
					<div class=" flex justify-center">
						<img src="/logo.jpeg" alt="AISC logo" class="transition-all duration-300  rounded-full w-96 bg-white h-96 object-contain shadow-[0_0_2rem_1.5rem_#2E8B57]">
					</div>
				</article>
			</article>
			<div
				class="intro bg-[#FF6347] md:bg-transparent flex flex-col md:flex-row items-center p-6 md:p-12 lg:p-20 text-lg md:text-xl lg:text-2xl shadow-[inset_0_0_2rem_1.5rem_#FF6347] "
			>
				<div class="w-full md:w-1/3 md:order-last mb-6 md:mb-0 md:ml-8 h-48 md:h-auto">
					<img 
						class="w-full h-full object-cover md:object-contain mx-auto " 
						src="/protest2.jpg" 
						alt="AISC logo"
					>
				</div>
				<div class="w-full copy md:w-2/3 p-4 pt-0 md:p-0 mt-6 md:mt-0">
					The Anti-Imperialist Scholars Collective (AISC) is a group of scholars committed to
					challenging US-led imperialism and supporting liberation movements of the Global Majority
					 through critical knowledge production and international solidarity.
				</div>
			</div>
			
			<section class="my-16 relative border-t-8 border-white pt-16">
				<h2 class="font-hero text-4xl md:text-5xl font-bold mb-12 text-[#2E8B57]">Featured Posts and Events</h2>
				
				<div class="grid  gap-12">
					<div class="relative">
						<h3 class="font-hero text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 pl-4 border-l-4 border-[#2E8B57]">Latest Posts</h3>
						{#if data.blogs && data.blogs.length > 0}
							{#each data.blogs as post}
								<article class="mb-8 p-6 border-2 border-[#2E8B57] transform transition-transform hover:scale-105">
									<h4 class="font-hero text-xl md:text-2xl font-semibold mb-3">{post.title}</h4>
									
									{#if post.author}
										<p class="text-sm text-gray-400">By {post.author}</p>
									{/if}
									<a href="/blog/{post.slug.current}" class="inline-block mt-2 hover:underline font-bold uppercase tracking-wider">Read more →</a>
								</article>
							{/each}
						{:else}
							<p class="text-gray-400">No posts available</p>
						{/if}
					</div>
				</div>
			</section>
		</section>
	</div>
</main>

<style>
	a {
		@apply hover:text-[#FF6347]
	}
	.copy  {
		font-family: "ivystyle-tw", sans-serif;
	}
</style>