<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Validator;
use Intervention\Image\ImageManagerStatic as Image;
use App\Product;
use App\User;
use App\Http\Resources\Product as ProductResource;
use App\Http\Resources\ProductCollection;
use App\Http\Controllers\Api\BaseController as BaseController;

class UserProductController extends BaseController
{
    //
    public function __construct($authorized=false) {
        $this->authorized = $authorized;
    } 
       
    public function show ($id)
    {
        $product = Product::find($id);
        if (is_null($product)) {
            return $this->sendError('Product not found.');
        }
        return $this->sendResponse(new ProductResource( Product::find($id)), 'Product retrieved successfully.');
    }



    public function updateProductState(Request $request, Product $product)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'authorized' => 'required',
        ]);
        
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $product = Product::find($input['id']);
        $product->fill($input);
        $product->save();
        return $this->sendResponse($product->toArray(), 'Product updated successfully.');
    }


    public function index(Request $request)
    {
        // dd(  Product::latest()->first()->url);
        Auth::user()->id;
        $user=  $user = User::where('id', Auth::user()->id)->first();
        if($user['role']=='USER'){
            return new ProductCollection(Product::orderBy('id', 'DESC')->where('user_id', Auth::user()->id)->get()->paginate(12));
        }else{
            return new ProductCollection( Product::orderBy('id', 'DESC')->paginate(12));
        }
        // return $this->sendResponse(new ProductCollection( Product::paginate(3)), 'Products retrieved successfully.');
    }

    public function storeImage($file)
    {
        if($file=''){
            return null;
        }
        $mime_type= mime_content_type($file);
        $file = str_replace(['data:image/jpeg;base64,','data:image/jpg;base64,','data:image/png;base64,'], '', $file);
        $file = str_replace(' ', '', $file);
        $file = base64_decode($file);
        
        $safeName="";
        $folderName = '/uploads/products/';
        switch($mime_type){
            case "image/png":
                $safeName = "product-".time().".png";
                break;
            case "image/jpeg":
                $safeName = "product-".time().".jpeg";
                break;
            case "image/jpg":
                $safeName = "product-".time().".jpg";
                break;
        }
        $success = Storage::disk('public')->put( 'prodcts/'.$safeName, $file);
        if($success) return $safeName;
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
        $input['reference'] =  uniqid('REF-'.str_random(3));
        $file = $request['image'];
        $file_ordonnance = $request['image_ordonnance'];
        $img_name = $this->storeImage($file);
        $ordonnance_name = $this->storeImage($file_ordonnance);
       
        $validator = Validator::make($input, [
            'name' => 'required',
            'price' => 'required',
            'quantity' => 'required',
            'image' => 'required',
            'reference' => 'required',
            'description' => 'required',
            'user_id'=>'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
        $input['image'] = $img_name;
        $input['image_ordonnance'] = $ordonnance_name;
        $product = Product::create($input);
        return $this->sendResponse($product->toArray(), 'Product created successfully.');
    }


     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $produc)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'price' => 'required',
            'quantity' => 'required',
            'image' => 'required',
            'reference' => 'required'
        ]);
        

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $product = Product::find($input['id']);
        $product->fill($input);
        $product->save();
        return $this->sendResponse($product->toArray(), 'Product updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return $this->sendResponse($product->toArray(), 'Product deleted successfully.');
    }
}
