<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

use App\Prestation;
use App\Http\Resources\Prestation as PrestationResource;
use App\Http\Resources\PrestationCollection;
use App\Http\Controllers\Api\BaseController as BaseController;

class PrestationController extends BaseController
{
    //
    public function show ($id)
    {
        $prestation = Prestation::find($id);
        if (is_null($prestation)) {
            return $this->sendError('Prestation not found.');
        }

        return $this->sendResponse(new PrestationResource( Prestation::find($id)), 'Prestation retrieved successfully.');
    }

    public function index()
    {
        return new PrestationCollection( Prestation::paginate(3));
        return $this->sendResponse(new PrestationCollection( Prestation::paginate(3)), 'Prestations retrieved successfully.');
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
            'name' => 'required',
            'price' => 'required',
            'description' => 'required',
            'user_id'=>'required'
        ]);


        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $prestation = Prestation::create($input);
        return $this->sendResponse($prestation->toArray(), 'Prestation created successfully.');
    }


     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Prestation $prestation)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'price' => 'required',
            'description' => 'required',
            'user_id'=>'required'
        ]);


        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }


        $prestation->name = $input['name'];
        $prestation->price = $input['price'];
        $prestation->description = $input['description'];

        $prestation->save();
        return $this->sendResponse($prestation->toArray(), 'Prestation updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Prestation $prestation)
    {
        $prestation->delete();

        return $this->sendResponse($prestation->toArray(), 'Prestation deleted successfully.');
    }
}
