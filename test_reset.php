<?php
require_once 'vendor/autoload.php';

$app = require_once 'bootstrap/app.php';
$app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\Password;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

echo "Testing password reset...\n";

// Get first user
$user = User::first();
if (!$user) {
    echo "No users found\n";
    exit;
}

echo "User found: " . $user->email . "\n";

// Test direct mail sending first
echo "Testing direct mail...\n";
try {
    Mail::raw('Test email from reset password test', function($msg) use ($user) {
        $msg->to($user->email)->subject('Test Email');
    });
    echo "Direct mail sent successfully\n";
} catch (Exception $e) {
    echo "Direct mail failed: " . $e->getMessage() . "\n";
}

// Test password reset
echo "Testing password reset...\n";
try {
    $status = Password::sendResetLink(['email' => $user->email]);
    echo "Reset status: " . $status . "\n";
} catch (Exception $e) {
    echo "Reset failed: " . $e->getMessage() . "\n";
}

echo "Test completed\n";
