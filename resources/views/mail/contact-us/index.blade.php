@component('mail::layout')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
            SANTASSIS AFRIQUE 
        @endcomponent
    @endslot
{{-- Body --}}
    {{ $input->content }},
    <br>
    <p>Téléphone: {{ $input->phone }} <p> Nom: {{ $input->fullname }},</p></p>
    
    
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