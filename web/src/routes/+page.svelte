<script>
	import { onMount } from 'svelte';
	export let data; // SvelteKit automatically passes the returned data from load()
	let pointsOfUnity = data.pointsOfUnity;

	let isDark = false;
	
	// Professional form styling with dynamic script loading
	onMount(() => {
		// Wait a moment for hydration to complete
		setTimeout(() => {
			// First, create the container if it doesn't exist
			if (!document.getElementById('audienceful-wrapper')) {
				const wrapper = document.createElement('div');
				wrapper.id = 'audienceful-wrapper';
				wrapper.innerHTML = '<div id="audienceful-5ejxTA" style="min-height: 200px; width: 100%;"></div>';
				document.getElementById('newsletter-container').querySelector('.p-10').appendChild(wrapper);
			}
			
			// Then load the script dynamically to ensure it runs after hydration
			const existingScript = document.querySelector('script[src*="audiencefulapp.net"]');
			if (existingScript) {
				existingScript.remove(); // Remove existing script if any
			}
			
			const script = document.createElement('script');
			script.setAttribute('data-orgid', 'org_fN6fEQK8');
			script.src = 'https://cdn.audiencefulapp.net/forms/audienceful.min.js';
			script.onload = () => {
				console.log('Audienceful script loaded successfully');
				if (window.Audienceful && typeof window.Audienceful.initialize === 'function') {
					window.Audienceful.initialize();
					console.log('Audienceful initialized');
					
					// Apply professional styling to form elements
					setTimeout(() => {
						// Remove duplicate heading if present
						const formTitle = document.querySelector('#audienceful-5ejxTA h2, #audienceful-5ejxTA .heading');
						if (formTitle) {
							formTitle.style.display = 'none';
						}
						
						// Style form container
						const formContainer = document.getElementById('audienceful-5ejxTA');
						if (formContainer) {
							formContainer.style.fontFamily = 'inherit';
							
							// Apply professional styling to all inputs
							const formInputs = document.querySelectorAll('#audienceful-5ejxTA input[type="text"], #audienceful-5ejxTA input[type="email"]');
							formInputs.forEach(input => {
								// Enhanced input styling
								input.style.backgroundColor = 'rgba(20, 20, 20, 0.8)';
								input.style.borderWidth = '1px';
								input.style.borderColor = '#333';
								input.style.borderRadius = '2px';
								input.style.padding = '12px 16px';
								input.style.fontSize = '16px';
								input.style.color = 'white';
								input.style.width = '100%';
								input.style.marginBottom = '12px';
								input.style.transition = 'all 0.2s ease';
								input.style.boxShadow = 'none';
								
								// Focus styles using event listeners
								input.addEventListener('focus', () => {
									input.style.borderColor = '#2E8B57';
									input.style.outline = 'none';
									input.style.boxShadow = '0 0 0 1px #2E8B57';
								});
								
								input.addEventListener('blur', () => {
									input.style.borderColor = '#333';
									input.style.boxShadow = 'none';
								});
							});
							
							// Professional button styling
							const submitButton = document.querySelector('#audienceful-5ejxTA button[type="submit"]');
							if (submitButton) {
								submitButton.style.backgroundColor = '#2E8B57';
								submitButton.style.color = 'white';
								submitButton.style.border = 'none';
								submitButton.style.borderRadius = '2px';
								submitButton.style.padding = '12px 24px';
								submitButton.style.fontSize = '16px';
								submitButton.style.fontWeight = '600';
								submitButton.style.cursor = 'pointer';
								submitButton.style.width = '100%';
								submitButton.style.marginTop = '4px';
								submitButton.style.transition = 'all 0.3s ease';
								submitButton.style.letterSpacing = '0.5px';
								submitButton.style.textTransform = 'uppercase';
								
								// Hover effects
								submitButton.addEventListener('mouseover', () => {
									submitButton.style.backgroundColor = '#FF6347';
									submitButton.style.transform = 'translateY(-2px)';
									submitButton.style.boxShadow = '0 4px 10px rgba(255, 99, 71, 0.3)';
								});
								
								submitButton.addEventListener('mouseout', () => {
									submitButton.style.backgroundColor = '#2E8B57';
									submitButton.style.transform = 'translateY(0)';
									submitButton.style.boxShadow = 'none';
								});
							}
							
							// Style any text that appears under the form
							const formFooter = document.querySelector('#audienceful-5ejxTA .footer, #audienceful-5ejxTA .powered-by');
							if (formFooter) {
								formFooter.style.fontSize = '12px';
								formFooter.style.opacity = '0.6';
								formFooter.style.textAlign = 'center';
								formFooter.style.marginTop = '12px';
							}
						}
					}, 800); // More time to ensure form is fully rendered
				}
			};
			
			document.head.appendChild(script);
		}, 600);
	});
