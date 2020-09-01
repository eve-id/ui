<style type="postcss">
	.link {
		border-radius: 3px;
		@apply inline px-2 py-1;
	}

	.primary {
		line-height: 24px;
		@apply text-eveprimary-500;
	}

	.primary:hover {
		background: #edf1ff;
	}

	.secondary {
		@apply text-gray-800;
	}

	.secondary:hover {
		@apply bg-gray-200;
	}
</style>

{#if color === 'primary' || color == undefined}
	<a href="{href}" class="link primary {className}" title="{title}">
		<slot />
	</a>
{:else}
	<a href="{href}" class="link secondary {className}" title="{title}">
		<slot />
	</a>
{/if}

<script>
	export let href;
	export let title;
	export let color;

	let className = "";
	export { className as class };
</script>
