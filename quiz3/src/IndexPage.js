import React, {Component} from 'react';
import './css/style.css';

class IndexPage extends Component{
    render() {
      return (
        <div>
          {/* <header>
            <img src={logo} width="200px" alt="Logo" />
            <nav>
              <ul>
                <li><Link to = '/'> Home </Link> </li>
                <li><Link to = '/about'> About </Link> </li>
                <li><Link to = '/'> Editor </Link> </li>
                <li><Link to = '/'> Login </Link> </li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Route path='/about' component={ABoutPage}></Route>
            <Route path="/" component={IndexPage}/>
          </Switch> */}

          <section>
            <h1>Featured Posts</h1>
            <div id="article-list">
              <div>
                <a href={'/'}><h3>Lorem Post 1</h3></a>
                <p>
                  Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                </p>
              </div>
              <div>
                <a href={'/'}><h3>Lorem Post 2</h3></a>
                <p>
                  Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                </p>
              </div>
              <div>
                <a href={'/'}><h3>Lorem Post 3</h3></a>
                <p>
                  Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                </p>
              </div>
              <div>
                <a href={'/'}><h3>Lorem Post 4</h3></a>
                <p>
                  Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                </p>
              </div>
              <div>
                <a href={'/'}><h3>Lorem Post 5</h3></a>
                <p>
                  Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                </p>
              </div>
            </div>
          </section>
          <footer>
            <h5>copyright © 2020 by Sanbercode</h5>
          </footer>
        </div>
      );
    }
  };

  export default IndexPage