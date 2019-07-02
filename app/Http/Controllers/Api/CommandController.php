<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

use App\Command;
use App\Http\Resources\Command as CommandResource;
use App\Http\Resources\CommandCollection;
use App\Http\Controllers\Api\BaseController as BaseController;

class CommandController extends BaseController
{
    //
    
    public function __construct() {
        $this->authorized = false;
    } 
       
    public function show ($id)
    {
        $command = Command::find($id);
        if (is_null($command)) {
            return $this->sendError('Command not found.');
        }

        return $this->sendResponse(new CommandResource( Command::find($id)), 'Command retrieved successfully.');
    }

    public function index()
    {
        // return new CommandCollection( Command::paginate(3));
        return $this->sendResponse(new CommandCollection( Command::paginate(3)), 'Commands retrieved successfully.');
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
        $input['state'] = "Commanded";
        $input['reference'] = "REF-XXX";
       
        $validator = Validator::make($input, [
            'quantity' => 'required',
            'user_id'=>'required',
            'product_id'=>'required',
            'state' => 'required'
        ]);


        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $command = Command::create($input);
        return $this->sendResponse($command->toArray(), 'Command created successfully.');
    }


     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Command $command)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'quantity' => 'required',
            'product_id'=>'required'
        ]);


        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }


        $command->name = $input['name'];
        $command->price = $input['price'];
        $command->reference = $input['reference'];
        $command->image = $input['image'];
        $command->quantity = $input['quantity'];

        $command->save();
        return $this->sendResponse($command->toArray(), 'Command updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Command $command)
    {
        $command->delete();

        return $this->sendResponse($command->toArray(), 'Command deleted successfully.');
    }
}
