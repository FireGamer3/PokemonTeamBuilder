<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
<script>
    import Nav from "../components/nav.svelte";
</script>
<div class="dark">
    <div class="bg-white dark:bg-gray-900 dark:text-white">
        <Nav></Nav>
        <div class="p-8 max-w-7xl mx-auto min-h-screen">
            <main>
                <slot />
            </main>
        </div>
    </div>
</div>
