<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\items;

class UserController extends Controller
{
    public function getItems(){
        $items = items::all();
        return response()->json([
            "status" => "Success",
            "items" => $items
        ], 200);
    }
}
