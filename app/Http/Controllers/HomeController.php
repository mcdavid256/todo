<?php

namespace App\Http\Controllers;
use App\Note;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $notes = Note::all()->sortByDesc("created_at")->sortBy("position");
      return view('dashboard', compact('notes'));
    }
}