</script>

<main class="{isDark ? 'bg-black text-white' : 'bg-white text-black'}">
	<div class="container mx-auto px-4 max-w-6xl">
		<section class="pt-12 md:pt-20 lg:pt-28">
			<article class="pt-8 md:pt-12 -mb-9">
				<article class="font-hero text-4xl md:text-5xl lg:text-6xl font-extrabold 2xl:text-7xl text-center">
					<div class="flex justify-center">
						<img src="/logo.jpeg" alt="AISC logo" class="transition-all z-40 duration-300 rounded-full w-48 sm:w-60 md:w-72 bg-white h-48 sm:h-60 md:h-72 object-contain shadow-[0_0_2rem_1.5rem_#2E8B57]">
					</div>
				</article>
			</article>
			<div class="intro bg-[#FF6347] md:bg-transparent flex flex-col md:flex-row items-center p-4 md:p-8 lg:p-20 text-base md:text-lg shadow-[inset_0_0_2rem_1.5rem_#FF6347]">
				<div class="w-full md:w-1/3 md:order-last mb-4 md:mb-0 md:ml-8">
					<img 
						class="w-full h-48 sm:h-60 md:h-80 object-cover md:object-contain mx-auto" 
						src="/home.png" 
						alt="AISC logo"
					>
				</div>
				<div class="w-full md:w-2/3 p-4 pt-0 md:p-0 mt-4 md:mt-0 text-lg sm:text-xl md:text-2xl">
		
					The Anti-Imperialist Scholars Collective (AISC) is a group of scholars committed to
					challenging US-led imperialism and supporting liberation movements of the Global Majority
					through critical knowledge production and international solidarity.
					
				</div>
			</div>
			
			<!-- Newsletter Form - Professional Design -->
			<div id="newsletter-container" class="my-16 mx-auto max-w-2xl relative">
				<!-- Decorative elements -->
				<div class="absolute -top-3 left-0 right-0 h-1 bg-[#FF6347]"></div>
				<div class="absolute -bottom-3 left-0 right-0 h-1 bg-[#2E8B57]"></div>
				<div class="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6347] to-[#2E8B57]"></div>
				<div class="absolute -right-3 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6347] to-[#2E8B57]"></div>
				
				<!-- Content -->
				<div class="p-10 bg-white bg-opacity-90 backdrop-blur-sm border border-gray-300 shadow-lg">
					<div class="flex items-center justify-center mb-8">
						<div class="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#2E8B57]"></div>
						<h2 class="font-hero text-3xl mx-4 text-[#2E8B57] text-center font-bold px-2">Join Our Newsletter</h2>
						<div class="w-12 h-0.5 bg-gradient-to-r from-[#2E8B57] to-transparent"></div>
					</div>
					
					<!-- Form will be inserted here dynamically -->
				</div>
			</div>
			
			<section class="relative border-t-8 border-gray-200 pt-8 md:pt-16">
				<h2 class="font-hero text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-12 text-[#2E8B57]">Featured Posts and Events</h2>
				
				<div class="grid gap-6 md:gap-12">
					<div class="relative">
						<h3 class="font-hero text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 pl-4 border-l-4 border-[#2E8B57]">Latest Posts</h3>
						{#if data.blogs && data.blogs.length > 0}
							{#each data.blogs as post}
								<article class="mb-4 md:mb-8 p-4 md:p-6 border-2 border-[#2E8B57] transform transition-transform hover:scale-105">
									<h4 class="font-hero text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3">{post.title}</h4>
									<span class="inline-block bg-[#FF6347] text-black text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider mb-2">Original Content</span>
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

<style lang="postcss">
	a {
		@apply hover:text-[#FF6347];
	}
	.copy {
		font-family: "ivystyle-tw", sans-serif;
	}
	.audienceful-badge-5ejxTA {
		display: none !important;
	}
</style>