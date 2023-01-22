import { useRouter } from 'next/router';
import React from 'react';
import PieChart from '../../../components/PieChart';
import classes from '../../../styles/piechart.module.css';
import Image from 'next/image'
import image1 from './../../../public/p1.jpg'
import image2 from './../../../public/p2.jpg'
import image3 from './../../../public/p3.jpg'
import image4 from './../../../public/p4.jpg'
import image5 from './../../../public/p5.jpg'
import Carousel from 'react-bootstrap/Carousel'

function piechart() {
  const router = useRouter();
  const { q } = router.query;

  const data1 = JSON.parse(q);

  const userData = {
    labels: Object.keys(data1),
    datasets: [
      {
        label: 'Expense',
        data: Object.values(data1),
        // backgroundColor: ['green'],
      },
    ],
  };
  console.log(userData);
  

  data1.Housing *= 0.2;
  data1.Health *= 0.1;
  data1.Entertainment *= 0.05;
  data1.Savings *= 0.05;
  data1.Miscellaneous *= 0.15;

  const standardData = {
    labels: Object.keys(data1),
    datasets: [
      {
        label: 'Expense',
        data: Object.values(data1),
        // backgroundColor: ['green'],
      },
    ],
  };

  console.log(standardData);
  return (
    <div>
        
        {/*<div className="container">
        <h2>Next Steps:</h2>  
        <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
            <li data-target="#myCarousel" data-slide-to="5"></li>
            </ol>
            <div className="300-px-wide">
            <div className="carousel-inner">
            <div className="item active">
                <Image src={image2} alt="RRSP" width="100%" height="100%" />
                <div className="carousel-caption">
                <p style={{color:"black"}}>An RRSP (registered retirement savings plan) is a specific type of savings account that aims to provide Canadians with retirement savings. There are several benefits in addition to accumulating savings, such as tax advantages. One tax advantage is that when you add money to your RRSP, the contributions are exempt from being taxed in the year the contributions are made. In addition, you will likely pay a lower tax rate when you take the withdrawal amount out of your account. For more information, visit <a href="https://www.sunlife.ca/en/investments/rrsp/">Sun Life</a>.</p>
                </div>
            </div>

            <div className="item">
                <Image src={image1} alt="TFSA" width="100%" height="100%" />
                <div className="carousel-caption">
                <p style={{color:"black"}}>The purpose of TFSA (tax-free savings accounts) is to help Canadians save money. It is a registered investment account, meaning that the government has given it tax-sheltered status. Canadian residents who are 18 and older and hold a valid SIN (Social Insurance Number) are eligible for a TFSA. For more information on TFSAs, please visit <a href="https://www.sunlife.ca/en/investments/tfsa/">Sun Life</a>.</p>
                </div>
            </div>
            
            <div className="item">
                <Image src={image3} alt="Investing" width="100%" height="100%" />
                <div className="carousel-caption">
                <p style={{color:"black"}}>An investment is an asset or something that can earn you money and whose value fluctuates. This fluctuation can occur for several reasons, including supply and demand, politics, and the expectations of other investors. Investments are not guaranteed assets and may be a risky financial move. Furthermore, if you choose to participate, make informed financial decisions and seek financial assistance when necessary. To talk to an advisor and learn more about different types of investments, visit <a href="https://www.sunlife.ca/en/investments/">Sun Life</a> for more information.</p>
                </div>
            </div>
            <div className="item">
                <Image src={image4} alt="Loans" width="100%" height="100%" />
                <div className="carousel-caption">
                <p style={{color:"black"}}>To understand what a loan is, you must understand what debt is. Debt is simply money that the borrower owes. Debts are owed to the lender, such as, a financial institution, the government, individuals, or other entities. The borrower may be allowed an advance, is a specified amount of money. By accepting an advance the borrower must agree to the lender's terms, that may include additional charges, interest, and a repayment schedule, to name a few.</p>
                </div>
            </div>
            <div className="item">
                <Image src={image5} alt="Budgeting" width="100%" height="100%" />
                <div className="carousel-caption">
                <p style={{color:"black"}}>It's always good to have a plan. This is why budgeting is an essential part of maintaining and growing money. A common budgeting practice is the 50-20-30 rule which, true to its name, denotes 50% of one's income, after-tax, to necessities, 20% to savings, and 30% to personal desires. The 50-20-30 rule is a popular guideline, as it allows for a healthy balance of saving and spending. There are various budgeting tools to guide you, specifically, Sun Life has a quick and easy <a href="https://www.sunlife.ca/en/tools-and-resources/tools-and-calculators/budget-calculator/">budget calculator</a>.</p>
                </div>
            </div>
            </div>
            
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" ></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
  </div>
        
        
  </div>*/}

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      <div className={classes.row}>
        <PieChart chartData={userData} info='Your Expense' />
        <PieChart chartData={standardData} info='Standard' />
      </div>
    </div>
  );
}

export default piechart;