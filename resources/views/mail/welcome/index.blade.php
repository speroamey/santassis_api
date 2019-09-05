@component('mail::layout')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
            SANTASSIS AFRIQUE 
        @endcomponent
    @endslot
{{-- Body --}}
   Félicitation {{ $user->name }}, votre compte SANTASSIS AFRIQUE  a été créé avec succès; 
   Assurez vous de payer les frais d'adhésions de 1000 FCFA  afin que que votre compte soit actif,
    donc pouvoir jouir pleinement de nos services.
{{-- Subcopy --}}
    @isset($subcopy)
        @slot('subcopy')
            @component('mail::subcopy')
                {{ $subcopy }}
            @endcomponent
        @endslot
    @endisset
{{-- Footer --}}
    @slot('footer')
        @component('mail::footer')
            © {{ date('Y') }} {{ config('app.name') }}.
        @endcomponent
    @endslot
@endcomponent