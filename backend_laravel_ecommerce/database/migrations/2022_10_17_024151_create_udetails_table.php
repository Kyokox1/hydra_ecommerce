<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUdetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('udetails', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->enum('type_document', ['CARNET_EXTRANJERIA', 'DOCUMENTO_NACIONAL_IDENTIDAD']);
            $table->string('document')->unique();
            $table->string('firstname');
            $table->string('secondname')->nullable();
            $table->string('lastname');
            $table->string('secondlastname')->nullable();
            $table->string('phone');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('udetails');
    }
}
