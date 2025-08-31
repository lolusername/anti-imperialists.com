<script>
	import { onMount } from 'svelte';
	import { getAllAuthorsDisplayNames } from '$lib/utils/authorUtils';
	export let data; // SvelteKit automatically passes the returned data from load()
	let pointsOfUnity = data.pointsOfUnity;
	
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
							
							// Force apply styles to all inputs with multiple attempts
							const applyInputStyles = () => {
								const formInputs = document.querySelectorAll('#audienceful-5ejxTA input[type="text"], #audienceful-5ejxTA input[type="email"]');
								formInputs.forEach(input => {
									// Force white text color
									input.style.setProperty('color', 'white', 'important');
									input.style.setProperty('background-color', 'rgba(20, 20, 20, 0.8)', 'important');
									input.style.setProperty('border', '1px solid #333', 'important');
									input.style.setProperty('border-radius', '2px', 'important');
									input.style.setProperty('padding', '12px 16px', 'important');
									input.style.setProperty('font-size', '16px', 'important');
									input.style.setProperty('width', '100%', 'important');
									input.style.setProperty('margin-bottom', '12px', 'important');
									input.style.setProperty('transition', 'all 0.2s ease', 'important');
									input.style.setProperty('box-shadow', 'none', 'important');
									
									// Add focus event listeners
									input.addEventListener('focus', () => {
										input.style.setProperty('border-color', '#2E8B57', 'important');
										input.style.setProperty('outline', 'none', 'important');
										input.style.setProperty('box-shadow', '0 0 0 1px #2E8B57', 'important');
									});
									
									input.addEventListener('blur', () => {
										input.style.setProperty('border-color', '#333', 'important');
										input.style.setProperty('box-shadow', 'none', 'important');
									});
								});
							};
							
							// Apply styles immediately and then retry a few times
							applyInputStyles();
							setTimeout(applyInputStyles, 100);
							setTimeout(applyInputStyles, 500);
							setTimeout(applyInputStyles, 1000);
							
							// Set up a MutationObserver to continuously monitor for form changes
							const observer = new MutationObserver((mutations) => {
								mutations.forEach((mutation) => {
									if (mutation.type === 'childList' || mutation.type === 'attributes') {
										// Re-apply styles whenever the form changes
										setTimeout(applyInputStyles, 50);
									}
								});
							});
							
							// Start observing the form container
							if (formContainer) {
								observer.observe(formContainer, {
									childList: true,
									subtree: true,
									attributes: true,
									attributeFilter: ['style', 'class']
								});
							}
							
							// Also set up a periodic check as a backup
							const intervalId = setInterval(() => {
								const inputs = document.querySelectorAll('#audienceful-5ejxTA input');
								if (inputs.length > 0) {
									applyInputStyles();
								}
							}, 2000);
							
							// Clean up interval after 30 seconds
							setTimeout(() => {
								clearInterval(intervalId);
								observer.disconnect();
							}, 30000);
							
							// Style submit button
							const submitButton = document.querySelector('#audienceful-5ejxTA button[type="submit"]');
							if (submitButton) {
								submitButton.style.setProperty('background-color', '#2E8B57', 'important');
								submitButton.style.setProperty('color', 'white', 'important');
								submitButton.style.setProperty('border', 'none', 'important');
								submitButton.style.setProperty('border-radius', '2px', 'important');
								submitButton.style.setProperty('padding', '12px 24px', 'important');
								submitButton.style.setProperty('font-size', '16px', 'important');
								submitButton.style.setProperty('font-weight', '600', 'important');
								submitButton.style.setProperty('cursor', 'pointer', 'important');
								submitButton.style.setProperty('width', '100%', 'important');
								submitButton.style.setProperty('margin-top', '4px', 'important');
								submitButton.style.setProperty('transition', 'all 0.3s ease', 'important');
								submitButton.style.setProperty('letter-spacing', '0.5px', 'important');
								submitButton.style.setProperty('text-transform', 'uppercase', 'important');
							}
							
							// Style footer text
							const formFooter = document.querySelector('#audienceful-5ejxTA .footer, #audienceful-5ejxTA .powered-by');
							if (formFooter) {
								formFooter.style.setProperty('font-size', '12px', 'important');
								formFooter.style.setProperty('opacity', '0.6', 'important');
								formFooter.style.setProperty('text-align', 'center', 'important');
								formFooter.style.setProperty('margin-top', '12px', 'important');
								formFooter.style.setProperty('color', 'white', 'important');
							}
						}
					}, 800); // More time to ensure form is fully rendered
				}
			};
			
			document.head.appendChild(script);
		}, 600);
	});
