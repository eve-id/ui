<style global type="postcss">
	main {
		height: 100%;
	}
</style>

<GlobalCSS />

<main class="h-full">
	<slot />
</main>

<script>
	import { GlobalCSS } from "../components/TailWindCSS";
</script>
