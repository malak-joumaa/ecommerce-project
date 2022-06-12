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

    public function favorite(Request $request){
        if (Auth::check()){
            $favorite = new likes;
            $favorite->user_id = $request->user_id;
            $favorite->item_id = $request->item_id;
            $favorite->save();
            return response()->json([
                "status" => "Success",
                "favourite" => $favorite
            ], 200);
        }    
    }
}
