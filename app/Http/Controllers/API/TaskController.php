<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $getTasks = Task::get();
        return response()->json($getTasks, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);
        $addTask        = new Task();
        $addTask->title = $request->title;
        $addTask->description = $request->description;
        $addTask->status = 1;
        if($addTask->save()) {
            return response()->json($addTask, 200);
        }else {
            return response()->json([
                'message' => 'Some errorr occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        $updateTask = Task::where('id', $request->id)->first();
        $updateTask->title = $request->title;
        $updateTask->description = $request->description;
        if($updateTask->save()) {
            return response()->json($updateTask, 200);
        }else {
            return response()->json([
                'message' => 'Some errorr occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        if ($task->delete()) {
            return response()->json([
                'message' => 'Task deleted successfully!',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, please try again',
                'status_code' => 500
            ], 500);
        }
    }
    public function completeTask(Request $request){
        $request->validate([
            'id' => 'required',
        ]);
        $getTask = Task::where('id', $request->id)->first();
        if (!$getTask) {
            return response()->json([
                'message' => 'Task not found'
            ], 404);
        }

        $getTask->status = 1;

        if($getTask->save()){
            return response()->json($getTask, 200);
        }else {
            return response()->json([
                'message' => 'Some errorr occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }
    public function inCompleteTask(Request $request){
        $request->validate([
            'id' => 'required',
        ]);
        $getTask = Task::where('id', $request->id)->first();
        if (!$getTask) {
            return response()->json([
                'message' => 'Task not found'
            ], 404);
        }

        $getTask->status = 0;

        if($getTask->save()){
            return response()->json($getTask, 200);
        }else {
            return response()->json([
                'message' => 'Some errorr occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }
}
