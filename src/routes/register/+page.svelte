<script>
	import Navbar from '$lib/components/navbar.svelte';
	import { supabase } from '$lib/supabaseClient';
	import { Heading, Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
</script>

<div class="flex min-h-screen items-center justify-center">
	<Card>
		<form class="flex flex-col space-y-6" action="/register" method="POST">
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">
				Join our fraternity of Assassins
			</h3>
			<Label class="space-y-2">
				<span>Name</span>
				<Input type="text" name="name" placeholder="Bruce Wayne" required />
			</Label>
			<Label class="space-y-2">
				<span>Email</span>
				<Input type="email" name="email" placeholder="name@company.com" required />
			</Label>
			<Label class="space-y-2">
				<span>Your password</span>
				<Input type="password" name="password" placeholder="•••••" required />
			</Label>
			<Button type="submit" class="w-full">Create your account</Button>
			<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
				Already registered? <a
					href="/login"
					class="text-primary-700 hover:underline dark:text-primary-500"
				>
					Log in
				</a>
			</div>
		</form>
	</Card>
</div>
