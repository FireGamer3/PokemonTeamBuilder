<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
<div class="dark ">
    <div class="bg-white dark:bg-gray-900 dark:text-white">
        <div class="p-8 max-w-7xl mx-auto">
            <main>
                <slot />
            </main>
        </div>
    </div>
</div>
