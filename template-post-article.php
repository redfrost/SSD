<?php
/*
Template Name Posts: Article
*/
?>

<style type="text/css">
    .single-post .sidebar { width: 100% !important; border-top: 1px solid #eee !important; }
    .single-post.responsive .sidebar section { padding-left: 0 !important; }
    .single-post .main {
        border: 0 none !important;
        margin: 0 auto 60px !important;
        width: 86% !important;
        max-width: 680px;
    }    
    .main.left, .sidebar.left {
    float: none !important;
    }
p { 
     font-family: 나눔명조,NanumMyeongjo,Nanum Myeongjo,Georgia,"Apple SD Gothic Neo",'Malgun Gothic'!important; 
     }   
</style>

<?php get_template_part('templates/content', 'single'); ?>
