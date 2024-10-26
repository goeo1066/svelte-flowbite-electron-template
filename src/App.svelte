<script>
    import "./app.css";
    import {Alert, Button} from 'flowbite-svelte';
</script>

<div class="p-8">
    <Alert>
        <span class="font-medium">Info alert!</span>
        Change a few things up and try submitting again.
    </Alert>
    <Button on:click={() => {
        window.api.GetVersion().then(it => console.log(it));
    }} >
        Click me
    </Button>
</div>