<?php

namespace App\Http\Controllers;

use App\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $note = Note::create([
        'title'=> $request->title,
        'category'=> 1,
        'body'=> $request->body,
        'position'=> 0,
        'pinned'=> 0,
      ]);

      return 'Done';

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function show(Note $note)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function edit(Note $note)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Note $note)
    {

      $indexes = array_column($request->indexes, 0);
      $positions = array_column($request->positions, 0);

      $newPositions = array();
      foreach($indexes AS $key => $value) {
          // $newPositions[$key] = $value . ", " . $positions[$key];
          // $newPositions[$key] = $value;
          Note::where('id', '=', $positions[$key])
          ->update(['position' => $value]);
      }

      return 'Done';

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function destroy(Note $note, Request $request)
    {
        $deleteNote = $request->id;
        Note::destroy($deleteNote);
        return 'Deleted Note' . " " . $deleteNote;
    }
}
