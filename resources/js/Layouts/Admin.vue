<template>
    <div class="max-w-3xl mx-auto shadow-xl shadow-slate-300 ">
        <header class="flex justify-between items-center bg-gray-300 py-2 px-5">
            <div class="flex gap-2 items-center">
                <h1 class="text-xl text-amber-500 font-bold">BackOffice</h1>
            </div>
        </header>
        <main class="flex flex-col gap-4 mx-auto mt-2 px-4 pb-5">
            <slot />
        </main>
    </div>
</template>
