<script>
  import { Card, Button } from 'flowbite-svelte';

  let { data } = $props();
	let { scores } = $derived(data);
</script>

<div class="grid grid-cols-3 gap-5 mx-auto w-1/2 p-4">
    {#each scores as score}
        <Card>
            <form method="POST">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{score.name}</h5>
                <input type="hidden" name="target" value={score.id}>
                <Button type="submit" class="mt-5 flex-wrap">
                    Mark Kill
                </Button>
            </form>
        </Card>
	{/each}
</div>