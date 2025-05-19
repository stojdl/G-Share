<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LanguageRequest;


class LocalizationController extends Controller
{
    public function change (LanguageRequest $request) {
        $request->validated();
   
        session()->put('localization', $request->query('lang', config('app.locale')));

        return redirect()->back();
    }
}
