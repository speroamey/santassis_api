<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommandsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('commands', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('client_id')->unsigned();
            $table->foreign('client_id')->references('id')->on('users');
            $table->string('tva_price')->nullable();
            $table->string('address_livraison')->nullable();
            $table->string('description')->nullable();
            $table->string('state')->nullable();
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
        Schema::dropIfExists('commands');
    }
}
