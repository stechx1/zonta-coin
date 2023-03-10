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
      <div class="box beige">
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
                    <h3 class="dark">rock group</h3>
                    <h6 class="dark">infographic theme</h6>
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
            <h4 class="white">Shortcodes</h4>
            <h6 class="white">2011 - 2014</h6>
          </div>
        </header>
        <section class="main">
          <section class="primary marg90">
            <article class="post pad70-bot">
              <h2>Accordion</h2>
              <div class="accordion">
                <div class="item">
                  <div class="head">
                    <span class="title">Accordion 1</span>
                    <span class="icon icon-minus"></span>
                  </div>
                  <div class="body">
                    Nunc consectetur eros nec tortor consectetur faucibus.
                    Nullam sagittis purus sed odio mattis, eu lobortis risus
                    pharetra. Pellentesque ut purus id mi euismod consectetur.
                    Praesent nisl neque, pretium quis ornare eu, aliquam vitae
                    ipsum. Cras molestie eu mauris ut lacinia.{" "}
                  </div>
                </div>
                <div class="item close">
                  <div class="head">
                    <span class="title">Accordion 2</span>
                    <span class="icon icon-plus"></span>
                  </div>
                  <div class="body">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Maecenas nec odio et ante tincidunt tempus.
                    Donec vitae sapien ut libero venenatis faucibus. Nullam quis
                    ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
                    leo. Sed fringilla mauris sit amet nibh.{" "}
                  </div>
                </div>
                <div class="item close">
                  <div class="head">
                    <span class="title">Accordion 3</span>
                    <span class="icon icon-plus"></span>
                  </div>
                  <div class="body">
                    Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                    lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                    Phasellus viverra nulla ut metus varius laoreet. Quisque
                    rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                    rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                    sem quam semper libero, sit amet adipiscing sem neque sed
                    ipsum.{" "}
                  </div>
                </div>
              </div>
            </article>
            <article class="post post-anim pad70">
              <h2>Tables</h2>
              <table class="table">
                <tr>
                  <th class="first">#</th>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                  <th>Column 4</th>
                </tr>
                <tr>
                  <td class="first">1</td>
                  <td>Row 1 cell 1</td>
                  <td>Row 1 cell 2</td>
                  <td>Row 1 cell 3</td>
                  <td>Row 1 cell 4</td>
                </tr>
                <tr>
                  <td class="first">2</td>
                  <td>Row 2 cell 1</td>
                  <td>Row 2 cell 2</td>
                  <td>Row 2 cell 3</td>
                  <td>Row 2 cell 4</td>
                </tr>
                <tr>
                  <td class="first">3</td>
                  <td>Row 3 cell 1</td>
                  <td>Row 3 cell 2</td>
                  <td>Row 3 cell 3</td>
                  <td>Row 3 cell 4</td>
                </tr>
                <tr>
                  <td class="first">4</td>
                  <td>Row 4 cell 1</td>
                  <td>Row 4 cell 2</td>
                  <td>Row 4 cell 3</td>
                  <td>Row 4 cell 4</td>
                </tr>
              </table>
            </article>
            <article class="post post-anim pad70">
              <h2>Audio Player</h2>
              <div class="audio_player">
                <div class="title">Insert Audio Title Here</div>
                <div class="author">by Lily Hunter</div>
                <audio
                  src="http://beautymind.webglogic.com/audio/AirReview-Landmarks-02-ChasingCorporate.mp3"
                  width="100%"
                  height="50"
                ></audio>
              </div>
            </article>
            <article class="post post-anim pad70">
              <h2>Vimeo Video Player</h2>
              <div class="post_video">
                <div
                  class="video_thumb"
                  data-frame="http://player.vimeo.com/video/105286558"
                ></div>
              </div>
            </article>
            <article class="post post-anim pad70">
              <h2>Youtube Video Player</h2>
              <div class="post_video">
                <div
                  class="video_thumb"
                  data-frame="http://www.youtube.com/embed/Gm0SShmU5Oo?wmode=opaque"
                ></div>
              </div>
            </article>
            <article class="post post-anim pad70">
              <h2>Slider</h2>
              <div class="slider_container">
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
            </article>
            <article class="post post-anim pad70">
              <h2>Image Alignment</h2>
              <div class="regular content large gray">
                <div class="image left">
                  <img src="images/blog/250x250.jpg" alt="" />
                  <div class="overlay">Hello Better</div>
                </div>
                <p>
                  Integer laoreet luctus ipsum, a interdum felis tristique
                  vitae. Vestibulum non odio dapibus nunc sollicitudin
                  ullamcorper. Nullam velit velit, iaculis vitae dui eget,
                  eleifend pulvinar urna. Ut iaculis orci at massa condimentum
                  imperdiet. Duis tincidunt ultrices laoreet. Suspendisse nec
                  nisl lorem. Aliquam molestie enim quis odio consectetur
                  tristique sed non massa. Vestibulum placerat vulputate
                  porttitor. Vestibulum volutpat, libero vitae euismod sodales,
                  magna lacus accumsan tellus, in ornare purus sem et metus.{" "}
                  <br />
                  In pharetra luctus libero, in auctor magna dignissim sit amet.
                  Maecenas sagittis est quis metus ullamcorper posuere.
                </p>
                <p>
                  Praesent non fermentum felis. Sed ultrices mauris quis
                  vestibulum ornare. Aenean nulla purus, interdum vel tincidunt
                  sit amet, aliquam vitae velit. Suspendisse euismod lorem
                  luctus vehicula molestie. Curabitur sed aliquam eros. Maecenas
                  eu dictum magna. Aliquam erat volutpat. Sed sit amet diam
                  tincidunt, rhoncus leo quis, porttitor risus.{" "}
                </p>
                <div class="image right">
                  <img src="images/blog/250x250.jpg" alt="" />
                  <div class="overlay">Photographs by johnny Doe</div>
                </div>
                <p>
                  Cras ligula sapien, posuere ut tortor ut, ullamcorper
                  malesuada augue. Proin vulputate neque ut lorem vehicula, id
                  posuere nulla molestie. Duis tellus orci, mattis sit amet urna
                  ut, faucibus consectetur elit. Etiam non ultricies purus.
                  Etiam pulvinar sed mauris fermentum consequat. Sed ut metus
                  porttitor, rhoncus libero et, rutrum urna. Suspendisse dictum
                  feugiat quam, ut sodales orci malesuada sit amet. Nulla justo
                  urna, mattis nec pharetra et, congue nec urna. Mauris quis
                  orci elementum, blandit diam fringilla, placerat metus. Proin
                  vel arcu eget nibh dictum vestibulum.
                </p>
              </div>
            </article>
            <article class="post post-anim pad70">
              <h2>Team</h2>
              <div class="team square">
                <div class="item">
                  <div class="image">
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
                    <h4 class="black">Florence Hanson</h4>
                    <span>Web designer</span>
                  </div>
                </div>
                <div class="item">
                  <div class="image">
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
                    <h4 class="black">Margie Burke</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                <div class="item">
                  <div class="image">
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
                    <h4 class="black">Mike Newton</h4>
                    <span>Project Manager</span>
                  </div>
                </div>
              </div>
            </article>
            <article class="post post-anim pad70">
              <div class="team circle">
                <div class="item">
                  <div class="image">
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
                  <div class="image">
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
                  <div class="image">
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
            </article>
            <article class="post post-anim pad70">
              <h2>Lists</h2>
              <div class="columns">
                <ul class="number item">
                  <li>Lorem ipsum dolor sit</li>
                  <li>Amet, consectetur</li>
                  <li>Eiusmod tempor dolor</li>
                  <li>Ut enim ad minim veniam</li>
                  <li>Quis nostrud exercitation</li>
                </ul>
                <ul class="arrow item">
                  <li>Lorem ipsum dolor sit</li>
                  <li>Amet, consectetur</li>
                  <li>Eiusmod tempor dolor</li>
                  <li>Ut enim ad minim veniam</li>
                  <li>Quis nostrud exercitation</li>
                </ul>
                <ul class="star item">
                  <li>Lorem ipsum dolor sit</li>
                  <li>Amet, consectetur</li>
                  <li>Eiusmod tempor dolor</li>
                  <li>Ut enim ad minim veniam</li>
                  <li>Quis nostrud exercitation</li>
                </ul>
                <ul class="heart item">
                  <li>Lorem ipsum dolor sit</li>
                  <li>Amet, consectetur</li>
                  <li>Eiusmod tempor dolor</li>
                  <li>Ut enim ad minim veniam</li>
                  <li>Quis nostrud exercitation</li>
                </ul>
              </div>
            </article>
            <article class="post post-anim pad70-top">
              <h2>Our Job Skills</h2>
              <ul class="diagram_list" id="ccc3">
                <li data-color="#c0c192">
                  <span>JavaScript</span>
                  <span></span>
                </li>
                <li data-color="#c44b12">
                  <span>CSS3</span>
                  <span></span>
                </li>
                <li data-color="#669c75">
                  <span>HTML5</span>
                  <span></span>
                </li>
                <li data-color="#3d9ba9">
                  <span>PHP</span>
                  <span></span>
                </li>
              </ul>
              <div class="diagram_skills resp">
                <div class="title">skills</div>
                <div id="sk_1" class="sc_skills">
                  <canvas
                    id="canvas_sk_1"
                    height="520"
                    width="520"
                    data-percent="25"
                    data-color="#c0c192"
                  ></canvas>
                </div>
                <div id="sk_2" class="sc_skills">
                  <canvas
                    id="canvas_sk_2"
                    height="460"
                    width="460"
                    data-percent="50"
                    data-color="#c44b12"
                  ></canvas>
                </div>
                <div id="sk_3" class="sc_skills">
                  <canvas
                    id="canvas_sk_3"
                    height="400"
                    width="400"
                    data-percent="75"
                    data-color="#669c75"
                  ></canvas>
                </div>
                <div id="sk_4" class="sc_skills">
                  <canvas
                    id="canvas_sk_4"
                    height="340"
                    width="340"
                    data-percent="80"
                    data-color="#3d9ba9"
                  ></canvas>
                </div>
              </div>
            </article>
          </section>
          <section class="secondary marg90-top">
            <aside class="widget pad90-bot">
              <div class="title">categories</div>
              <ul>
                <li>
                  <a href="">
                    Most Popular <span>(42)</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    Web <span>(12)</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    Design <span>(22)</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    Photography <span>(16)</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    Inspiration <span>(38)</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    Video <span>(10)</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    Audio <span>(5)</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    Images <span>(34)</span>
                  </a>
                </li>
              </ul>
            </aside>
            <aside class="widget pad90-bot">
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
            </aside>
            <aside class="widget pad90-bot">
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
            </aside>
            <aside class="widget pad90-bot">
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
            </aside>
            <aside class="widget pad90-bot">
              <div class="title">archives</div>
              <ul>
                <li>
                  <a href="">May 2013</a>
                </li>
                <li>
                  <a href="">June 2013</a>
                </li>
                <li>
                  <a href="">August 2013</a>
                </li>
                <li>
                  <a href="">October 2013</a>
                </li>
                <li>
                  <a href="">November 2013</a>
                </li>
                <li>
                  <a href="">December 2013</a>
                </li>
                <li>
                  <a href="">January 2014</a>
                </li>
                <li>
                  <a href="">February 2014</a>
                </li>
              </ul>
            </aside>
            <aside class="widget calendar pad90-bot">
              <div class="calendar_title">
                <a href="" class="prev_month" title="January">
                  <span class="icon-up-open"></span>
                </a>
                <div class="title">February 2014</div>
                <a href="" class="next_month" title="March">
                  <span class="icon-up-open"></span>
                </a>
              </div>
              <table>
                <thead>
                  <tr>
                    <th title="Monday">Mon</th>
                    <th title="Tuesday">Tue</th>
                    <th title="Wednesday">Wed</th>
                    <th title="Thursday">Thu</th>
                    <th title="Friday">Fri</th>
                    <th title="Saturday">Sat</th>
                    <th title="Sunday">Sun</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="emp">28</td>
                    <td class="emp">29</td>
                    <td class="emp">30</td>
                    <td class="emp">31</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>5</td>
                    <td class="post" title="post">
                      <a href="#">6</a>
                    </td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td id="today" title="today">
                      16
                    </td>
                    <td>17</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td class="post" title="post">
                      <a href="#">21</a>
                    </td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                  </tr>
                  <tr>
                    <td class="post" title="post">
                      <a href="#">25</a>
                    </td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td class="emp">1</td>
                    <td class="emp">2</td>
                    <td class="emp">3</td>
                  </tr>
                </tbody>
              </table>
            </aside>
            <aside class="widget pad90-bot">
              <div class="title">FLICKR PHOTOS</div>
              <div class="flickr">
                <div>
                  <img src="images/blog/250x250.jpg" alt="" />
                </div>
                <div>
                  <img src="images/blog/250x250.jpg" alt="" />
                </div>
                <div>
                  <img src="images/blog/250x250.jpg" alt="" />
                </div>
                <div>
                  <img src="images/blog/250x250.jpg" alt="" />
                </div>
                <div>
                  <img src="images/blog/250x250.jpg" alt="" />
                </div>
                <div>
                  <img src="images/blog/250x250.jpg" alt="" />
                </div>
              </div>
            </aside>
            <aside class="widget pad90-bot">
              <div class="title">follow us</div>
              <div class="content">
                Aliquam elementum dolor est cursus quam ultrices luctus nibh
                dolor at enim.
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
            </aside>
          </section>
        </section>
        <footer class="widget_footer cyan">
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
              <a href="">
                <span class="icon-facebook"></span>
              </a>
              <a href="">
                <span class="icon-twitter"></span>
              </a>
              <a href="">
                <span class="icon-pinterest"></span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
