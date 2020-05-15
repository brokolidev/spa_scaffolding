@extends('layouts.app')

@section('content')
<router-view is-mobile='{{ $agent->isMobile() }}'></router-view>
@endsection