@extends('layouts.main')
@section('title', 'Dashboard')
@section('content')

<!-- ============================================================== -->
<!-- Start Page Content -->
<!-- ============================================================== -->

{{csrf_field()}}
<div class="row">
  <form id="newnoteform" class="col-md-4 offset-md-4">
    <div class="form-group">
      <input type="text" class="form-control newnote" id="newnote" aria-describedby="noteTitle" placeholder="Take a note...">
    </div>
    <div class="form-group">
      <textarea class="form-control invisible" id="body" aria-describedby="noteText"></textarea>
    </div>
    <a id="close" class="pull-right invisible" href="#"><small>CLOSE</small></a>
  </form>
</div>


  <div id="shift" class="row shift">
      @foreach($notes as $note)
          <div data-index="{{$note->id}}" data-poistion="{{$note->position}}" class="card col-md-2">
            <div class="card-header">
              <h5 class="card-title">{{$note->title}}</h5>
            </div>
            <div class="card-body">
              <div class="card-text">{{$note->body}}</div>
            </div>
            <div class="card-footer">This is some text within a card block.</div>
          </div>
      @endforeach
  </div>
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->

@endsection
