<?php

	$data = array();
	$name = $_POST['projectName'];

	if ($name === '') {
        $data['status'] = 'error';
		$data['text'] = 'Напишите имя';
	} else {
        $data['status'] = 'Ok';
		$data['text'] = 'Корректно';
	}

	header("Content-Type: application.json");
	echo json_encode($data);
	exit;
?>