<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\items;
use App\Models\categories;

class AdminController extends Controller
{
    public function addItem(Request $request){
        $item = new items;
        $item->image = $request->image;
        $item->name = $request->name;
        $item->price = $request->price;
        $item->category_id = $request->category;
        $item->save();
        return response()->json([
            "status" => "Success",
            "item" => $item
        ], 200);
    }

    public function addCategory(Request $request){
        $category = new categories;
        $category->cat_name = $request->cat_name;
        $category->save();
        return response()->json([
            "status" => "Success",
            "category" => $category
        ], 200);
    }

    public function getCategories(){
        $categories = categories::all();
        return response()->json([
            "status" => "Success",
            "categories" => $categories
        ], 200);
    }
}
