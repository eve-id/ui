<style type="postcss">
	.btn {
		box-shadow: 0 10px 20px 3px rgba(82, 104, 206, 0.15);
		min-width: 64px;
		border-radius: 3px;
		border: 0;
		outline: 0;
		background-color: red;
		transition: all 600ms ease;
		@apply block px-8 pb-2 pt-2 text-white font-display;
	}

	.primary {
		@apply bg-eveprimary-500;
	}

	.secondary {
		@apply bg-evesecondary-500;
	}

	.btn:hover {
		background-color: #7187e4;
		transform: scale(1.03);
	}

	.disabled {
		@apply bg-gray-400;
	}

	.disabled:hover {
		transform: scale(1);
		box-shadow: 0;
		@apply bg-gray-400 cursor-not-allowed;
	}
</style>

{#if color === 'primary'}
	<button class="{'btn primary'}" class:disabled on:click disabled="{disabled}">
		<slot />
	</button>
{:else}
	<button class="{'btn secondary'}" class:disabled on:click disabled="{disabled}">
		<slot />
	</button>
{/if}

<script>
	export let color = "primary";
	export let disabled = false;
</script>
