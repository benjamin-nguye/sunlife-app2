import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image'
import image1 from './../../../public/tfsa.jpg'
import image2 from './../../../public/rrsp.jpg'
import image3 from './../../../public/investing.jpg'
import image4 from './../../../public/loans.jpg'
import image5 from './../../../public/budget.jpg'
import Carousel from 'react-bootstrap/Carousel'
import styles from '../../../styles/result.module.css'


function nodata() {

  return (
    <div id={styles.resultbody}>


      <div id={styles.carouseltitle}>How you should plan your finances..</div>

      <div id={styles.carousels}>
            <Carousel variant="dark">
            <Carousel.Item>
            <Image src={image2} alt="RRSP" width="700%" height="500%" />
              <Carousel.Caption>
                <h3>RRSP</h3>
                <p className={styles.carouselcaption}>An RRSP (registered retirement savings plan) is a specific type of savings account that aims to provide Canadians with retirement savings. There are several benefits in addition to accumulating savings, such as tax advantages. One tax advantage is that when you add money to your RRSP, the contributions are exempt from being taxed in the year the contributions are made. In addition, you will likely pay a lower tax rate when you take the withdrawal amount out of your account. For more information, visit <a href="https://www.sunlife.ca/en/investments/rrsp/">Sun Life</a>.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <Image src={image1} alt="TFSA" width="700%" height="500%" />
              <Carousel.Caption>
                <h3>TFSA</h3>
                <p className={styles.carouselcaption}>The purpose of TFSA (tax-free savings account) is to help Canadians save money. It is a registered investment account, meaning that the government has given it tax-sheltered status. Canadian residents who are 18 and older and hold a valid SIN (Social Insurance Number) are eligible for a TFSA. For more information on TFSAs, please visit <a href="https://www.sunlife.ca/en/investments/tfsa/">Sun Life</a>.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <Image src={image3} alt="Investing" width="700%" height="500%" />
              <Carousel.Caption>
                <h3>Investing</h3>
                <p className={styles.carouselcaption}>An investment is an asset or something that can earn you money and whose value fluctuates. This fluctuation can occur for several reasons, including supply and demand, politics, and the expectations of other investors. Investments are not guaranteed assets and may be a risky financial move. Furthermore, if you choose to participate, make informed financial decisions and seek financial assistance when necessary. To talk to an advisor and learn more about different types of investments, visit <a href="https://www.sunlife.ca/en/investments/">Sun Life</a> for more information.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <Image src={image4} alt="Loans" width="700%" height="500%" />
              <Carousel.Caption>
                <h3>Loans</h3>
                <p className={styles.carouselcaption}>To understand what a loan is, you must understand what debt is. Debt is simply money that the borrower owes. Debts are owed to the lender, such as, a financial institution, the government, individuals, or other entities. The borrower may be allowed an advance, is a specified amount of money. By accepting an advance the borrower must agree to the lender's terms, that may include additional charges, interest, and a repayment schedule, to name a few.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <Image src={image5} alt="Budgeting" width="700%" height="500%" />
              <Carousel.Caption>
                <h3>Budgeting</h3>
                <p className={styles.carouselcaption}>It's always good to have a plan. This is why budgeting is an essential part of maintaining and growing money. A common budgeting practice is the 50-20-30 rule which, true to its name, denotes 50% of one's income, after-tax, to necessities, 20% to savings, and 30% to personal desires. The 50-20-30 rule is a popular guideline, as it allows for a healthy balance of saving and spending. There are various budgeting tools to guide you, specifically, Sun Life has a quick and easy <a href="https://www.sunlife.ca/en/tools-and-resources/tools-and-calculators/budget-calculator/">budget calculator</a>.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </div>
      

    </div>
  );
}

export default nodata;