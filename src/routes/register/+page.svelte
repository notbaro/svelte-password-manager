<script lang="ts">
	import { enhance } from '$app/forms';
	import Google from '$lib/icons/Google.svelte';
	import { firebaseAuth, signInWithGithub, signInWithGoogle } from '$lib/firebase';
	import { Github } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { ProgressRadial, getToastStore } from '@skeletonlabs/skeleton';
	import type { FirebaseError } from 'firebase/app';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

	let email = '';
	let password = '';

	const toastStore = getToastStore();

	const handleGoogleLogin = async () => {
		try {
			await signInWithPopup(firebaseAuth, new GoogleAuthProvider());
			await goto('/');
		} catch (error) {
			toastStore.trigger({
				message: typeof error,
				background: 'variant-filled-error'
			})	
		}
	};

	const handleGithubLogin = async () => {
		await signInWithGithub();
		await goto('/');
	};

	const handleSubmit = async () => {};

</script>

<div class="flex items-center justify-center">
	<div class="card p-4 m-4 min-w-96 variant-ghost-surface">
		<header class="card-header">
			<h1 class="text-2xl font-bold text-on-surface-token text-center">Register</h1>
		</header>
		<section class="p-4">
			<form on:submit={handleSubmit}>
				<label for="email" class="label font-semibold text-on-surface-token">Email</label>
				<input
					name="email"
					title="Enter email"
					type="email"
					placeholder="abc@example.com"
					class="input variant-form-material text-on-surface-token"
				/>
				<label for="password" class="label font-semibold text-on-surface-token">Password</label>
				<input
					name="password"
					title="Enter password"
					type="password"
					placeholder="********"
					class="input variant-form-material text-on-surface-token"
				/>
				<button type="submit" class="btn variant-filled-primary w-full text-xl font-bold mt-3"
					>Register</button
				>
			</form>
		</section>
		<footer class="card-footer">
			<button
				type="button"
				class="btn variant-filled-secondary w-full text-xl font-bold text-on-secondary-token my-2"
				on:click={handleGoogleLogin}
				>Login with Google&nbsp;
				<Google /></button
			>
			<button
				class="btn variant-filled-secondary w-full text-xl font-bold text-on-secondary-token"
				on:click={handleGithubLogin}>Login with Github &nbsp;<Github /></button
			>
		</footer>
	</div>
</div>
