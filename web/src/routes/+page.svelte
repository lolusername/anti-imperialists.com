<script>
	export let data; // SvelteKit automatically passes the returned data from load()
	let pointsOfUnity = data.pointsOfUnity;

	let isDark = true;
</script>

<main class="{isDark ? 'bg-black text-white' : ' text-black'}">
	<div class="container mx-auto px-4 max-w-6xl">
		<section class="pt-12 md:pt-20 lg:pt-28">
			<article class="pt-8 md:pt-12 -mb-9">
				<article class="font-hero text-4xl md:text-5xl lg:text-6xl font-extrabold 2xl:text-7xl text-center">
					<div class="flex justify-center">
						<img src="/logo.jpeg" alt="AISC logo" class="transition-all z-40 duration-300 rounded-full w-48 sm:w-60 md:w-96 bg-white h-48 sm:h-60 md:h-96 object-contain shadow-[0_0_2rem_1.5rem_#2E8B57]">
					</div>
				</article>
			</article>
			<div class="intro bg-[#FF6347] md:bg-transparent flex flex-col md:flex-row items-center p-4 md:p-8 lg:p-20 text-base md:text-lg lg:text-2xl shadow-[inset_0_0_2rem_1.5rem_#FF6347]">
				<div class="w-full md:w-1/3 md:order-last mb-4 md:mb-0 md:ml-8">
					<img 
						class="w-full h-48 sm:h-60 md:h-80 object-cover md:object-contain mx-auto" 
						src="/protest2.jpg" 
						alt="AISC logo"
					>
				</div>
				<div class="w-full md:w-2/3 p-4 pt-0 md:p-0 mt-4 md:mt-0 text-lg sm:text-xl md:text-2xl lg:text-3xl">
					The Anti-Imperialist Scholars Collective (AISC) is a group of scholars committed to
					challenging US-led imperialism and supporting liberation movements of the Global Majority
					through critical knowledge production and international solidarity.
				</div>
			</div>
			
			<section class="relative border-t-8 border-white pt-8 md:pt-16">
				<h2 class="font-hero text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-12 text-[#2E8B57]">Featured Posts and Events</h2>
				
				<div class="grid gap-6 md:gap-12">
					<div class="relative">
						<h3 class="font-hero text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 pl-4 border-l-4 border-[#2E8B57]">Latest Posts</h3>
						{#if data.blogs && data.blogs.length > 0}
							{#each data.blogs as post}
								<article class="mb-4 md:mb-8 p-4 md:p-6 border-2 border-[#2E8B57] transform transition-transform hover:scale-105">
									<h4 class="font-hero text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3">{post.title}</h4>
									
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
	.copy {
		font-family: "ivystyle-tw", sans-serif;
	}
</style>