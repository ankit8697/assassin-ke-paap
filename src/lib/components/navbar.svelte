<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';
</script>

<Navbar>
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Assassins</span
		>
	</NavBrand>
	<div class="flex md:order-2">
		<DarkMode />
		<NavHamburger />
	</div>
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/private/scores">Scores</NavLi>
		<NavLi href="/private/report">Report Assassination</NavLi>
	</NavUl>
</Navbar>
