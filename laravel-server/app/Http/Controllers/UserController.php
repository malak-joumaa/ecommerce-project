<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\items;
use App\Models\likes;
use Auth;

class UserController extends Controller
{
    public function getItems($category_id){
        $items = items::where('category_id', $category_id)->get();
        return response()->json([
            "status" => "Success",
            "items" => $items
        ], 200);
    }

    public function favourite(Request $request){
        if (Auth::check()){
            $favourite = new likes;
            $favourite->user_id = $request->user_id;
            $favourite->item_id = $request->item_id;
            $favourite->save();
            return response()->json([
                "status" => "Success",
                "favourite" => $favourite
            ], 200);
        }    
    }
}
