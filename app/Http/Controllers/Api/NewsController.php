<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\Storage;

use App\News;
use App\Http\Resources\News as NewsResource;
use App\Http\Resources\NewsCollection;
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
        return new NewsCollection( News::orderBy('id', 'DESC')->paginate(10));
        // return $this->sendResponse(new NewsCollection( News::paginate(3)), 'News retrieved successfully.');
    }

    public function all()
    {
        return new NewsCollection( News::orderBy('id', 'DESC')->paginate(10));
        // return $this->sendResponse(new NewsCollection( News::paginate(3)), 'News retrieved successfully.');
    }

    public function storeImage($file){
        $mime_type= mime_content_type($file);
        $file = str_replace(['data:image/jpeg;base64,','data:image/jpg;base64,','data:image/png;base64,'], '', $file);
        $file = str_replace(' ', '', $file);
        $file = base64_decode($file);
        
        $safeName="";
        $folderName = '/uploads/news/';
        switch($mime_type){
            case "image/png":
                $safeName = "news-".time().".png";
                break;
            case "image/jpeg":
                $safeName = "news-".time().".jpeg";
                break;
            case "image/jpg":
                $safeName = "news-".time().".jpg";
                break;
        }
        $success = Storage::disk('public')->put( 'news/'.$safeName, $file);
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
        $file = $request['image_cover'];
        $img_name = $this->storeImage($file);

        $validator = Validator::make($input, [
            'title' => 'required',
            'content' => 'required',
            'user_id'=>'required'
        ]);


        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
        $input['image_cover'] = $img_name;
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


    public function lastNews()
    {
        return new NewsCollection( News::orderBy('id', 'DESC')->paginate(3));
        // return $this->sendResponse(new NewsCollection( News::paginate(3)), 'News retrieved successfully.');
    }
}
