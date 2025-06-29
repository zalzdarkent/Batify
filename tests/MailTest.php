<?php
use Illuminate\Support\Facades\Mail;
Mail::raw('Ini email percobaan', function($msg) {$msg->to('zalzdarkent@gmail.com')->subject('Tes');});