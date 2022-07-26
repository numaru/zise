<script>
    import TreeTableRow from "./TreeTableRow.svelte";

    export let nodes;
    export let columns;

    let expandedKeys = {};

    function onToogle(event) {
        expandedKeys = event.detail;
    }
</script>

<div class="wrapper">
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
</div>

<style>
    .wrapper {
        overflow: scroll;
        max-height: 40em;
    }

    table {
        table-layout: auto;
    }

    .wrapper tr th:nth-child(n+2) {
        width: 6em;
    }
</style>
