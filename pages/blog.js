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
        <script type="text/javascript" src="js/responsiveslides.js"></script>
        <script type="text/javascript" src="js/jquery.cookie.js"></script>
        <script type="text/javascript" src="js/_front.js"></script>
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
            <h4 class="white">Blog</h4>
            <h6 class="white">
              Professional team of ThemeRex studio presents this terrific
              Infographic Theme
            </h6>
          </div>
        </header>
        <section class="container cornsilk pad70">
          <div class="main">
            <div class="post_date">march 27, 2014</div>
            <h2 class="post_title">First graphic design ??? Image post</h2>
            <div class="post_category marg60-bot">
              <span class="icon icon-tag"></span>
              <a href="">Nature</a>, <a href="">photography</a>
            </div>
            <div class="post_image marg30-bot">
              <img src="images/blog/2000x1300.jpg" alt="" />
            </div>
            <div class="post_content marg60-bot">
              Comparisons to product design are compelling but also frustrating
              for architects & landscape architects. Our ???product??? is always
              custom, never mass-produced; our budgets are small and shrinking;
              our projects are large, long-lived, and difficult to prototype.
              But prototyping lies at the heart of iterative design research: it
              allows designers to test their work not just against an abstracted
              model but with increasingly realized versions of the thing itself.
              <p>
                My design ideas for the park involved emphasizing, tweaking,
                twisting, and extending the existing structure, as well as
                expanding the park???s tradition of user modification, which
                allows for adaptation to changing needs.
              </p>
            </div>
            <div class="post_more marg30-bot">
              <a href="">Continue Reading...</a>
            </div>
            <div class="post_comment marg30-bot">
              <span class="icon icon-comment"></span>5 comments
            </div>
            <div class="post_social">
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
                <li>
                  <a href="" class="icon_dribbble"></a>
                </li>
                <li>
                  <a href="" class="icon_youtube"></a>
                </li>
                <li>
                  <a href="" class="icon_vimeo"></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="container beige pad70">
          <div class="main post-anim">
            <div class="post_date">march 27, 2014</div>
            <h2 class="post_title">Slideshow with Featured images</h2>
            <div class="post_category marg60-bot">
              <span class="icon icon-tag"></span>
              <a href="">Nature</a>, <a href="">photography</a>
            </div>
            <div class="slider_container marg30-bot">
              <ul class="rslides">
                <li>
                  <img src="images/blog/2000x1300.jpg" alt="" />
                </li>
                <li>
                  <img src="images/blog/2000x1300.jpg" alt="" />
                </li>
                <li>
                  <img src="images/blog/2000x1300.jpg" alt="" />
                </li>
                <li>
                  <img src="images/blog/2000x1300.jpg" alt="" />
                </li>
                <li>
                  <img src="images/blog/2000x1300.jpg" alt="" />
                </li>
              </ul>
            </div>
            <div class="post_content marg60-bot">
              We created three popular infographic skins for business, ecology
              and politics. You may use these templates both for these themes
              and for many others, since they are quite versatile.{" "}
            </div>
            <div class="post_more marg30-bot">
              <a href="">Continue Reading...</a>
            </div>
            <div class="post_comment marg30-bot">
              <span class="icon icon-comment"></span>5 comments
            </div>
            <div class="post_social">
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
                <li>
                  <a href="" class="icon_dribbble"></a>
                </li>
                <li>
                  <a href="" class="icon_youtube"></a>
                </li>
                <li>
                  <a href="" class="icon_vimeo"></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="container cornsilk pad70">
          <div class="main post-anim">
            <div class="post_date">march 27, 2014</div>
            <h2 class="post_title">Audio Post</h2>
            <div class="post_category marg60-bot">
              <span class="icon icon-tag"></span>
              <a href="">audio</a>, <a href="">music</a>
            </div>
            <audio
              src="http://beautymind.webglogic.com/audio/AirReview-Landmarks-02-ChasingCorporate.mp3"
              width="100%"
              height="50"
              class="marg30-bot"
            ></audio>
            <div class="post_content marg60-bot">
              My design ideas for the park involved emphasizing, tweaking,
              twisting, and extending the existing structure, as well as
              expanding the park???s tradition of user modification, which allows
              for adaptation to changing needs.
            </div>
            <div class="post_more marg30-bot">
              <a href="">Continue Reading...</a>
            </div>
            <div class="post_comment marg30-bot">
              <span class="icon icon-comment"></span>5 comments
            </div>
            <div class="post_social">
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
                <li>
                  <a href="" class="icon_dribbble"></a>
                </li>
                <li>
                  <a href="" class="icon_youtube"></a>
                </li>
                <li>
                  <a href="" class="icon_vimeo"></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="container pad beige pad70">
          <div class="main_middle post-anim">
            <div class="post_date">march 27, 2014</div>
            <h2 class="post_title">Quote Format</h2>
            <div class="post_category marg60-bot">
              <span class="icon icon-tag"></span>
              <a href="">lifestyle</a>, <a href="">world</a>
            </div>
            <div class="quote_icon  marg30-bot">
              <span class="icon icon-quote"></span>
            </div>
            <div class="quote_content marg30-bot">
              In the End, we will remember not the words of our enemies, but the
              silence of our friends.
            </div>
            <div class="quote_author marg30-bot">
              <img src="images/blog/250x250.jpg" alt="" />
            </div>
            <div class="quote_author_info marg30-bot">
              Martin Luther King Jr.
              <br />
              (1929-1968)
            </div>
            <div class="post_social">
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
                <li>
                  <a href="" class="icon_dribbble"></a>
                </li>
                <li>
                  <a href="" class="icon_youtube"></a>
                </li>
                <li>
                  <a href="" class="icon_vimeo"></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="container cornsilk pad70">
          <div class="main post-anim">
            <div class="post_date">march 27, 2014</div>
            <h2 class="post_title">Grid Type Gallery</h2>
            <div class="post_category marg60-bot">
              <span class="icon icon-tag"></span>
              <a href="">photography</a>, <a href="">life</a>,{" "}
              <a href="">design</a>
            </div>
            <ul class="gallery_images marg30-bot">
              <li>
                <img src="images/blog/2000x1300.jpg" alt="" />
              </li>
              <li>
                <img src="images/blog/2000x1300.jpg" alt="" />
              </li>
              <li>
                <img src="images/blog/2000x1300.jpg" alt="" />
              </li>
              <li>
                <img src="images/blog/2000x1300.jpg" alt="" />
              </li>
            </ul>
            <div class="post_content marg60-bot">
              My design ideas for the park involved emphasizing, tweaking,
              twisting, and extending the existing structure, as well as
              expanding the park???s tradition of user modification, which allows
              for adaptation to changing needs.
            </div>
            <div class="post_more marg30-bot">
              <a href="">Continue Reading...</a>
            </div>
            <div class="post_social">
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
                <li>
                  <a href="" class="icon_dribbble"></a>
                </li>
                <li>
                  <a href="" class="icon_youtube"></a>
                </li>
                <li>
                  <a href="" class="icon_vimeo"></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="container beige pad70">
          <div class="main post-anim">
            <div class="post_date">march 27, 2014</div>
            <h2 class="post_title">Link Format</h2>
            <div class="post_category marg60-bot">
              <span class="icon icon-tag"></span>
              <a href="">Art</a>, <a href="">Logo</a>, <a href="">Print</a>,{" "}
              <a href="">Icons</a>, <a href="">Resources</a>
            </div>
            <div class="link_content marg60-bot">
              <a href="http://themeforest.net/user/ThemeREX">
                http://themeforest.net/user/ThemeREX
              </a>
            </div>
            <div class="post_social">
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
                <li>
                  <a href="" class="icon_dribbble"></a>
                </li>
                <li>
                  <a href="" class="icon_youtube"></a>
                </li>
                <li>
                  <a href="" class="icon_vimeo"></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="container cornsilk  pad70">
          <div class="main_middle post-anim">
            <div class="post_date">march 27, 2014</div>
            <h2 class="post_title marg60-bot">Custom Text</h2>
            <div class="custom_text marg60-bot">
              Paris is the capital and most populous city of France. Situated on
              the Seine River, in the north of the country, it is at the heart
              of the ??le-de-France region, also known as the r??gion parisienne.
              Within its administrative limits largely unchanged since 1860 (the
              20 arrondissements)
            </div>
            <div class="post_social">
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
                <li>
                  <a href="" class="icon_dribbble"></a>
                </li>
                <li>
                  <a href="" class="icon_youtube"></a>
                </li>
                <li>
                  <a href="" class="icon_vimeo"></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="container beige  pad70">
          <div class="main post-anim">
            <div class="post_date">march 27, 2014</div>
            <h2 class="post_title">Video Post</h2>
            <div class="post_category marg60-bot">
              <span class="icon icon-tag"></span>
              <a href="">audio</a>, <a href="">music</a>
            </div>
            <div class="post_video marg30-bot">
              <div
                class="video_thumb"
                data-frame="http://player.vimeo.com/video/99338216"
              ></div>
            </div>
            <div class="post_content marg60-bot">
              My design ideas for the park involved emphasizing, tweaking,
              twisting, and extending the existing structure, as well as
              expanding the park???s tradition of user modification, which allows
              for adaptation to changing needs.
            </div>
            <div class="post_more marg30-bot">
              <a href="">Continue Reading...</a>
            </div>
            <div class="post_social">
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
                <li>
                  <a href="" class="icon_dribbble"></a>
                </li>
                <li>
                  <a href="" class="icon_youtube"></a>
                </li>
                <li>
                  <a href="" class="icon_vimeo"></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="container cornsilk  pad70">
          <div class="main post-anim">
            <div class="post_date">march 27, 2014</div>
            <h2 class="post_title marg60-bot">Chat Format</h2>
            <div class="chat_content">
              <div class="message">
                <div class="author">Mat Jefferson: </div>
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              </div>
              <div class="message">
                <div class="author">Maria: </div>
                <div class="content">
                  {" "}
                  Donec at lacus magna. Nullam placerat semper urna eu faucibus.
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </div>
              </div>
              <div class="message">
                <div class="author">Mat Jefferson: </div>
                <div class="content">
                  Aliquam euismoder ante dictum velit accumsan.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="container beige  pad70">
          <div class="main post-anim">
            <div class="post_date">march 27, 2014</div>
            <h2 class="post_title">Aside Format</h2>
            <div class="post_category marg60-bot">
              <span class="icon icon-tag"></span>
              <a href="">Art</a>, <a href="">Logo</a>, <a href="">Print</a>,{" "}
              <a href="">Icons</a>, <a href="">Resources</a>
            </div>
            <div class="aside_content">
              <div class="photo">
                <img src="images/blog/250x250.jpg" alt="" />
              </div>
              <div class="name">Mat Jefferson</div>
              <div class="content">
                Etiam volutpat adipiscing posuere suspendisse pellentesque
                mauris aliquam eleifend. Aliquam euismoder ante dictum velit
                accumsan.
                <br />
                Aenean nulla purus, interdum vel tincidunt sit amet, aliquam
                vitae velit. Suspendisse euismod lorem luctus vehicula molestie.
                Curabitur sed aliquam eros.
              </div>
            </div>
          </div>
        </section>
        <section class="container cornsilk pad70">
          <div class="main post-anim">
            <div class="post_date">march 27, 2014</div>
            <h2 class="post_title">Video Post</h2>
            <div class="post_category marg60-bot">
              <span class="icon icon-tag"></span>
              <a href="">audio</a>, <a href="">music</a>
            </div>
            <div class="post_video marg30-bot">
              <div
                class="video_thumb"
                data-frame="http://player.vimeo.com/video/105286558"
              ></div>
            </div>
            <div class="post_content marg60-bot">
              My design ideas for the park involved emphasizing, tweaking,
              twisting, and extending the existing structure, as well as
              expanding the park???s tradition of user modification, which allows
              for adaptation to changing needs.
            </div>
            <div class="post_more marg30-bot">
              <a href="">Continue Reading...</a>
            </div>
            <div class="post_social">
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
                <li>
                  <a href="" class="icon_dribbble"></a>
                </li>
                <li>
                  <a href="" class="icon_youtube"></a>
                </li>
                <li>
                  <a href="" class="icon_vimeo"></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <footer class="footer container cadetblue">
          <div class="main white">
            <div class="logo">
              <img src="images/logo.png" alt="" />
              <h3>rock group</h3>
              <h6>infographic theme</h6>
            </div>
            <div class="content">
              <a href="">ThemeREX</a> ?? 2014. All Rights Reserved.{" "}
              <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>.
            </div>
            <div class="social">
              <ul>
                <li>
                  <a href="">
                    <span class="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span class="icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span class="icon-pinterest"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
