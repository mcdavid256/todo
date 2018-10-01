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
              <div class="card-text fit">{{Str::words($note->body,25, " ...")}}</div>
            </div>
            <div class="card-footer">
              <!-- <div class="mdi-set flex-container space-between">
                  <li><span class="mdi-clock flex-item"></span></a>
                  <li><span class="mdi-account-plus flex-item"></span></li>
                  <li><span class="mdi-palette flex-item"></span></li>
                  <li><span class="mdi-package-down flex-item"></span></li>
                  <li><span class="mdi-dots-vertical flex-item"></span></li>
              </div> -->
              <ul class="flex-container space-between">
                <li data-balloon="Remind me" data-balloon-pos="down" class="flex-item"><span style="opacity=0;" class="mdi unseen mdi-clock"></span></li>
                <li data-balloon="Collaborate" data-balloon-pos="down" class="flex-item"><span style="opacity=0;" class="mdi unseen mdi-account-plus"></span></li>
                <li data-balloon="Change color" data-balloon-pos="down" class="flex-item"><span style="opacity=0;" class="mdi unseen mdi-palette"></span></li>
                <li data-balloon="Archive" data-balloon-pos="down" class="flex-item"><span style="opacity=0;" class="mdi  unseen mdi-package-down"></span></li>
                <li data-balloon="More" data-balloon-pos="down" class="flex-item" data-toggle="collapse" data-target="#moreToggle-{{$note->id}}"><span style="opacity=0;" class="mdi  unseen mdi-dots-vertical"></span>
                  <div class="card card-more list-group collapse" id="moreToggle-{{$note->id}}">
                    <a href="" class="list-group-item list-group-item-action"><small>{{$note->id}}</small></a>
                    <p id="delete" recordId="{{$note->id}}" href="" class=" delete list-group-item list-group-item-action"><small>Delete</small></p>
                    <a href="" class="list-group-item list-group-item-action"><small>Duplicate</small></a>
                    <a href="" class="list-group-item list-group-item-action"><small>Show Checkboxes</small></a>
                  </div>
                </li>

              </ul>
            </div>
          </div>
      @endforeach
  </div>
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->

@endsection
