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
		@apply mb-4 font-display text-2xl font-bold;
	}

	.title {
		color: #191a1b;
		@apply mb-8 font-display text-xl;
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
	<title>Sign up - EveID</title>
</svelte:head>

<div class="container">
	<Paper class="mb-4">
		<div class="flex flex-col justify-center">
			<h1 class="logo">EveID</h1>
			<h1 class="title">Sign Up</h1>
			<form on:submit="{handleSubmit}">
				<div class="inputs mb-12">
					<div class="mb-12">
						<TextField
							label="E-mail"
							outlined
							name="email"
							color="{'eveprimary'}"
							placeholder="yourname@email.com"
							class="pt-2 pb-2 outline-none"
							on:input="{debounce(handleChange, 150)}"
							on:change="{handleChange}"
							bind:value="{$form.email}"
							error="{$errors.email != null ? $errors.email : ''}"
						/>
					</div>
					<div class="mb-16">
						<TextField
							label="Password"
							outlined
							color="{'eveprimary'}"
							placeholder="****"
							name="password"
							type="password"
							classes="mt-2 mb-2 relative text-gray-600 dark:text-gray-100"
							on:input="{debounce(handleChange, 150)}"
							on:change="{handleChange}"
							bind:value="{$form.password}"
							class="{`pt-2 pb-2 outline-none ${!passwordTouched || passwordError === '' ? '-mb-10' : ''}`}"
							error="{(passwordTouched && passwordError) || ''}"
						/>
						{#if !passwordTouched && passwordError === ''}
							<small class="text-gray-600 text-xs pl-4">Use 8 or more characters</small>
						{/if}
					</div>
				</div>
				<div class="flex flex-row items-center">
					<div class="mr-auto">
						<Link href="/signin">Sign in instead</Link>
					</div>
					{#if $state.isSubmitting}
						<Spinner />
					{/if}
					<div class="ml-4">
						<Button
							color="primary"
							class="focus:outline-none"
							type="submit"
							disabled="{$state.isSubmitting || hasErrors}"
							on:click="{(ev) => {
								validateField('email');
								validateField('password');
								if (hasErrors) {
									ev.preventDefault();
								}
							}}"
						>
							Sign up
						</Button>
					</div>
				</div>
			</form>
		</div>
	</Paper>

	<footer class="flex flex-row text-sm mt-4" style="color:#2e343b;">
		<div class="mr-auto">
			<div class="language-switcher flex relative cursor-pointer">
				<div class="language-container">
					<div class="language-presentation">
						<span>English</span>
					</div>
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
	import Link from "../../components/Link/Link.svelte";
	import Paper from "../../components/Paper/Paper.svelte";
	import TextField from "../../components/TextField";
	import { Button } from "../../components/Button";
	import { createForm } from "svelte-forms-lib";
	import Spinner from "svelte-spinner";
	import safe from "../../utils/safe";
	import debounce from "lodash/debounce";

	// eslint-disable-next-line no-control-regex
	const rEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

	const { form, errors, state, validateField, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: "",
			password: "",
		},
		validate: (values) => {
			let errs = {};
			if (values.email === "") {
				errs["email"] = "email is required";
			} else if (!rEmail.test(values.email)) {
				errs["email"] = "email is not valid";
			}

			if (values.password === "") {
				errs["password"] = "password is required";
			} else if (safe(values).password.length.unsafe < 8) {
				errs["password"] = "password must be at least 8 characters";
			}
			return errs;
		},
		onSubmit: (values) => {
			return new Promise((resolve) => setTimeout(resolve, 1000));
		},
	});

	$: passwordTouched = safe($state).touched.password.unsafe;
	$: passwordError = safe($errors).password.unsafe;

	let errorList = (list) =>
		Object.entries(list).filter((e) => {
			return e[1] != undefined;
		});

	$: hasErrors = [...errorList($errors)].length !== 0;
</script>
