<script>
    import LoadedApp from './LoadedApp.svelte';
    
    let PopCapPak = import('../pkg');
</script>
<div style="margin: 0.2em; display: flex; flex: 1;">
    {#await PopCapPak}
        Loading...
    {:then PopCapPak}
        <LoadedApp {PopCapPak} />
    {:catch error}
        {error.message}
    {/await}
</div>