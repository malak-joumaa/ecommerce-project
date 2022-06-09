<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\item;

class AdminController extends Controller
{
    public function addRestaurant(){
        $item = new item;
        $item->image = $request->image;
        $item->name = $request->name;
        $resto->price = $request->price;
        $resto->category = $request->category;
        $resto->save();
    }
}
