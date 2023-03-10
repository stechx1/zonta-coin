import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Rock Group</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/fontello/css/fontello.css"
        />
        <link rel="stylesheet" type="text/css" href="css/prettyPhoto.css" />
        <link rel="stylesheet" type="text/css" href="css/mediaplayer.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/responsiveslides.css"
        />
        <link rel="stylesheet" type="text/css" href="css/responsive.css" />
        <link
          href="http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
          rel="stylesheet"
          type="text/css"
        />
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/Chart.min.js"></script>
        <script
          type="text/javascript"
          src="js/jquery.flexslider.min.js"
        ></script>
        <script type="text/javascript" src="js/jquery.prettyPhoto.js"></script>
        <script type="text/javascript" src="js/mediaelement.min.js"></script>
        <script type="text/javascript" src="js/jquery.isotope.min.js"></script>
        <script type="text/javascript" src="js/jquery.hoverdir.js"></script>
        <script type="text/javascript" src="js/responsiveslides.js"></script>
        <script type="text/javascript" src="js/jquery.cookie.js"></script>
        <script type="text/javascript" src="js/_front.js"></script>
        <script type="text/javascript" src="js/_gallery.js"></script>
      </Head>
      <div class="body_background"></div>
      <div class="panelbutton"></div>
      <div class="panel">
        <div class="columns">
          <div class="item homepages">
            <div class="title">Homepage Style</div>
            <ul>
              <li>
                <a href="index.html" class="active">
                  rock group
                </a>
              </li>
              <li>
                <a href="ecogroup.html">eco group</a>
              </li>
              <li>
                <a href="travelgroup.html">travel group</a>
              </li>
            </ul>
          </div>
          <div class="item patterns">
            <div class="title">Patterns</div>
            <ul>
              <li>
                <div class="pattern1"></div>
              </li>
              <li>
                <div class="pattern2"></div>
              </li>
              <li>
                <div class="pattern3"></div>
              </li>
              <li>
                <div class="pattern4"></div>
              </li>
              <li>
                <div class="pattern5"></div>
              </li>
              <li>
                <div class="pattern6"></div>
              </li>
            </ul>
          </div>
          <div class="item background">
            <div class="title">Background Image</div>
            <ul>
              <li>
                <div class="background1"></div>
              </li>
              <li>
                <div class="background2"></div>
              </li>
              <li>
                <div class="background3"></div>
              </li>
              <li>
                <div class="background4"></div>
              </li>
              <li>
                <div class="background5"></div>
              </li>
              <li>
                <div class="background6"></div>
              </li>
            </ul>
          </div>
          <div class="item layout">
            <div class="title">Layout Style</div>
            <div>
              <span id="boxed">boxed</span>
              <span id="wide" class="active">
                wide
              </span>
            </div>
          </div>
        </div>
        <div class="close"></div>
      </div>
      <div class="box">
        <header id="header" class="container small_scene">
          <div class="main">
            <nav class="header">
              <ul>
                <li>
                  <a href="/shortcodes">features</a>
                </li>
                <li>
                  <a href="/about">about us</a>
                </li>
                <li class="logo">
                  <a href="/">
                    <img src="images/logo.png" alt="" />
                    <h3>rock group</h3>
                    <h6>infographic theme</h6>
                  </a>
                </li>
                <li>
                  <a href="/blog">blog</a>
                </li>
                <li>
                  <a href="/gallery">portfolio</a>
                </li>
              </ul>
            </nav>
            <nav class="header scroll_menu">
              <ul>
                <li>
                  <a href="/shortcodes">features</a>
                </li>
                <li>
                  <a href="/about">about us</a>
                </li>
                <li class="logo">
                  <a href="/">
                    <img src="images/logo.png" alt="" />
                    <h3>rock group</h3>
                    <h6>infographic theme</h6>
                  </a>
                </li>
                <li>
                  <a href="/blog">blog</a>
                </li>
                <li>
                  <a href="/gallery">portfolio</a>
                </li>
              </ul>
            </nav>
            <div id="scene_1">
              <img class="item" src="images/scene/a1.png" alt="" />
              <img class="item" src="images/scene/a2.png" alt="" />
              <img class="item" src="images/scene/a3.png" alt="" />
              <img class="item" src="images/scene/a4.png" alt="" />
              <img class="item" src="images/scene/a5.png" alt="" />
            </div>
            <h4 class="white">Small Gallery Style</h4>
            <h6 class="white">
              Professional team of ThemeRex studio presents this terrific
              Infographic Theme
            </h6>
          </div>
        </header>
        <section class="gallery_container beige">
          <div class="isotope_block anim" id="abc1">
            <ul class="iso_filters cats">
              <li>
                <a href="#" data-filter="*" class="current">
                  All
                </a>
              </li>
              <li>
                <a href="#" data-filter=".branding">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" data-filter=".design">
                  Design
                </a>
              </li>
              <li>
                <a href="#" data-filter=".print">
                  Print
                </a>
              </li>
              <li>
                <a href="#" data-filter=".drawing">
                  Drawing
                </a>
              </li>
              <li>
                <a href="#" data-filter=".art">
                  Art
                </a>
              </li>
              <li>
                <a href="#" data-filter=".logo">
                  Logo
                </a>
              </li>
              <li>
                <a href="#" data-filter=".photography">
                  Photography
                </a>
              </li>
            </ul>
            <div class="gallery_posts iso_items">
              <div class="isotope_single_item hentry branding design art follow">
                <a href="">
                  <div class="gallery_thumb">
                    <img alt="" src="images/blog/2000x1300.jpg" />
                  </div>
                  <div class="post_info overlay">
                    <div class="gallery_mask"></div>
                    <h5 class="gallery_title">Zhivko Terziivanov</h5>
                    <h5 class="position">Graphic Designer </h5>
                    <h6 class="post_cats">branding design art</h6>
                  </div>
                </a>
              </div>
              <div class="isotope_single_item hentry print drawing photography follow">
                <a href="">
                  <div class="gallery_thumb">
                    <img alt="" src="images/blog/2000x1300.jpg" />
                  </div>
                  <div class="post_info overlay">
                    <div class="gallery_mask"></div>
                    <h5 class="gallery_title">Zhivko Terziivanov</h5>
                    <h5 class="position">Graphic Designer </h5>
                    <h6 class="post_cats">print drawing </h6>
                  </div>
                </a>
              </div>
              <div class="isotope_single_item hentry branding print follow">
                <a href="">
                  <div class="gallery_thumb">
                    <img alt="" src="images/blog/2000x1300.jpg" />
                  </div>
                  <div class="post_info overlay">
                    <div class="gallery_mask"></div>
                    <h5 class="gallery_title">Zhivko Terziivanov</h5>
                    <h5 class="position">Graphic Designer </h5>
                    <h6 class="post_cats">branding print</h6>
                  </div>
                </a>
              </div>
              <div class="isotope_single_item hentry design art logo follow">
                <a href="">
                  <div class="gallery_thumb">
                    <img alt="" src="images/blog/2000x1300.jpg" />
                  </div>
                  <div class="post_info overlay">
                    <div class="gallery_mask"></div>
                    <h5 class="gallery_title">Zhivko Terziivanov</h5>
                    <h5 class="position">Graphic Designer </h5>
                    <h6 class="post_cats">design art logo</h6>
                  </div>
                </a>
              </div>
              <div class="isotope_single_item hentry branding print photography follow">
                <a href="">
                  <div class="gallery_thumb">
                    <img alt="" src="images/blog/2000x1300.jpg" />
                  </div>
                  <div class="post_info overlay">
                    <div class="gallery_mask"></div>
                    <h5 class="gallery_title">Zhivko Terziivanov</h5>
                    <h5 class="position">Graphic Designer </h5>
                    <h6 class="post_cats">branding print photography</h6>
                  </div>
                </a>
              </div>
              <div class="isotope_single_item hentry drawing art follow">
                <a href="">
                  <div class="gallery_thumb">
                    <img alt="" src="images/blog/2000x1300.jpg" />
                  </div>
                  <div class="post_info overlay">
                    <div class="gallery_mask"></div>
                    <h5 class="gallery_title">Zhivko Terziivanov</h5>
                    <h5 class="position">Graphic Designer </h5>
                    <h6 class="post_cats">drawing art</h6>
                  </div>
                </a>
              </div>
              <div class="isotope_single_item hentry branding design photography follow">
                <a href="">
                  <div class="gallery_thumb">
                    <img alt="" src="images/blog/2000x1300.jpg" />
                  </div>
                  <div class="post_info overlay">
                    <div class="gallery_mask"></div>
                    <h5 class="gallery_title">Zhivko Terziivanov</h5>
                    <h5 class="position">Graphic Designer </h5>
                    <h6 class="post_cats">branding design photography</h6>
                  </div>
                </a>
              </div>
              <div class="isotope_single_item hentry design drawing logo follow">
                <a href="">
                  <div class="gallery_thumb">
                    <img alt="" src="images/blog/2000x1300.jpg" />
                  </div>
                  <div class="post_info overlay">
                    <div class="gallery_mask"></div>
                    <h5 class="gallery_title">Zhivko Terziivanov</h5>
                    <h5 class="position">Graphic Designer </h5>
                    <h6 class="post_cats">design drawing logo</h6>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer class="widget_footer">
          <div class="widget">
            <div class="title">follow us</div>
            <div class="content">
              Aliquam elementum dolor est cursus quam ultrices luctus nibh dolor
              at enim.
            </div>
            <div class="widget_social">
              <ul>
                <li>
                  <a href="" class="icon_gmail"></a>
                </li>
                <li>
                  <a href="" class="icon_facebook"></a>
                </li>
                <li>
                  <a href="" class="icon_twitter"></a>
                </li>
                <li>
                  <a href="" class="icon_pinterest"></a>
                </li>
                <li>
                  <a href="" class="icon_be"></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="widget">
            <div class="title">recent posts</div>
            <div class="recent_post">
              <div class="author">
                <img src="images/blog/250x250.jpg" alt="" />
              </div>
              <a href="" class="content">
                Aliquam elementum dolor est cursus quam ultri.
                <div class="date">february 24, 2014</div>
              </a>
            </div>
            <div class="recent_post">
              <div class="author">
                <img src="images/blog/250x250.jpg" alt="" />
              </div>
              <a href="" class="content">
                Aliquam elementum dolor est cursus quam ultrices luc.
                <div class="date">february 24, 2014</div>
              </a>
            </div>
          </div>
          <div class="widget">
            <div class="title">tags</div>
            <ul class="tags">
              <li>
                <a href="">Identity</a>
              </li>
              <li>
                <a href="">Art</a>
              </li>
              <li>
                <a href="">Design</a>
              </li>
              <li>
                <a href="">News</a>
              </li>
              <li>
                <a href="">Photo</a>
              </li>
              <li>
                <a href="">Wordpress</a>
              </li>
              <li>
                <a href="">Print</a>
              </li>
              <li>
                <a href="">html5</a>
              </li>
              <li>
                <a href="">Business</a>
              </li>
              <li>
                <a href="">People</a>
              </li>
              <li>
                <a href="">Motion</a>
              </li>
            </ul>
          </div>
          <div class="widget">
            <div class="title">comments</div>
            <div class="comment">
              <div class="icon icon-pencil"></div>
              <a href="" class="content">
                Aliquam elementum dolor est cursus quam ultrices luc.
              </a>
            </div>
            <div class="comment">
              <div class="icon icon-pencil"></div>
              <a href="" class="content">
                Cum sociis natoque penatibus et magnis dis parturient montes.
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
