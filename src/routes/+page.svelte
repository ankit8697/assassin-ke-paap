<script>
	import { Heading, Button } from 'flowbite-svelte';
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="text-center">
		<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold md:text-5xl lg:text-6xl"
			>Join the great Assassination game</Heading
		>
		<div class="mt-15 flex items-center justify-center gap-4">
			<Button color="dark" href="/login">Sign In</Button>
			<Button color="dark" href="/scores">Scores</Button>
			<Button color="dark" href="/report">Report Assassination</Button>
		</div>
	</div>
</div>
