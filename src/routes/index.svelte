<style type="postcss">
	.container {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 500px;
		color: #191a1b;
		@apply absolute;
	}

	.logo {
		color: #191a1b;
		@apply mb-6 font-display text-2xl font-bold;
	}

	.subtitle {
		@apply mb-6 text-base;
	}

	.arrow-bottom {
		border-color: currentColor transparent transparent transparent;
		border-style: solid;
		border-width: 4px 4px 0 4px;
		height: 0;
		width: 0;
	}

	.arrow-container {
		position: absolute;
		right: -15px;
		top: 8px;
		width: auto;
	}
</style>

<svelte:head>
	<title>EveID - Simple Identity Service</title>
</svelte:head>

<div class="container">
	<Paper class="mb-4">
		<div class="flex flex-col items-center justify-center text-center">
			<h1 class="logo">EveID</h1>
			<p class="subtitle">
				Identity services in a simple package, easy integration, simple payment.
			</p>
			<div class="mb-6">
				<ButtonLink href="/accounts/signup" title="Sign up"><span>Get started</span></ButtonLink>
			</div>
			<div class="mb-4 text-gray-800">
				<Link href="/learn-more" color="secondary">Learn more</Link>
				<span class="mx-4">or</span>
				<Link href="/accounts/login" class="login-link">Login</Link>
			</div>
		</div>
	</Paper>
	<footer class="flex flex-row text-sm" style="color:#2e343b;">
		<div class="mr-auto">
			<div class="language-switcher flex relative cursor-pointer">
				<div class="language-container">
					<div class="language-presentation"><span>English</span></div>
					<div class="language-list"></div>
				</div>
				<div class="arrow-container">
					<div class="arrow-bottom"></div>
				</div>
			</div>
		</div>
		<ul>
			<li>
				<Link href="/terms" color="secondary">Terms</Link>
			</li>
		</ul>
	</footer>
</div>

<script>
	import { ButtonLink } from "../components/Button";
	import Link from "../components/Link/Link.svelte";
	import Paper from "../components/Paper/Paper.svelte";
</script>
