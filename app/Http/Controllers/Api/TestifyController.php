<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\User;
use App\Testify;
use App\Http\Resources\Testify as TestifyResource;
use App\Http\Resources\TestifyCollection;
use App\Http\Controllers\Api\BaseController as BaseController;

class TestifyController extends BaseController
{
    //
    public function __construct() {
        $this->authorized = false;
    } 
       
    public function show ($id)
    {
        $testify = Testify::find($id);
        if (is_null($testify)) {
            return $this->sendError('Testify not found.');
        }
       
        return $this->sendResponse(new TestifyResource( Testify::find($id)), 'Testify retrieved successfully.');
    }

    public function index()
    {
        $user=  $user = User::where('id', Auth::user()->id)->first();
        if($user['role']=='USER'){
            return new TestifyCollection(Testify::where('user_id', Auth::user()->id)->get()->paginate(12));
        }else{
            return new TestifyCollection( Testify::paginate(12));
        }
        // return new TestifyCollection( Testify::paginate(3));
    }

    public function all()
    {
        return new TestifyCollection(Testify::where('authorized', 1)->get()->paginate(12));
        // return new TestifyCollection( Testify::paginate(3));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $input = $request->all();
        $input['user_id']=Auth::user()->id;
        $input['authorized'] = false;

       
        $validator = Validator::make($input, [
            'description'=>'required',
            'user_id'=>'required',
            'authorized'=>'required',
        ]);


        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $testify = Testify::create($input);
        return $this->sendResponse($testify->toArray(), 'Testify created successfully.');
    }


     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'description' => 'required',
            'authorized'=>'required',
        ]);


        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $testify = Testify::find($input['id']);
        $testify->fill($input);
        $testify->save();

        // $testify->description = $input['description'];
        // $testify->authorized = $input['authorized'];
        // $testify->save();
        return $this->sendResponse($testify->toArray(), 'Testify updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Testify $testify)
    {
        $testify->delete();

        return $this->sendResponse($testify->toArray(), 'Testify deleted successfully.');
    }
}
