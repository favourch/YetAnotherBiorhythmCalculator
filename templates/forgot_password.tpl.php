<?php
$forgot_password_errors = array();
$inputted_email = isset($_POST['email']) ? $_POST['email']: "";
if (isset($_POST['forgot_password_submit'])) {
	if ($inputted_email == "") {
		$forgot_password_errors[] = translate_error('not_filled');
	} else if (invalid_email($inputted_email)) {
		$forgot_password_errors[] = translate_error('invalid_email');
	}
	if (!count($forgot_password_errors)) {
		if (taken_email($inputted_email)) {
			email_forgot_password($inputted_email);
		} else {
			email_forgot_password_alert($inputted_email);
		}
	}
}
?>
<form id="forgot_password_form" method="POST" action="/forgot_password/">
	<div class="m-input-prepend top-left-corner top-right-corner bottom-left-corner bottom-right-corner">
		<span class="add-on top-left-corner bottom-left-corner"><?php echo translate_span('email'); ?></span>
		<input id="email" class="m-wrap required top-right-corner bottom-right-corner" size="20" type="text" name="email" placeholder="john@example.com" value="<?php echo $inputted_email; ?>" tabindex="1" required>
	</div>
	<input id="forgot_password_submit" class="m-btn translate green top-left-corner top-right-corner bottom-left-corner bottom-right-corner" name="forgot_password_submit" type="submit" data-lang-ja="<?php echo $button_interfaces['submit']['ja']; ?>" data-lang-zh="<?php echo $button_interfaces['submit']['zh']; ?>" data-lang-es="<?php echo $button_interfaces['submit']['es']; ?>" data-lang-ru="<?php echo $button_interfaces['submit']['ru']; ?>" data-lang-en="<?php echo $button_interfaces['submit']['en']; ?>" data-lang-vi="<?php echo $button_interfaces['submit']['vi']; ?>" value="<?php echo $button_interfaces['submit'][$lang_code]; ?>" tabindex="2" />
</form>
<?php
if (isset($_POST['forgot_password_submit'])) {
	if ($forgot_password_errors) {
		echo '<span class="error">'.implode('<br />',$forgot_password_errors).'</span>';
	} else if (!count($forgot_password_errors)) {
		echo translate_span('submit_success','class: success');
	}
}