<script>
    import { createEventDispatcher } from 'svelte';
    
    export let name;
    export let node;
    export let PopCapPak;
    
    let expanded = false;
    let isLeaf = node instanceof PopCapPak.Entry;
    const dispatch = createEventDispatcher();
    
    function handleOnClick(event) {
        if(isLeaf) {
            dispatch('view', {
                node,
            });
        }
    }
    
    function toggleExpanded() {
        if(!isLeaf) 
            expanded = !expanded;
    }
</script>
<div>
    <div>
        {#if !isLeaf}
            <div style="display: inline; cursor: pointer;" on:click={toggleExpanded} on:keypress={toggleExpanded}>
                {(expanded ? '-' : '+')}
            </div>
        {/if}
        
        <div on:click={handleOnClick} on:keypress={handleOnClick} style="display: inline;">
            {name}
        </div>
    </div>
    {#if expanded}
        <div style="padding-left: 1em;">
            {#each Object.entries(node) as [name, node]}
                <svelte:self {name} {node} {PopCapPak} on:view />
            {/each}
        </div>
    {/if}
</div>