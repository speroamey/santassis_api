<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

use App\Command;
use App\Http\Resources\LineCommand as LineCommandResource;
use App\Http\Resources\LineCommandCollection;
use App\Http\Controllers\Api\BaseController as BaseController;

use App\LineCommand;
use App\Product;
class LineCommandController extends BaseController
{
    //
    public function __construct() {
        $this->authorized = false;
    } 
       
    public function show ($id)
    {
        $command = Command::find($id);
        if (is_null($command)) {
            return $this->sendError('LineCommand not found.');
        }
        return $this->sendResponse(new LineCommandResource( LineCommand::find($id)), 'Command retrieved successfully.');
    }

    public function showCommandLineCommand($id)
    {
        return $this->sendResponse(new LineCommandCollection(LineCommand::where('command_id', $id)->get()), 'line\'s Command retrieved successfully.');
    }

    public function index()
    {
        return new CommandCollection( Command::paginate(3));
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
        
        $cmd['user_id']=Auth::user()->id;
        $cmd['state'] = "Commanded";
        $cmd['reference'] =  uniqid('REF-CMD-'.str_random(3));
       
        $validator = Validator::make($cmd, [
            'user_id'=>'required',
            'reference'=>'required',
            'state' => 'required'
        ]);
       

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        } 
       
        $command = Command::create($cmd);

        foreach ($input as $item){
           
            $item['command_id']= $command['id'];
            $item['user_id']=Auth::user()->id;
            //Here just get every line_command and pass the current product id 
            // to fetch the related one one product table by using it's model.
            //when the that product is retrieved we can now get it's quantity subtract with the line_command
            //quantity_commanded so we can update product with a new quantity
            

            //get current product from product's table
            $product = Product::find($item['id']);
            $product['quantity'] = $product['quantity'] - $item['quantity_commanded'];
            $item['product_id'] = $item['id'];
            $product->save();
            $lc= LineCommand::create($item);
        }
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