</script>

<main class="bg-white dark:bg-black text-black dark:text-white">
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
				<div class="p-10 bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm border border-gray-300 dark:border-gray-600 shadow-lg">
					<div class="flex items-center justify-center mb-8">
						<div class="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#2E8B57]"></div>
						<h2 class="font-hero text-3xl mx-4 text-[#2E8B57] text-center font-bold px-2">Join Our Newsletter</h2>
						<div class="w-12 h-0.5 bg-gradient-to-r from-[#2E8B57] to-transparent"></div>
					</div>
					
					<!-- Form will be inserted here dynamically -->
				</div>
			</div>
			
			<section class="relative border-t-8 border-gray-200 dark:border-gray-700 pt-8 md:pt-16">
				<h2 class="font-hero text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-12 text-[#2E8B57]">Featured Posts and Events</h2>
				
				<div class="grid gap-6 md:gap-12">
					<div class="relative">
						<h3 class="font-hero text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 pl-4 border-l-4 border-[#2E8B57]">Latest Posts</h3>
						{#if data.blogs && data.blogs.length > 0}
							{#each data.blogs as post}
								<article class="mb-4 md:mb-8 p-4 md:p-6 border-2 border-[#2E8B57] transform transition-transform hover:scale-105">
									<h4 class="font-hero text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3">{post.title}</h4>
									<span class="inline-block bg-[#FF6347] text-black text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider mb-2">Original Content</span>
									{#if post.author || (post.additionalAuthors && post.additionalAuthors.length > 0)}
										<p class="text-sm text-gray-400">
											By {getAllAuthorsDisplayNames(post.author, post.additionalAuthors)}
										</p>
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
	
	/* Form styling to ensure text is visible */
	#audienceful-5ejxTA input[type="text"],
	#audienceful-5ejxTA input[type="email"],
	#audienceful-5ejxTA input,
	#audienceful-5ejxTA .input,
	#audienceful-5ejxTA .form-input {
		background-color: rgba(20, 20, 20, 0.8) !important;
		border: 1px solid #333 !important;
		border-radius: 2px !important;
		padding: 12px 16px !important;
		font-size: 16px !important;
		color: white !important;
		width: 100% !important;
		margin-bottom: 12px !important;
		transition: all 0.2s ease !important;
		box-shadow: none !important;
	}
	
	#audienceful-5ejxTA input[type="text"]:focus,
	#audienceful-5ejxTA input[type="email"]:focus,
	#audienceful-5ejxTA input:focus,
	#audienceful-5ejxTA .input:focus,
	#audienceful-5ejxTA .form-input:focus {
		border-color: #2E8B57 !important;
		outline: none !important;
		box-shadow: 0 0 0 1px #2E8B57 !important;
	}
	
	#audienceful-5ejxTA button[type="submit"],
	#audienceful-5ejxTA button,
	#audienceful-5ejxTA .button,
	#audienceful-5ejxTA .submit-button {
		background-color: #2E8B57 !important;
		color: white !important;
		border: none !important;
		border-radius: 2px !important;
		padding: 12px 24px !important;
		font-size: 16px !important;
		font-weight: 600 !important;
		cursor: pointer !important;
		width: 100% !important;
		margin-top: 4px !important;
		transition: all 0.3s ease !important;
		letter-spacing: 0.5px !important;
		text-transform: uppercase !important;
	}
	
	#audienceful-5ejxTA button[type="submit"]:hover,
	#audienceful-5ejxTA button:hover,
	#audienceful-5ejxTA .button:hover,
	#audienceful-5ejxTA .submit-button:hover {
		background-color: #FF6347 !important;
		transform: translateY(-2px) !important;
		box-shadow: 0 4px 10px rgba(255, 99, 71, 0.3) !important;
	}
	
	#audienceful-5ejxTA .footer,
	#audienceful-5ejxTA .powered-by,
	#audienceful-5ejxTA p,
	#audienceful-5ejxTA span {
		font-size: 12px !important;
		opacity: 0.6 !important;
		text-align: center !important;
		margin-top: 12px !important;
		color: white !important;
	}
	
	/* Override any inline styles */
	#audienceful-5ejxTA * {
		color: white !important;
	}
	
	#audienceful-5ejxTA input,
	#audienceful-5ejxTA input[type="text"],
	#audienceful-5ejxTA input[type="email"] {
		color: white !important;
		background-color: rgba(20, 20, 20, 0.8) !important;
	}
</style>