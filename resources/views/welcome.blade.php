<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>Developers Studio</title>

        <link rel="stylesheet" href="{{ asset('assets/css/dashboard.css') }}" type="text/css" />
        <link rel="stylesheet" href="{{ asset('assets/fontawesome-free/css/all.min.css') }}" />

        <link href="assets/images/logos/favicon.png" rel="icon" />
        <link rel="apple-touch-icon" href="assets/images/logos/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="assets/images/logos/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="assets/images/logos/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="assets/images/logos/touch-icon-ipad-retina.png" />
        <link rel="stylesheet" href="{{ asset('assets/css/animate.css') }}" type="text/css" />
        <link rel="stylesheet" href="{{ asset('assets/css/icofont.min.css') }}" type="text/css" />
        <link rel="stylesheet" href="{{ asset('assets/css/magnific-popup.css') }}" type="text/css" />
        <link rel="stylesheet" href="{{ asset('assets/css/meanmenu.css') }}" type="text/css" />

        <link rel="stylesheet" href="{{ asset('assets/css/slick-theme.css') }}" type="text/css" />
        <link rel="stylesheet" href="{{ asset('assets/css/slick.min.css') }}" type="text/css" />
        <link rel="stylesheet" href="{{ asset('assets/css/slick.min.css') }}" type="text/css" />
        <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}" type="text/css" />
        <link rel="stylesheet" href="{{ asset('assets/css/responsive.css') }}" type="text/css" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&amp;display=swap" rel="stylesheet" />

        {{-- for dasboard --}}
        <link rel="stylesheet" href="{{ asset('assets/css/dashboard.css') }}" type="text/css" />
        <link rel="stylesheet" href="{{ asset('assets/fontawesome-free/css/all.min.css') }}" />

        {{-- Custom Styles --}}
        <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body class="antialiased" id="body">
        <div id="app"></div>
        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
