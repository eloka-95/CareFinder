<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class careFacilities extends Model
{
    use HasFactory;
     
    protected $fillable = [
        'name',
        'state',
        'details',
        'location',
        'phone_number',
        'email'
    ];
}
