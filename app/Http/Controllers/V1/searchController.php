<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\careFacilities;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\API\ApiResponseTrait;
use Illuminate\Support\Facades\Auth;

class searchController extends Controller
{
    use ApiResponseTrait;

    //     //! REM add a validation to check if user is authenticated !............................................................................
    public function findHealthFacilities(Request $request)
    {
        // Validation
        $validator = Validator::make($request->only('search_facility'), [
            'search_facility' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error', $validator->errors()->toArray(), 422);
        }

        $searchQuery = $request->input('search_facility');
        $keywords = explode(' ', $searchQuery);

        $facilities = careFacilities::select('*')
            ->selectRaw("(
            CASE
                WHEN state LIKE '%$searchQuery%' THEN 1
                ELSE 0
            END
            +
            CASE
                WHEN location LIKE '%$searchQuery%' THEN 1
                ELSE 0
            END
            +
            CASE
                WHEN name LIKE '%$searchQuery%' THEN 1
                ELSE 0
            END
            +
            CASE
                WHEN details LIKE '%$searchQuery%' THEN 1
                ELSE 0
            END
        ) AS relevance")
            ->where(function ($query) use ($keywords) {
                foreach ($keywords as $keyword) {
                    $query->orWhere('state', 'LIKE', "%{$keyword}%")
                        ->orWhere('location', 'LIKE', "%{$keyword}%")
                        ->orWhere('name', 'LIKE', "%{$keyword}%")
                        ->orWhere('details', 'LIKE', "%{$keyword}%");
                }
            })
            ->orWhere(function ($query) use ($keywords) {
                foreach ($keywords as $keyword) {
                    $query->orWhere('state', 'LIKE', "%{$keyword}%")
                        ->orWhere('location', 'LIKE', "%{$keyword}%");
                }
            })
            ->orderBy('relevance', 'desc')
            ->get();

        return $facilities;
    }

}
