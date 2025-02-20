<script>
	import '../app.css';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>
<Nav />
<SocialLinks />
<div class="pb-24">
	<slot></slot>
</div>
