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
            <h4 class="white">About Us</h4>
            <h6 class="white">
              Professional team of ThemeRex studio presents this terrific
              Infographic Theme
            </h6>
          </div>
        </header>
        <section class="container pad90 beige">
          <div class="main">
            <h4>meet our team</h4>
            <h6>
              ThemeRex is a studio that aims to make their user???s experience
              easier and much more pleasant.{" "}
            </h6>
            <h4 class="light gray marg60-bot">
              ThemeRex is doing their best to grant each owner of their themes
              with maximum opportunities to present their individuality, show
              their achievements, and establish the best contact with their
              audience.
            </h4>
            <div class="team circle">
              <div class="item">
                <div class="image border">
                  <img src="images/blog/250x250.jpg" alt="" />
                  <div class="overlay">
                    <ul class="social">
                      <li>
                        <a href="https://www.facebook.com/themerex/">
                          <span class="icon-facebook"></span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/Theme_REX/">
                          <span class="icon-twitter"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon-pinterest"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="content">
                  <h4 class="black">johnny Doe</h4>
                  <span>
                    Sed blandit, ante vitae blandit rutrum sapien nisl ornare
                    nibh nec scelerisque magna.
                  </span>
                </div>
              </div>
              <div class="item">
                <div class="image border">
                  <img src="images/blog/250x250.jpg" alt="" />
                  <div class="overlay">
                    <ul class="social">
                      <li>
                        <a href="https://www.facebook.com/themerex/">
                          <span class="icon-facebook"></span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/Theme_REX/">
                          <span class="icon-twitter"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon-pinterest"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="content">
                  <h4 class="black">denise wheeler</h4>
                  <span>
                    Quisque sed metus vestibulum, aliquet enim ac, porttitor
                    purus donec sem velit, mattis.{" "}
                  </span>
                </div>
              </div>
              <div class="item">
                <div class="image border">
                  <img src="images/blog/250x250.jpg" alt="" />
                  <div class="overlay">
                    <ul class="social">
                      <li>
                        <a href="https://www.facebook.com/themerex/">
                          <span class="icon-facebook"></span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/Theme_REX/">
                          <span class="icon-twitter"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="icon-pinterest"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="content">
                  <h4 class="black">Leroy Barnes</h4>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="container pad90 cornsilk">
          <div class="main">
            <h4>what we do</h4>
            <h6>more information about rock group features</h6>
            <h4 class="light gray">
              ThemeRex worked out an amazing combination of vast fucntionalilty
              and user???s comfort. Thanks to an amazingly user friendly TRX
              Framework, customers have a chance to customize their theme the
              way they like.{" "}
            </h4>
            <div class="diagram_skills resp marg90">
              <div class="title">
                <span class="number">100%</span>result
              </div>
              <div id="sk_1" class="sc_skills">
                <canvas
                  id="canvas_sk_1"
                  height="520"
                  width="520"
                  data-percent="25"
                  data-color="#c0c192"
                ></canvas>
                <div class="line">
                  <div class="tail"></div>
                </div>
                <div class="item">
                  <img src="images/7.png" alt="" />
                  <span>100% Responsive</span>
                  <div class="content">
                    The fact of prevalence of mobile devices obliges to adjust
                    any actual website to their peculiarity at maximum degree.
                  </div>
                </div>
              </div>
              <div id="sk_2" class="sc_skills">
                <canvas
                  id="canvas_sk_2"
                  height="460"
                  width="460"
                  data-percent="50"
                  data-color="#c44b12"
                ></canvas>
                <div class="line">
                  <div class="tail"></div>
                </div>
                <div class="item">
                  <img src="images/6.png" alt="" />
                  <span>Free Support</span>
                  <div class="content">
                    Our Support Team is ready to become your reliable guide in
                    the World of RockGroup. We provide free access to theme
                    Documentation and our Ticket Sys.
                  </div>
                </div>
              </div>
              <div id="sk_3" class="sc_skills">
                <canvas
                  id="canvas_sk_3"
                  height="400"
                  width="400"
                  data-percent="75"
                  data-color="#669c75"
                ></canvas>
                <div class="line">
                  <div class="tail"></div>
                </div>
                <div class="item">
                  <img src="images/5.png" alt="" />
                  <span>Shortcodes</span>
                  <div class="content">
                    Rock Group includes the most full set of Shortcodes, amongst
                    which you can find those you can get only in ThemeRex
                    products.
                  </div>
                </div>
              </div>
              <div id="sk_4" class="sc_skills">
                <canvas
                  id="canvas_sk_4"
                  height="340"
                  width="340"
                  data-percent="85"
                  data-color="#3d9ba9"
                ></canvas>
                <div class="line">
                  <div class="tail"></div>
                </div>
                <div class="item">
                  <img src="images/4.png" alt="" />
                  <span>SEO Ready</span>
                  <div class="content">
                    HTML5 code integrated into the theme meets the best SEO
                    approaches. The theme supports compatibility with advaneced
                    SEO plugins.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="container pad90-top seagreen">
          <div class="main white">
            <h4>some facts about us</h4>
            <h6>
              rock group gives you an option to create an infinite number of
              layout types.
            </h6>
            <div id="widget_2" class="widget_skills">
              <div class="widget_inner">
                <div id="lw_1" class="skills_row">
                  <img src="images/scene/12.png" alt="" />
                  <div class="name">Css3</div>
                </div>
                <div id="lw_2" class="skills_row">
                  <img src="images/scene/11.png" alt="" />
                  <div class="name">Html5</div>
                </div>
                <div id="lw_3" class="skills_row">
                  <img src="images/scene/10.png" alt="" />
                  <div class="name">MySql</div>
                </div>
                <div id="lw_4" class="skills_row">
                  <img src="images/scene/9.png" alt="" />
                  <div class="name">pHp</div>
                </div>
                <div id="lw_5" class="skills_row">
                  <img src="images/scene/13.png" alt="" />
                  <div class="name">Design</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="container pad90-top cadetblue">
          <div class="main">
            <a href="" class="button anim">
              purchase
            </a>
            <h4 class="light white marg0">
              ThemeRex is doing their best to grant each owner of Rock Group
              with maximum opportunities
              <br /> to present their individuality, and establish the best
              contact with their audience.
            </h4>
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
