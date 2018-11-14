<?php
/**
Component Name: Image Modal
Description: Enable modal visualization on images.
Category: Effects
Tags: jQuery, Colorbox
Version: 1.0.1
Author: Waboot Team <info@waboot.io>
Author URI: http://www.waboot.io
*/

if(!class_exists("\\WBF\\modules\\components\\Component")) return;

class Image_Modal extends \WBF\modules\components\Component{
	/**
	 * This method will be executed at Wordpress startup (every page load)
	 */
	public function setup(){
		parent::setup();
		Waboot()->add_component_style('component-colorbox-style',$this->directory_uri . '/assets/dist/css/imagemodal.css');
	}

	/**
	 * This method will be executed in nodes where component is active
	 */
	public function run(){
		parent::run();
	}

	/**
	 * Enqueue component scripts
	 */
	public function scripts(){
        $cbox_icons = \Waboot\functions\get_option($this->name.'_icons');
        $cbox_elements = \Waboot\functions\get_option($this->name.'_element');
		if($cbox_elements == "") $cbox_elements = false;
		$cbox_custom_elements = \Waboot\functions\get_option($this->name.'_custom_element');
		if($cbox_custom_elements == "") $cbox_custom_elements = false;

		$scripts = [
			'component-image_modal-colorbox' => [
				'uri' => $this->directory_uri . '/assets/vendor/jquery.colorbox-min.js', //A valid uri
				'path' => $this->directory . '/assets/vendor/jquery.colorbox-min.js', //A valid path
				'deps' => ['jquery'],
				'type' => 'js',
				'enqueue_callback' => false,
				'in_footer' => true,
				'enqueue' => false
			],
			'component-image_modal-custom2' => [ //For some reason, only this name works o.O
				'uri' => $this->directory_uri . '/assets/dist/js/imagemodal.js',
				'path' => $this->directory . '/assets/dist/js/imagemodal.js',
				'deps' => ['jquery','component-image_modal-colorbox'],
				'type' => 'js',
				'i10n' => [
					'name' => 'wabootCbox',
					'params' => [
						'elements' => $cbox_elements,
						'custom_elements' => isset($cbox_custom_elements) ? $cbox_custom_elements : false,
						'current' => __("image {current} of {total}","waboot")
					]
				]
			]
		];

		$am = new \WBF\components\assets\AssetsManager($scripts);

		$am->enqueue();
	}

	/**
	 * Enqueue component styles
	 */
	public function styles(){
		//wp_enqueue_style('component-colorbox-style',$this->directory_uri . '/assets/dist/css/imagemodal.css');
	}

	/**
	 * Register components options
	 */
	public function register_options(){
		parent::register_options();
		$orgzr = \WBF\modules\options\Organizer::getInstance();

		$orgzr->add_section( "colorbox", _x( "Image Modal", "Image Modal options tab label", "waboot" ));

        $orgzr->add([
            'name' => __('Icon font used', 'waboot'),
            'id' => $this->name.'_icons',
            'desc' => __('Select the icon font to apply colorbox', 'waboot'),
            'type' => 'select',
            'options' => [
                'fontawesome5' => _x("Font Awesome 5","waboot"),
                'fontawesome4' => _x("Font Awesome 4","waboot"),
                'none' => _x("None","waboot"),
            ],
            'std' => 'fontawesome5'
        ],"colorbox");

		$orgzr->add([
			'name' => __('Colorbox elements', 'waboot'),
			'id' => $this->name.'_element',
			'desc' => __('Select the type of elements on which to apply colorbox', 'waboot'),
			'type' => 'radio',
			'options' => [
				'all-images' => _x("All images","Image Modal Component Option","waboot"),
				'galleries' => _x("Galleries","Image Modal Component Option","waboot"),
				'custom' => _x("Custom only","Image Modal Component Option","waboot"),
			],
			'std' => 'all-images'
		],"colorbox");

		$orgzr->add([
			'name' => _x( 'Custom element',"Image Modal Component Option", 'waboot' ),
			'id'   => $this->name.'_custom_element',
			'desc' => _x( 'Enter a custom selector for colobox',"Image Modal Component Option", 'waboot' ),
			'type' => 'text'
		],"colorbox");

		$orgzr->reset_group();
		$orgzr->reset_section();
	}
}