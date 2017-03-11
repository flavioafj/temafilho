<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

require( get_stylesheet_directory() . '/functions/template-tag.php');

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_parent_css' ) ):
    function chld_thm_cfg_parent_css() {
        wp_enqueue_style( 'chld_thm_cfg_parent', trailingslashit( get_template_directory_uri() ) . 'style.css', array(  ) );
        wp_enqueue_style( 'datetimepicker', trailingslashit( get_stylesheet_directory_uri() ) . 'datetimepicker.css', array(  ) ); 
    }
endif;
add_action( 'wp_enqueue_scripts', 'chld_thm_cfg_parent_css', 10 );
         
if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg_separate', trailingslashit( get_stylesheet_directory_uri() ) . 'ctc-style.css', array( 'chld_thm_cfg_parent','appointment-style','appointment-bootstrap-css','appointment-default','appointment-menu-css','appointment-element-css','appointment-font-awesome-min','appointment-media-responsive-css' ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css' );

function gambiarra(){
    wp_enqueue_script('corrigeForm', trailingslashit( get_stylesheet_directory_uri() ) . '/js/corrigeForm.js');
    wp_enqueue_script( 'datetimepicker', 'http://estacionamentopatioconfins.com.br/js/jquery/jquery.datetimepicker.full.min.js');
    wp_enqueue_script('Script_child', trailingslashit( get_stylesheet_directory_uri() ) . '/js/Script_child.js');
    wp_enqueue_script('diff_child', trailingslashit( get_stylesheet_directory_uri() ) . '/js/diff_child.js');
}
add_action( 'wp_enqueue_scripts', 'gambiarra' );
// END ENQUEUE PARENT ACTION 
