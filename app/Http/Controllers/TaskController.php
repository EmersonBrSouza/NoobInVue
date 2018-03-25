<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    //

    public function create(Request $request){
        $task = Task::create([
            'name' => $request->input('name'),
            'date' => $request->input('date'),
            'description' => $request->input('description'),
            'status' => false,
            'createdAt' => $request->input('createdAt'),
        ]);

        return response()->json([
            'name' => $task->name,
            'date' => $task->date,
            'description' => $task->description,
            'status' => $task->status,
            'createdAt' => $task->createdAt,
        ]);
    }

    public function fetchAll(Request $request){
        $tasks = Task::all();
        $response = [];
        foreach($tasks as $task){
            $retrieve = [
                'name' => $task->name,
                'date' => $task->date,
                'description' => $task->description,
                'createdAt' => $task->createdAt,
                'status' => $task->status
            ];
            array_push($response,$retrieve);
        }

        return response()->json($response);
    }
}
