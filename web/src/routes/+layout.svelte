<script>
	import '../app.css';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />
<div class="pt-12 md:pt-8">
	<slot></slot>
</div>
<SocialLinks />
