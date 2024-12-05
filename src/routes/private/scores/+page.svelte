<script>
	import {
		Heading,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	let { data } = $props();
	let { scores, logs } = $derived(data);
</script>

<div class="text-center">
	<Heading tag="h1" class="mb-4" customSize="text-xl font-extrabold md:text-2xl lg:text-3xl"
		>Leaderboards</Heading
	>
	<div class="mx-auto p-4 lg:w-1/2">
		<Table shadow>
			<TableHead>
				<TableHeadCell>Assassin</TableHeadCell>
				<TableHeadCell>Kills</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				{#each scores as score}
					<TableBodyRow>
						<TableBodyCell>{score.name}</TableBodyCell>
						<TableBodyCell>{score.score}</TableBodyCell>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</div>

	<Heading tag="h1" class="mb-4" customSize="text-xl font-extrabold md:text-2xl lg:text-3xl"
		>Assassination Log</Heading
	>
	<div class="mx-auto p-4 lg:w-1/2">
		<Table shadow>
			<TableHead>
				<TableHeadCell>Assassin</TableHeadCell>
				<TableHeadCell>Victim</TableHeadCell>
				<TableHeadCell>Time of Assassination</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				{#each logs as log}
					<TableBodyRow>
						<TableBodyCell>{log.killer_id}</TableBodyCell>
						<TableBodyCell>{log.victim_id}</TableBodyCell>
						<TableBodyCell>{log.created_at}</TableBodyCell>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</div>
</div>
