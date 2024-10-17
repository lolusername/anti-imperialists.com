<script>
	import { PortableText } from '@portabletext/svelte';
	export let data; // SvelteKit automatically passes the returned data from load()
	let pointsOfUnity = data.pointsOfUnity;

	let isDark = true;

	// Sample data for featured posts and events
	let featuredPosts = [
		{ title: "Decolonizing Academia", preview: "Exploring ways to challenge and transform colonial legacies in higher education..." },
		{ title: "Global South Solidarity", preview: "Building connections and support networks among scholars from the Global South..." }
	];

	let upcomingEvents = [
		{ title: "Anti-Imperialist Conference 2024", date: "June 15-17, 2024", location: "Virtual" },
		{ title: "Workshop: Critical Perspectives on Global Politics", date: "August 5, 2024", location: "New York City" }
	];
</script>

<main class="{isDark ? 'bg-black text-white' : ' text-black'}">
	<nav
		class="fixed w-full border-b-4 {isDark
				? 'bg-[#2E8B57] text-white border-white'
				: 'border-black text-[#B03A2E]'}"
	>
		<ul class="flex justify-center space-x-3 md:space-x-8 py-6 uppercase text-sm md:text-base">
			<li>
				<a href="/" class="font-semibold transition duration-200 hover:underline"> About </a>
			</li>
			<li>
					<a href="/" class="font-semibold transition duration-200 hover:underline"> Bios </a>
			</li>
			<li>
					<a href="/" class="font-semibold transition duration-200 hover:underline"> Blog </a>
			</li>
			<li>
					<a href="/" class="font-semibold transition duration-200 hover:underline"> Points of Unity </a>
			</li>
		</ul>
	</nav>
	<div class="container mx-auto px-4 max-w-4xl">
		<section class="pt-24 md:pt-28">
			<article class="py-8 md:py-12">
				<article class="font-hero text-5xl md:text-5xl lg:text-6xl font-extrabold 2xl:text-7xl">
					<div>ANTI-IMPERIALIST</div>
					<div>SCHOLARS COLLECTIVE</div>
				</article>
			</article>
			<div
				class="intro bg-[#FF6347] md:bg-transparent flex flex-col md:flex-row items-center p-6 md:p-12 lg:p-20 text-lg md:text-xl lg:text-2xl shadow-[inset_0_0_1rem_1.5rem_#FF6347] rounded"
			>
				<div class="w-full md:w-1/3 md:order-last mb-6 md:mb-0 md:ml-8">
					<img class="w-full md:max-w-xs mx-auto" src="/poppy.png" alt="AISC logo">
				</div>
				<div class="w-full md:w-2/3 p-4 pt-0 md:p-0 mt-6 md:mt-0">
					The Anti-Imperialist Scholars Collective (AISC) is a global group of scholars committed to
					challenging US-led imperialism and supporting liberation movements of the Global Majority
					 through critical knowledge production and international solidarity.
				</div>
			</div>
			
			<section class="my-16">
				<h2 class="font-hero text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#FF6347]">Featured Posts and Events</h2>
				
				<div class="grid md:grid-cols-2 gap-8">
						<div>
							<h3 class="font-hero text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Latest Posts</h3>
							{#each featuredPosts as post}
								<article class="mb-6 p-4 border border-[#B03A2E] rounded-lg">
									<h4 class="font-hero text-lg md:text-xl font-semibold mb-2">{post.title}</h4>
									<p class="text-sm md:text-base">{post.preview}</p>
									<a href="/" class="inline-block mt-2 text-[#FF6347] hover:underline">Read more</a>
								</article>
							{/each}
						</div>
						
						<div>
							<h3 class="font-hero text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Upcoming Events</h3>
							{#each upcomingEvents as event}
								<div class="mb-6 p-4 bg-[#2E8B57] bg-opacity-20 rounded-lg">
									<h4 class="font-hero text-lg md:text-xl font-semibold mb-2">{event.title}</h4>
									<p class="text-xs md:text-sm"><strong>Date:</strong> {event.date}</p>
									<p class="text-xs md:text-sm"><strong>Location:</strong> {event.location}</p>
									<a href="/" class="inline-block mt-2 text-[#FF6347] hover:underline">Learn more</a>
								</div>
							{/each}
						</div>
				</div>
			</section>
		</section>
	</div>
</main>
