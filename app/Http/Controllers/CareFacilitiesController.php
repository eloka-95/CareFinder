<?php

namespace App\Http\Controllers;

use App\Models\careFacilities;
use App\Http\Requests\StorecareFacilitiesRequest;
use App\Http\Requests\UpdatecareFacilitiesRequest;
use App\Http\Resources\careFacilitiesResource;

class CareFacilitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $getFacility = careFacilities::select('id', 'name', 'state', 'details', 'location', 'phone_number', 'email')->get();
         return careFacilitiesResource::collection($getFacility);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorecareFacilitiesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(careFacilities $careFacilities)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(careFacilities $careFacilities)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatecareFacilitiesRequest $request, careFacilities $careFacilities)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(careFacilities $careFacilities)
    {
        //
    }
}
