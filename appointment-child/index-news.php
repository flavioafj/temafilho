<?php
$appointment_options=theme_setup_data();
$news_setting = wp_parse_args(  get_option( 'appointment_options', array() ), $appointment_options );
if($news_setting['home_blog_enabled'] == 0 ) { ?>
<div class="blog-section">
	<div class="container">
	
		<!-- Section Title -->
		<div class="row">
			<div class="col-md-12">
				<div class="section-heading-title">
					<h1><?php echo $news_setting['blog_heading']; ?></h1>
                    <img alt="descrição estacionamento Pátio Confins" src="http://estacionamentopatioconfins.com.br/wp/wp-content/themes/appointment/images/empresa-mini.jpg">
					<p><?php echo $news_setting['blog_description']; ?></p>
				</div>
			</div>
		</div>
<?php
        	//****** get index Modal  ********
        get_template_part('index', 'modal');
        
?>
		<!-- /Section Title -->
		
		<div class="row esp">
		<?php
		
		$cat_id = array();
		$cat_id = $news_setting['blog_selected_category_id'];
		$no_of_post = $news_setting['post_display_count'];	

		 $args = array( 'post_type' => 'post','ignore_sticky_posts' => 1 , 'category__in' => $cat_id, 'posts_per_page' => $no_of_post);
		 $news_query = new WP_Query($args);	
		 

		 $i=1;
			while($news_query->have_posts() ) : $news_query->the_post();				
			?>
			<div class="col-md-6">
				<div class="blog-sm-area">
					<div class="media">
						<div class="blog-sm-box">
							<?php $defalt_arg =array('class' => "img-responsive"); ?>
							<?php if(has_post_thumbnail()): ?>
							<?php the_post_thumbnail('', $defalt_arg); ?>
							<?php endif; ?>
						</div>
						<div class="media-body">
							<?php $appointment_options=theme_setup_data();
							  $news_setting = wp_parse_args(  get_option( 'appointment_options', array() ), $appointment_options );
							if($news_setting['home_meta_section_settings'] == '' ) { ?>	
							<div class="blog-post-sm">
								<?php 	$tag_list = get_the_tag_list();
								if(!empty($tag_list)) ?>
								<div class="blog-tags-sm"><?php the_tags('', ', ', ''); ?></div>
							</div>
							<?php } ?>
							<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
							<p><?php echo get_home_blog_excerpt(); ?></p>
						</div>
					</div>
				</div>
			</div>
			<?php 
			  if($i==2)
			  { 
			     echo '<div class="clearfix"></div>';
				 $i=0;
			  }$i++;
			  wp_reset_postdata();
			endwhile;  ?>
		</div>
<!--contato-->
		<div class="blog-sm-area">
<div class="col-md-6 bloco">	
		<h3>Fale Conosco</h3>
			<?php wd_contact_form_maker(3);?>
</div>
			<div class="col-md-4 bloco width300">
                		<h4>ou se preferir...</h4>
<div class="cem">
				<div class="service-icon height60">
							<i class="fa fa-phone"></i>
				</div>
				<p>(31) 3-665-7777</p>
				<p>(31) 9-8473-1607</p>
				<p>(31) 9-8478-6316</p>
</div>
			<a href="mailto: sac@estacionamentopatioconfins.com.br" target="_top">			
				<div class="service-icon height60 espaconoalto">
							<i class="fa fa-envelope-o"></i>
				</div>
				<p class="ema espaconoalto">sac@estacionamentopatioconfins.com.br</p>
			</a>	
            		</div>
		</div>
		
<!--/contato-->

	</div>
<?php } ?>
</div>