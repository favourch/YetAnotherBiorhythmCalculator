<?php
class HtmlHead
{
	private static $title;
	private static $keywords;
	private static $description;
	private static $og = array();
	private static $js = array();
	private static $css = array();

	public static function setTitle($title) { self::$title = $title; }
	public static function setKeywords($keywords) { self::$keywords = $keywords; }
	public static function setDescription($description) { self::$description = $description; }

	public static function getTitle() { return self::$title; }
	public static function getKeywords() { return self::$keywords; }
	public static function getDescription() { return self::$description; }

	public static function setOg(array $og) { self::$og = array_merge(self::$og, $og); }
	public static function outputOg() {
		foreach (self::$og as $k => $v)
			echo '<meta property="og:'.$k.'" content="'.$v.'" />'."\n";
	}

	public static function setCss(array $css) {
		foreach($css as $name => $file)
			self::$css[$name] = $file;
	}

	public static function setJs(array $js) {
		foreach($js as $name => $file)
			self::$js[$name] = $file;
	}

	public static function outputJs() {
		foreach(self::$js as $file)
			echo '<script type="text/javascript" src="'.$file.'"></script>';
	}

	public static function outputCss() {
		foreach(self::$css as $file)
			echo '<link href="'.$file.'" rel="stylesheet" type="text/css" media="screen, projection" />';
	}
}