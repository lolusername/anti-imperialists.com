<script>
	import { PortableText } from '@portabletext/svelte';
	export let data; // SvelteKit automatically passes the returned data from load()
	let pointsOfUnity = data.pointsOfUnity;

	let isDark = true;

	function toggleTheme() {
		isDark = !isDark;
	}

</script>

<main class="grid grid-cols-5 {isDark ? 'bg-black text-white' : ' text-black'}">
	<nav
		class="fixed col-span-5 w-full border-b-8 {isDark
			? 'bg-[#046307] text-white border-white'
			: 'border-black text-[#B03A2E]'}"
	>
		<ul class="flex justify-center space-x-3 md:space-x-8 py-4">
			<li>
				<a href="/" class="underline hover:no-underline font-semibold transition duration-200"> About </a>
			</li>
			<li>
				<a href="/" class="underline hover:no-underline font-semibold transition duration-200"> Bios </a>
			</li>
			<li>
				<a href="/" class="underline hover:no-underline font-semibold transition duration-200"> Blog </a>
			</li>
			<li>
				<a href="/" class="underline hover:no-underline font-semibold transition duration-200"> Points of Unity </a>
			</li>
			<li class="flex items-center">
				<a
					class="ml-4 transform text-2xl transition duration-300 hover:rotate-180 focus:outline-none"
					href="/"
					aria-label="Toggle theme"
				>
				
                🌑
				
			</a>
				<span class="hidden md:block ml-2 text-sm">Toggle Theme</span>
				<!-- Visible label -->
			</li>
		</ul>
	</nav>
	<section class="col-span-5 md:col-span-3 md:h-svh grid-cols-1 overflow-scroll pt-24 md:pt-28">
		<article class="p-y-24 md:h-1/3 overflow-hidden px-8">
			<article class="font-hero text-5xl md:text-6xl lg:text-7xl font-extrabold 2xl:text-8xl py-8">
				<div>ANTI-IMPERIALIST</div>
				<div>SCHOLARS COLLECTIVE</div>
			</article>
		</article>
		<div
			class="intro flex md:h-2/3 items-center border-y-8 border-[#B03A2E] p-12 md:p-24 text-2xl {isDark
				? 'shadow-[inset_0_0_1.5rem_2rem_#046307]'
				: 'shadow-[inset_0_0_1.5rem_2rem_#B03A2E]'}"
		>
			The Anti-Imperialist Scholars Collective (AISC) is a global group of scholars committed to
			challenging US-led imperialism and supporting liberation movements of the Global Majority
			through critical knowledge production and international solidarity.
		</div>
		<section
			class="prose col-span-5 max-w-full p-3 md:p-8 md:text-2xl text-white {isDark ? '' : 'bg-[#B03A2E]'}"
		>
			<PortableText value={pointsOfUnity} />
		</section>
	</section>
	<section
		class="blog order-2 col-span-5 md:col-span-2 md:h-svh overflow-scroll pt-20 {isDark ? 'bg-[#B03A2E]' : 'bg-[#8DB600]'}"
	>
		<main class=" mx-auto p-8 {isDark ? 'text-black' : ''}">
			<h1 class="mb-8 text-center text-2xl font-bold uppercase text-white">Recent Posts</h1>

			<div class="grid grid-cols-1 gap-8 xl:grid-cols-2">
				<!-- Blog Post 1 with Featured Image -->
				<article class="overflow-hidden bg-white">
					<img
						src="https://via.placeholder.com/400x250"
						alt="Blog Image"
						class="h-48 w-full object-cover"
					/>
					<div class="p-6">
						<h2 class="mb-2 text-2xl font-semibold">Featured Post One</h2>
						<p class="mb-4 text-gray-600">September 28, 2024</p>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nesciunt.
						</p>
					</div>
				</article>

				<!-- Blog Post 2 without Featured Image -->
				<article class="overflow-hidden bg-white">
					<div class="p-6">
						<h2 class="mb-2 text-2xl font-semibold">Post Two Without Image</h2>
						<p class="mb-4 text-gray-600">September 25, 2024</p>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate dolor nec
							metus tincidunt.
						</p>
					</div>
				</article>

				<!-- Blog Post 3 with Featured Image -->
				<article class="overflow-hidden bg-white">
					<img
						src="https://via.placeholder.com/400x250"
						alt="Blog Image"
						class="h-48 w-full object-cover"
					/>
					<div class="p-6">
						<h2 class="mb-2 text-2xl font-semibold">Featured Post Three</h2>
						<p class="mb-4 text-gray-600">September 22, 2024</p>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, maxime!
						</p>
					</div>
				</article>

				<!-- Blog Post 4 without Featured Image -->
				<article class="overflow-hidden bg-white">
					<div class="p-6">
						<h2 class="mb-2 text-2xl font-semibold">Post Four Without Image</h2>
						<p class="mb-4 text-gray-600">September 18, 2024</p>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae augue sed felis
							varius sodales.
						</p>
					</div>
				</article>

				<!-- Blog Post 5 with Featured Image -->
				<article class="overflow-hidden bg-white">
					<img
						src="https://via.placeholder.com/400x250"
						alt="Blog Image"
						class="h-48 w-full object-cover"
					/>
					<div class="p-6">
						<h2 class="mb-2 text-2xl font-semibold">Featured Post Five</h2>
						<p class="mb-4 text-gray-600">September 15, 2024</p>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, debitis.
						</p>
					</div>
				</article>

				<!-- Blog Post 6 without Featured Image -->
				<article class="overflow-hidden bg-white">
					<div class="p-6">
						<h2 class="mb-2 text-2xl font-semibold">Post Six Without Image</h2>
						<p class="mb-4 text-gray-600">September 10, 2024</p>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices, est ac
							lobortis laoreet.
						</p>
					</div>
				</article>
			</div>
		</main>
	</section>
</main>
