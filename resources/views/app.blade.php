<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
        <script>
        // Pokud chceš genechovat téma z localStorage a nastavit hned při načtení
        (function() {
            const theme = localStorage.getItem('theme') || '{{ session('theme', 'light') }}';
            document.documentElement.setAttribute('data-theme', theme);
        })();
    </script>
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
