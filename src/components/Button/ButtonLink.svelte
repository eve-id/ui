<style type="postcss">
	.button {
		box-shadow: 0 10px 20px 3px rgba(82, 104, 206, 0.15);
		min-width: 64px;
		border-radius: 3px;
		border: 0;
		outline: 0;
		transition: all 600ms ease;
		@apply block px-8 pb-2 pt-2 text-white font-display;
	}

	.button.primary {
		@apply bg-eveprimary-500;
	}

	.button.secondary {
		@apply bg-evesecondary-500;
	}

	.button:hover {
		background-color: #7187e4;
		transform: scale(1.03);
	}
</style>

{#if color == undefined || color === 'primary'}
	<a class="button primary" href="{href}" title="{title}">
		<slot />
	</a>
{:else}
	<a class="button secondary" href="{href}" title="{title}">
		<slot />
	</a>
{/if}

<script>
	export let href;
	export let title;
	export let color;
</script>
