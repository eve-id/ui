<style type="postcss">
	.paper {
		background: white;
		border-radius: 3px;
		@apply px-12 py-8 shadow-md;
	}
</style>

<div class="paper {className}">
	<slot />
</div>

<script>
	let className = "";
	export { className as class };
</script>
