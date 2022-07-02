<script>
    import { createEventDispatcher } from "svelte";

    export let node;
    export let columns;
    export let expandedKeys;
    export let level = 0;

    const dispatch = createEventDispatcher();

    $: expanded = expandedKeys ? expandedKeys[node.key] !== undefined : false;
    $: style = `margin-left: ${level * 16}px; visibility: ${
        node.children && node.children.length ? "visible" : "hidden"
    };`;

    function onTogglerClick() {
        if (expanded) {
            let ek = { ...expandedKeys };
            delete ek[node.key];
            dispatch("toogle", ek);
            dispatch("expand", node);
            return;
        }
        let ek = expandedKeys ? { ...expandedKeys } : {};
        ek[node.key] = true;
        dispatch("toogle", ek);
        dispatch("collapse", node);
    }
</script>

<tr>
    {#each columns as column}
        <td>
            {#if column.expander}
                <button
                    type="button"
                    on:click|preventDefault|stopPropagation={onTogglerClick}
                    {style}
                >
                    {expanded ? '-' : '+'}
                </button>
            {/if}
            <span>{node.data[column.field]}</span>
        </td>
    {/each}
</tr>
{#if expanded && node.children}
    {#each node.children as childNode}
        <svelte:self
            node={childNode}
            {columns}
            {expandedKeys}
            level={level + 1}
            on:toogle
            on:expand
            on:collapse
        />
    {/each}
{/if}

<style>
</style>
