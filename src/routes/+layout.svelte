<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Avatar, type PopupSettings, popup } from '@skeletonlabs/skeleton';
	import { CircleUserRound, Home, UserRoundIcon } from 'lucide-svelte';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { user } from '$lib/stores/user';
	import { firebaseAuth } from '$lib/firebase';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'top'
	};

	function handleAvatarClick(e: MouseEvent): void {
		const b = document.getElementById('avabutton') as HTMLButtonElement;
		b.click();
	}

	function handletLogOut() {
		firebaseAuth.signOut();
	}
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->

		{#await firebaseAuth.authStateReady()}
			<AppBar>
				<div class="placeholder" />
			</AppBar>
		{:then _}
			<AppBar
				><svelte:fragment slot="lead">
					<strong class="text-xl uppercase">Password Manager</strong>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<a href="/" class="btn hover:variant-ghost-primary"><Home class="mx-2" />Homepage</a>
					{#if !$user}
						<a href="/register" class="btn hover:variant-ghost-primary">Register</a>
						<a href="/login" class="btn hover:variant-ghost-primary">Login</a>
					{:else}
					<button use:popup={popupClick}><Avatar
							border="border-4 border-surface-300-600-token hover:!border-primary-500"
							cursor="cursor-pointer"
							class="w-11"
							src={$user.photoURL ?? ''}
						></Avatar></button>

						
						
						<!--popup content-->
						<div class="card p-4 variant-soft-primary" data-popup="popupClick">
							<div class="flex items-center justify-center flex-col">
								<span class="text-on-primary-token text-center">{$user.email}</span>
								<a href="profile" class="btn variant-filled-secondary	my-1"><UserRoundIcon/>Profile</a>
								<button type="button" class="btn variant-filled-secondary	my-1" on:click={handletLogOut}>Logout</button>
							</div>
						</div>
						<!--end of popup content-->
					{/if}
				</svelte:fragment>
			</AppBar>
		{/await}
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
