<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\API\ApiResponseTrait;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use App\Mail\OTPVerificationMail; // Import the OTPVerificationMail class
use Illuminate\Support\Facades\Cookie;
class AuthenticationController extends Controller
{
    use ApiResponseTrait;
    
    /**
     * Register a new user.
     */
    public function registerUser(Request $request)
    {
        $validator = Validator::make($request->only('name', 'email', 'password', 'c_password'), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error', $validator->errors()->toArray(), 422);
        }

        $input = $validator->validated();
        $input['password'] = bcrypt($input['password']);

        // Generate a random OTP
        $otp = rand(100000, 999999);
        
        // Set the expiration time (30 minutes from now)
        $expiration = Carbon::now()->addMinutes(30);

        // Store the OTP in the user's record or cache it
        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => $input['password'],
            'otp' => $otp,
            'otp_expires_at' => $expiration,

        ]);

         // Send OTP to user's email
         Mail::to($user->email)->send(new OTPVerificationMail($otp));

        $success['token'] = $user->createToken('MyApp')->plainTextToken;
        $success['name'] = $user->name;

        return $this->sendResponse($success, 'User registered successfully')
        ->withCookie(Cookie::make('bearerToken', $success['token'], 60));
    }


    //! User login controller section ...........................................................

    public function loginUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error', $validator->errors()->toArray(), 422);
        }

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('MyApp')->plainTextToken;

            $success['token'] = $token;
            $success['name'] = $user->name;

            return $this->sendResponse($success, 'User login successfully.');
        } else {
            return $this->sendError('Unauthorised.', ['error' => 'Unauthorised, Your Not a Registerd '], 404);
        }
    }


    public function logoutUser()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $user->tokens()->delete();
            return $this->sendResponse([], 'User logged out successfully.');
        } else {
            return $this->sendError('Unauthenticated.', ['error' => 'Unauthenticated user.'], 401);
        }
    }

}
