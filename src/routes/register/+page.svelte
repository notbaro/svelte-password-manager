<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

</script>

<div class="flex items-center justify-center">
	<div class="card p-4 m-4 min-w-96 variant-ghost-surface">
		<header class="card-header">
			<h1 class="text-2xl font-bold text-on-surface-token text-center">Register</h1>
		</header>
		<section class="p-4">
			<form action="?/register" method="POST" use:enhance>
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
	</div>
</div>
