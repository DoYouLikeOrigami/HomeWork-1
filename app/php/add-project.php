<?php

	$data = array();
	$name = _POST['projectName'];

	if ($name === '') {
		$data['status'] = 'error';
		$data['text'] = 'Заполните имя';
	} else {
		$data['status'] = 'Ok';
		$data['text'] = 'Корректно';
	}

	header("Content-Type: application.json");
	echo json_encode($data);
	exit;
?>