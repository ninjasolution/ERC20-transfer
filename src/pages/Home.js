import React from 'react';

export default function Home() {

    
  return <div>
            <div className="page_wrapper">

                <section className="hero_banner_section d-flex align-items-center mb-130" data-bgimg="assets/img/bg/hero-bg1.webp">
                    <div className="container">
                        <div className="hero_banner_inner">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="hero_content">
                                        <h1 className="wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">Best Game <br/>
                                            Playing Today.</h1>
                                        <p className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1.2s">Simply text of the printing and typesetting industry.</p>
                                        {/* <a className="btn btn-link wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1.3s" href="#all-games">Play Now <img width="20" height="20" src="../assets/img/icon/arrrow-icon.webp" alt=""/> </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="hero_position_img">
                        <img width="926" height="772" src="../assets/img/bg/hero-position-img.webp" alt=""/>
                    </div>
                </section>
                
                <section className="popular_gaming_section mb-140" id="all-games">
                    <div className="container">
                        <div className="section_title text-center wow fadeInUp mb-60" data-wow-delay="0.1s" data-wow-duration="1.1s">
                            <h2>Popular GAME</h2>
                            <p>When unknown printer took type and scrambled it to make <br/>
                                type specimen book centuries,</p>
                        </div>
                        <div className="popular_gaming_inner wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1.2s">
                            <div className="row">
                               
                                
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>
        </div>;
}
