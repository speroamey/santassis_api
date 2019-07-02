<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;


use App\Advertise;
use App\Http\Resources\Advertise as AdvertiseResource;
use App\Http\Resources\AdvertiseCollection;
use App\Http\Controllers\Api\BaseController as BaseController;

class AdvertiseController extends BaseController
{
    //
    public function __construct() {
        $this->authorized = false;
    } 
       
    public function show ($id)
    {
        $advertise = Advertise::find($id);
        if (is_null($advertise)) {
            return $this->sendError('Advertise not found.');
        }

        return $this->sendResponse(new AdvertiseResource( Advertise::find($id)), 'Advertise retrieved successfully.');
    }

    public function index()
    {
        // return new AdvertiseCollection( Advertise::paginate(3));
        return $this->sendResponse(new AdvertiseCollection( Advertise::paginate(3)), 'Advertises retrieved successfully.');
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
        $input['state'] = "Advertised";
       
        $validator = Validator::make($input, [
            'name'=>"required",
            'image'=>"required",
            'description'=>"required",
            'state'=>"required",
            'weight'=>"required",
            'size'=>"required",
            'start_date'=>"required",
            'end_date'=>"required",
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $advertise = Advertise::create($input);
        return $this->sendResponse($advertise->toArray(), 'Advertise created successfully.');
    }


     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Advertise $advertise)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name'=>"required",
            'image'=>"required",
            'description'=>"required",
            'state'=>"required",
            'weight'=>"required",
            'size'=>"required",
            'start_date'=>"required",
            'end_date'=>"required",
        ]);


        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }


        $advertise->name = $input['name'];
        $advertise->price = $input['price'];
        $advertise->reference = $input['reference'];
        $advertise->image = $input['image'];
        $advertise->quantity = $input['quantity'];

        $advertise->save();
        return $this->sendResponse($advertise->toArray(), 'Advertise updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Advertise $advertise)
    {
        $advertise->delete();

        return $this->sendResponse($advertise->toArray(), 'Advertise deleted successfully.');
    }
}
