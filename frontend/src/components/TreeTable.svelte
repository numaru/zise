<script>
    import TreeTableRow from "./TreeTableRow.svelte";

    export let nodes;
    export let columns;

    let expandedKeys = {};

    function onToogle(event) {
        expandedKeys = event.detail;
    }
</script>

<table>
    <thead>
        <tr>
            {#each columns as column}
                <th>{column.header}</th>
            {/each}
        </tr>
    </thead>

    <tbody>
        {#each nodes as node}
            <TreeTableRow
                {node}
                {columns}
                {expandedKeys}
                on:toogle={onToogle}
                on:expand
                on:collapse
            />
        {/each}
    </tbody>
</table>

<style>
</style>
