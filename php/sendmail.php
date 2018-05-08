<?php
	if (isset($_POST['submit'])) {
		$to			 = 'frankvaldez@outlook.com';
		$sendername  = $_POST['name'];
		$replyTo	 = $_POST['_replyto'];
		$subject 	 = 'Correo recibido desde albertico.mx';
		$message 	 = $sendername.'('.$replyTo.') ha enviado el siguiente mensaje a frankvaldez.io:'."\r\n".$_POST['message'];

		if(mail($to, $subject, $message, $header)) {
			echo "<script>alert('Mensaje enviado exitosamente');</script>";
		}
		else {
			echo "<script>alert('Hubo un error al enviar tu mensaje. Por favor verifica que los campos estén correctos');</script>";
		}

		header("Location: http://albertico.mx");
		die();
	}
?>