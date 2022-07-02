<script>
    import { createEventDispatcher } from "svelte";
    import { parseText } from "../libs/text-parser";

    let error = null;

    const dispatch = createEventDispatcher();

    function onTextChanged(event) {
        error = null;
        try {
            const symbols = parseText(event.target.value);
            dispatch("file-loaded", symbols);
        } catch (e) {
            error = e;
        }
    }
</script>

<textarea on:input={onTextChanged} />
{#if error}
    <div>{error}</div>
{/if}

<style>
</style>
