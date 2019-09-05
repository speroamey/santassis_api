@component('mail::layout')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
            SANTASSIS AFRIQUE 
        @endcomponent
    @endslot
{{-- Body --}}
    <p> Chèr(e) abonné(e),
    <p> vous venez d'\effectuer une commande; Afin que votre commande soit prise en compte et 
        que la livraison puisse se faire dans les heures qui suivent veuillez effectuer un paiement 
        via <span style="font-weight:bold">
        Mobile Money au numero 69 84 35 95
        </span> en mentionnant {{ $input->reference }} comme motif de la transaction.
        <p style="font-weight:bold" > Total dû :  {{$input->ttc_price}} FCFA<p>
        </p>
     </p>
    <br>
    <p>Merci pour votre confiance !!!  <p> </p></p>
    
    
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