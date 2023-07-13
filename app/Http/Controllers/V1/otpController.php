<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\API\ApiResponseTrait;
use Illuminate\Support\Facades\Auth;


class otpController extends Controller
{
    use ApiResponseTrait;

    public function verifyOtp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'otp' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error', $validator->errors()->toArray(), 422);
        }

        $userId = auth()->id();
        $user = User::find($userId);
        $currentTimestamp = Carbon::now();

        if ($user->otp_expires_at < $currentTimestamp) {
            // OTP has expired
            return $this->sendError('Invalid OTP', ['error' => 'This token is invalid or has expired.'], 422);
        }

        if ($request->otp != $user->otp) {
            // Invalid OTP
            return $this->sendError('Invalid OTP', ['error' => 'The provided OTP is invalid.'], 422);
        }

        // OTP is valid, update email verification status
        $user->email_verified_at = Carbon::now();
        $user->email_verified = 1;
        $user->save();

        return $this->sendResponse(['success' => true], 'Email verification successful.');
    }
}
