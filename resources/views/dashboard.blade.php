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
              <div class="card-text">{{Str::words($note->body,25, " ...")}}</div>
            </div>
            <div class="card-footer">
              <!-- <div class="mdi-set flex-container space-between">
                  <li><span class="mdi-clock flex-item"></span></li>
                  <li><span class="mdi-account-plus flex-item"></span></li>
                  <li><span class="mdi-palette flex-item"></span></li>
                  <li><span class="mdi-package-down flex-item"></span></li>
                  <li><span class="mdi-dots-vertical flex-item"></span></li>
              </div> -->
              <ul class="flex-container space-between">
                <li data-balloon="Remind me" data-balloon-pos="down" class="flex-item"><span class="mdi invisible mdi-clock"></span></li>
                <li data-balloon="Collaborate" data-balloon-pos="down" class="flex-item"><span class="mdi invisible mdi-account-plus"></span></li>
                <li data-balloon="Change color" data-balloon-pos="down" class="flex-item"><span class="mdi invisible mdi-palette"></span></li>
                <li data-balloon="Archive" data-balloon-pos="down" class="flex-item"><span class="mdi  invisible mdi-package-down"></span></li>
                <li data-balloon="More" data-balloon-pos="down" class="flex-item"><span class="mdi  invisible mdi-dots-vertical"></span></li>
              </ul>
            </div>
          </div>
      @endforeach
  </div>
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->

@endsection
