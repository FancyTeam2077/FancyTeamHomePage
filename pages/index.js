import Head from 'next/head'
// import Header from '../components/homepage/Header'
// import Content from '../components/homepage/Content'
// import Footer from '../components/homepage/Footer'
import ReactFullpage from '@fullpage/react-fullpage'



const Home = () => (
  <div className="container">
    <Head>
      <title>fancy everyday</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>



    {/* <Header/>
    <Content></Content>
    <Footer>Footer</Footer> */}

    <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000} /* Options here */

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section bg1">
                <div className="title1">
                  <div className="big">
                    fancy 团队
                  </div> 
                  <div className="sub1">
                    在这里轻松学习前端
                  </div> 
                  <div className="subButtonBox">
                    <div className="button"  onClick={
                      () => fullpageApi.moveSectionDown()
                    }>
                      加入我们
                    </div>
                    <div className="button dark" onClick={
                      () => fullpageApi.moveSectionDown()
                    }>
                      详情简介
                    </div>
                  </div> 
                </div>
              </div>
              <div className="section bg2">
                <div className="title2 middle">
                  <p>有的人自学JS、HTML、CSS，小有成就但心里总觉得空虚；</p>
                  <p>有的人上前端培训班，基础平平但心里总觉得寂寞；</p>
                  <p>有的人混迹在各大前端论坛，寻寻觅觅；</p>

                  <p>但心里总觉得没有方向感。</p>

                  <p>你需要一个引路人，需要一个心灵的导师。别慌！这里是字节前端学院。</p>

                  <p>
                  字节前端学院由Fancy社团和字节跳动合办，面向在校大学生，为培养最优秀最有潜力的前端人才举办的前端技术系列课程。
                  </p>
                </div>
              </div>
              <div className="section bg3">
                <div className="">
                  <div className="title3 big">
                    课程简介
                  </div>
                  <div className="box2">
                    <div className="card">
                      <div className="itemImg1">
                      </div>
                      <div className="text">
                        从零开始，66天，带你一起体验前端之美。零基础班帮你建立学习的习惯与方法。
                      </div>
                    </div> 
                    <div className="card">
                      <div className="itemImg2">
                      </div>
                      <div className="text">
                      基于自研的MVVM框架-XXX，由十多位同学通力打造，由浅入深，帮助你掌握目前主流的前端开发模式。
                      </div>
                    </div> 
                    <div className="card">
                      <div className="itemImg3">
                      </div>
                      <div className="text">
                      你是否知道我们可以利用纯 CSS 制作一些很酷的动画效果？设计师学院，作者是任职于百度 Echarts 团队的前端工程师兼设计师，历经两个月，从设计到实现，一步步从零开始带你了解学习 CSS 前端动效。无论是复杂的动效细节还是最新的解决方案，在这里都能学习。
                      </div>
                    </div> 
                  </div>

                </div>
              </div>
              <div className="section bg4">
                <div className="title1">
                  <div className="big">
                    来吧！
                  </div> 
 
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />

    <style jsx>{`

      .text{
        padding: 20px;
        background-color: #E2E2E2;
        height: 200px;
        width:300px;
      }
      .itemImg1{
        background: url(/img/0jichus.jpg) center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 200px;
        width:300px;
      }
      .itemImg2{
        background: url(/img/ife_mvvm.jpg) center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 200px;
        width:300px;
      }
      .itemImg3{
        background: url(/img/ife_css.jpg) center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 200px;
        width:300px;
      }
      .card{
        margin-bottom: 2.375rem;
        background: #fff;
        box-shadow: 0 1px 4px 1px rgba(0,0,0,.08);
        border-radius: 0;
        display: inline-block;
        flex-basis:auto;
      }
      .bg1{
          background: #ff5f45 center center no-repeat;
        }

      .bg2{
          background: #0798ec center center no-repeat;
        }

      .bg3{
          background: #fc6c7c center center no-repeat;
        }

      .bg4{
          background: #fec401 center center no-repeat;
        }

      .box2{
        display: flex;
        justify-content:center;
        align-items: center;
      }
      .title1{
        color: #FFFFFF;
        display: inline-flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        position:relative;
        top:-10%;
        left:50%;
        transform: translate(-50%,0%);
        z-index:1;
      }

      .title2{
        color: #FFFFFF;
        display: inline-flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        position:relative;
        top:0%;
        left:50%;
        transform: translate(-50%,0%);
        z-index:1;

      }

      .title3{
        color: #FFFFFF;
        display: inline-flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        position:relative;
        top:0%;
        left:10%;
        transform: translate(-50%,0%);
        z-index:1;

      }
      .title2.middle{
        font-size: 26px;
      }

      .title1 .big{
        font-size: 100px;
        font-weight: bold;
      }

      .title3.big{
        font-size: 60px;
        font-weight: bold;
      }

      .title1 .sub1{
        color: rgba(255,255,255,.7);
        font-size: 30px;
        font-weight: 100;
        margin: -10px 30px 10px;
      }

      .subButtonBox{
        display: inline-flex;
        justify-content:center;
        align-items: center;
        z-index:1;
      }
      .subButtonBox .button{
        padding: .93em 1.87em;
        background: #fff;
        border-radius: 5px;
        display: block;
        color: #ff5f45;
        margin: 10px;
        cursor:pointer;
      }
      .subButtonBox .dark{
        background: #004f69;
        color: #fff;
      }
      .container {
        min-height: 100vh;
        padding: 0 0.5rem:
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }

    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
      .ant-tabs-tab {
        font-size: 16px !important;
        line-height: 1.2 !important;
        padding: 25px 45px 25px 45px !important;
      }
    `}</style>
  </div>
)

export default Home
