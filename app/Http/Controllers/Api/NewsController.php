<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\Storage;

use App\News;
use App\Http\Resources\News as NewsResource;
use App\Http\Resources\NewCollection;
use App\Http\Controllers\Api\BaseController as BaseController;

class NewsController extends BaseController
{
    //
    public function show ($id)
    {
        $news = News::find($id);
        if (is_null($news)) {
            return $this->sendError('News not found.');
        }

        return $this->sendResponse(new NewsResource( News::find($id)), 'News retrieved successfully.');
    }

    public function imageUpload (Request $request, Response $response)
    {
        $img = $request->file('upload');
        $url = Storage::disk('public')->put( 'news', $img);
        // $withSuccess= array('number'=>'200','message'=>'added successfully');

        return  response()->json(array(
            'filename'=>$url,
            'uploaded'=>1,
            'url'=> env('APP_URL').Storage::url($url)
        ));
    }

    public function index()
    {
        return new NewCollection( News::paginate(10));
        return $this->sendResponse(new NewCollection( News::paginate(3)), 'News retrieved successfully.');
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
      

        $validator = Validator::make($input, [
            'title' => 'required',
            'content' => 'required',
            'user_id'=>'required'
        ]);


        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $news = News::create($input);
        return $this->sendResponse($news->toArray(), 'News created successfully.');
    }


     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, News $news)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'title' => 'required',
            'content' => 'required',
            'user_id'=>'required'
        ]);


        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }


        $news->title = $input['title'];
        $news->content = $input['content'];

        $news->save();
        return $this->sendResponse($news->toArray(), 'News updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(News $news)
    {
        $news->delete();

        return $this->sendResponse($news->toArray(), 'News deleted successfully.');
    }
}
