<template>
    <Button class="button" 
        @click="$emit('onClick', label)"
        :class="{ double, triple, operation }">
        {{ label }}
    </Button>
</template>

<script>
export default {
    props: {
        label: {},
        operation: { type: Boolean },
        double: { type: Boolean },
        triple: { type: Boolean }
    }
}
</script>

<style>
    :root {
        --bg-button: #f0f0f0;
        --border-button: solid 1px #888;
    }

    .button {
        font-size: 1.4em;
        background-color: #f0f0f0;
        border: none;
        border-right: solid 1px #888;
        border-bottom: solid 1px #888;
    }

    .button:active {
        background-color: #ccc;
    }

    .button.double {
        grid-column: span 2;
    }

    .button.triple {
        grid-column: span 3;
    }

    .button.operation {
        background-color: #fa8321;
        color: #fff;
    }

    .button.operation:active {
        background-color: #fa8321cc;
    }
</style>
