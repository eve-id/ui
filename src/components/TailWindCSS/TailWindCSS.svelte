<style global type="postcss">
	@import "../../global.pcss";

	body {
		background-color: rgba(240, 244, 252, 0.883);
		@apply font-body;
	}

	button:focus,
	input:focus,
	li:focus,
	div:focus,
	textarea:focus {
		@apply outline-none;
	}

	.list {
		margin-top: 2px;
	}

	.a {
		@apply underline text-blue-600;
	}

	html {
		font-family: "Roboto", sans-serif;
	}

	input[type="number"] {
		-moz-appearance: textfield;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	.ripple {
		border-radius: 50%;
		position: absolute;
		transform: scale(0);
	}

	.ripple-normal {
		animation: ripple-normal 0.6s;
	}

	.ripple-centered {
		animation: ripple-centered 0.4s;
	}

	@keyframes ripple-normal {
		to {
			transform: scale(2.5);
			opacity: 0;
		}
	}

	@keyframes ripple-centered {
		to {
			transform: scale(1);
			opacity: 0;
		}
	}

	input[type="range"] {
		--bg: var(--color-gray-200);
		--bg-focus: var(--color-gray-200);
	}

	input[type="range"] {
		-webkit-appearance: none;
		height: 4px;
	}

	input[type="range"]:disabled {
		@apply bg-gray-300;
	}

	input[type="range"]::range-thumb {
		-webkit-appearance: none;
		@apply rounded-full p-1 w-5 h-5 elevation-3;
		background-color: var(--bg);
	}

	input[type="range"]:disabled::range-thumb {
		@apply bg-gray-400;
	}

	input[type="range"]::-ms-thumb {
		margin: 0;
	}
	input[type="range"]:focus {
		outline: none;
	}

	input[type="range"]:focus::range-thumb {
		-webkit-appearance: none;
		@apply rounded-full p-1 w-5 h-5 elevation-3;
		margin-top: -0.5rem;
		background-color: var(--bg-focus);
	}

	input[type="range"]:focus::range-track {
		@apply rounded;
		height: 4px;
	}

	th:first-child,
	td:first-child {
		@apply text-left border-r border-gray-200;
	}

	th:first-child .sort-wrapper {
		@apply justify-start;
	}

	th .sort {
		@apply w-4 h-4 opacity-0;
	}

	th:hover .sort {
		@apply opacity-100;
	}

	tr.selected {
		@apply bg-primary-50;
	}

	.select {
		@apply pb-0 mb-0 cursor-pointer;
		height: 3.5rem;
	}
	.select.dense {
		height: 2.7rem;
	}

	.code-inline {
		@apply text-sm bg-secondary-50 text-secondary-900 rounded-sm p-1;
		letter-spacing: 0.25px;
	}
</style>
