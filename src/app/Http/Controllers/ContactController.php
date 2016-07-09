<?php
/**
 * Created by tania.
 * Date: 9.07.16
 * Time: 17:44
 * @corporation Maksi
 */

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use DB;

class ContactController extends  Controller{

    public function index()
    {
        $users = DB::insert('INSERT INTO `question`(`email`, `content`, `status`) VALUES (?,?,?)', [$_REQUEST['email'],$_REQUEST['content'],2]);

        return json_encode($users);

    }

}

