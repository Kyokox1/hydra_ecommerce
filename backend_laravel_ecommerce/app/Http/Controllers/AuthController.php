<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function signup(AuthRequest $request)
    {
        $id=Role::where('name','Client')->first()->id;
        $data=$request->validate([
            'name'=>'required|string|max:255',
            'email'=>'required|string|email|max:255|unique:users',
            'password'=>'required|string|min:6|confirmed',
        ]);
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'device_name'=>$request->device_name,
            'role_id'=>$id,
        ]);

        $token=$user->createToken($request->device_name)->plainTextToken;
        return response()->json([
            'status' => 'success',
            'user'=>$user->with('role')->get(),
            'type_token'=>'Bearer',
            'token'=>$token,
        ]);
        
    }
    public function login(Request $request){
        $this->validateLogin($request);
        //login true
        
        if (Auth::attempt($request->only('email','password'))) {
            return response()->json([
                'status' => 'success',
                'user'=>Auth::user(),
                'type_token'=>'Bearer',
                'token' => $request->user()->createToken($request->device_name)->plainTextToken,
            ], 200);
        }

        return response()->json([
            'message' => 'No Autorizado'
        ], 401);
    }

    public function validateLogin(Request $request){
        
        return $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
            'device_name' => 'required'
        ]);
    }
    public function userInfo()
    {
        return response()->json([
            'status' => 'success',
            'type_token'=>'Bearer',
            'user'=>Auth::user()->with('role')->get(),
        ]);
    }
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'Cerro sesión correctamente'
        ]);
    }
}
