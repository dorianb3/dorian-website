// export const IntroductionToEtf = {
//     color: "#4285f4",
//     path: "truc",
//     title: "Introduction to ETF",
//     date: "2022-03-22",
//     abstract: 
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem perferendis 
//     quo aliquam laborum modi nemo ab ullam, non corrupti itaque provident ad minus similique 
//     consequatur assumenda totam sed soluta?</p>
// }

import React, { Component } from 'react';
// import Footer from '../components/Footer';
// import ToTopButton from "../components/ToTopButton";
// import TableOfContents from "../components/TableOfContents";
// import etfimg from "../components/img/etfimg.jpg";
import TableOfContents from "../components/inc/TableOfContents";

class IntroductionToEtf extends Component {
    constructor() {
        super();
        this.color = "#4285f4";

        this.path = "/introduction-to-etf";  /* "/blog"; */
        this.title = "Introduction to ETF";
        this.author = "Dorian Bonnet";
        this.date = "2021-08-07";
        this.tags = ["etf", "finance"];
        // this.img = etfimg;
        
        
        this.abstract = `Exchange-traded funds (ETFs) are a type of financial instrument whose unique advantages over mutual 
        funds have caught the eye of many an investor. If you find the tasks of analyzing and picking stocks a little daunting, 
        ETFs may be right for you.`;
    };

    render() {
        return (
            <div className='container'>
                <TableOfContents/>
                <div className="">
                    <div className="box article-header">
                        
                        <h1>{ this.title }</h1>
                        {/* <div className="author">{ this.author }</div> */}
                        <div className="date">{ this.date }</div>
                        {/* <div className="abstract">Abstract</div> */}
                        <p className="abstract">{ this.abstract }</p>
                        <div className="tags">
                            <div>Keywords:</div>
                            { this.tags.map((tag, key) => {
                                return <div className="tag" key={key}>{ tag },</div>
                            })}
                        </div>
                        
                    </div>
                    
                    
                    {/* <img src={ this.img } className="post-img" alt="" title=""/> */}

                    <div className="box body">
                        <h2 id="introduction">Introduction</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed similique, voluptate ea illum dolorem fugit, blanditiis culpa 
                            officia, dignissimos repellendus praesentium ullam cupiditate eum ex libero quaerat dolorum! Illo, nulla!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed similique, voluptate ea illum dolorem fugit, blanditiis culpa 
                            officia, dignissimos repellendus praesentium ullam cupiditate eum ex libero quaerat dolorum! Illo, nulla!</p>

                        <h2 id="what-is-an-etf">2. What Is an ETF?</h2>

                        <p>Think of an ETF as a mutual fund that trades like a stock. Just like a mutual fund, an ETF represents a basket 
                        of securities (such as stocks) that reflect an index such as the S{"&"}P 500 or the Barclays Capital U.S. Aggregate Bond Index.</p>

                        <p>An ETF, however, isn't a mutual fund; it trades just like any other company on a stock exchange. Unlike a mutual fund that 
                        has its net asset value (NAV) calculated at the end of each trading day, an ETF's price changes throughout the day, fluctuating 
                        with supply and demand. It is important to remember that while ETFs attempt to replicate the return on indexes, there is no 
                        guarantee that they will do so exactly. It is not uncommon to see a 1% or more difference between the actual index's year-end 
                        return and that of an ETF.</p>

                        <p>By owning an ETF, you get the diversification of a mutual fund plus the flexibility of a stock. Because ETFs trade like stocks, you can 
                        short sell them, buy them on margin and purchase as little as one share (if desired). Another advantage is that the expense ratios of most 
                        ETFs are lower than that of the average mutual fund. For example, the SPDR S{"&"}P 500 ETF (SPY) has a low 0.09% as an expense ratio, as of 
                        Feb. 3, 2019.1 When buying and selling ETFs, you pay your broker the same commission that you'd pay on any regular trade.</p>

                        <h2 id="different-types-of-etf">3. Different Types of ETFs</h2>
                        <p>The first ETF was the S{"&"}P 500 index fund (nicknamed "spiders" because of their SPDR ticker symbol), which began trading on the 
                        American Stock Exchange (AMEX) in 1993.2 Today – tracking a wide variety of sector-specific, asset-type-specific, country-specific and 
                        broad-market indexes – there are thousands of ETFs trading on the open market.</p>
                        <p>You can pretty much find an ETF for just about any kind of sector of the market. For example, if you were interested in getting exposure to 
                        some European stocks through the Austrian market, you might take a look at the iShares MSCI Austrian Index fund (EWO).</p>
                        <p>Some of the more popular ETFs have nicknames like cubes (QQQ) and diamonds (DIAs). Most ETFs are passively managed, meaning 
                        investors save big on management fees.</p>

                        <h2 id="nasdaq-100-index">4. Nasdaq-100 Index</h2>
                        <p>This ETF represents the Nasdaq-100 Index (QQQ), which consists of the 100 largest and most actively traded non-financial domestic 
                        and international companies on the Nasdaq. QQQ offers investors broad exposure to the tech sector. Because it curbs the risk that comes 
                        with investing in individual stocks, the QQQ is a great way to invest in the long-term prospects of the technology industry. 
                        The diversification it offers can be a huge advantage when there's volatility in the markets. If a tech company falls short of projected earnings, 
                        it will likely be hit hard..</p>

                        <h2 id="spdrs">5. SPDRs</h2>
                        <p>Usually referred to as spiders, these investment instruments bundle the benchmark S{"&"}P 500 and give you ownership in the index. Imagine the 
                        trouble and expenses involved in trying to buy all 500 stocks in the S{"&"}P 500. SPDRs allow individual investors to own the index's stocks 
                        in a cost-effective manner.</p>
                        <p>Another nice feature of SPDRs is that they divide various sectors of the S{"&"}P 500 stocks and sell them as separate ETFs – there are literally 
                        dozens of these types of ETFs. The technology select sector index, for example, contains around 70 different holdings covering products developed 
                        by companies such as defense manufacturers, telecommunications equipment, hardware, software, and semiconductors. This ETF trades under the symbol 
                        XLK on the NYSE ARCA.</p>

                        <h2 id="ishare-and-vanguard">6. iShares and Vanguard"</h2>
                        <p>iShares is BlackRock's brand of ETFs. In 2020, there were approximately 700 iShares ETFs globally with more than a trillion dollars under management.3﻿ 
                        BlackRock has put out a number of iShares that follow many of the major indexes around the world including the Nasdaq, NYSE, Dow Jones, and 
                        Standard {"&"} Poor's. All of these particular ETFs trade on the major exchanges in the U.S. just like normal stocks.</p>
                        <p>Just like iShares are BlackRock's brand of ETFs, Vanguard ETFs are Vanguard's brand of the financial instrument. Vanguard also offers 
                        hundreds of ETFs for many different areas of the market including the financial, healthcare and utility sectors.</p>

                        <h2 id="targeting-resources">7. Targeting Resources</h2>
                        <p>Funds can also provide a way to invest in natural resources such as the United States Natural Gas Fund (UNG). These investments give a replication of 
                        natural gas prices, after expenses and try to follow the prices of natural gas by buying futures contracts on natural gas in the coming months. 
                        As with all the funds, you need to keep an eye on the total expense ratio before investing.</p>

                        <h2 id="emerging-market-focus">8. Emerging Market Focus</h2>
                        <p>This investment attempts to mimic the returns seen in the BlackRock Institutional Trust's, iShares MSCI Emerging Markets Index (EEM). This ETF was 
                        created as an equity benchmark for international security performance. If you would like to gain some international exposure, specifically to 
                        emerging markets, this ETF might be for you.</p>

                        <h2 id="opposite-movers">9. Opposite Movers</h2>
                        <p>Not all ETFs are designed to move in the same direction or even in the same amount as the index they are tracking. For example, the Direxion Daily 
                        Financial Bear 3x Shares (FAZ) is a triple bear fund. It attempts to perform 300% in the opposite direction of the Russell 1000 Financial Services 
                        Index using derivatives and other types of leverage to boost performance returns of the underlying index.4﻿ This fund became popular in 2008 and 
                        2009 when the financial crisis placed downward pressure on financial stocks.</p>
                        
                        <h2 id="diamonds">10. DIAMONDs</h2>

                        <p>These ETF shares, SPDR® Dow Jones® Industrial Average ETF, tracks the Dow Jones Industrial Average. The fund is structured as a unit investment trust. 
                        The ticker symbol of the Dow Diamonds is (DIA), and it trades on the NYSE ARCA.</p>

                        <h2 id="the-bottom-line">11. The Bottom Line</h2>
                        <p>A great reason to consider ETFs is that they simplify index and sector investing in a way that is easy to understand. If you feel a turnaround is around 
                        the corner, go long. If, however, you think ominous clouds will be over the market for some time, you have the option of going short.</p>

                        <p>The combination of the instant diversification, low cost and the flexibility that ETFs offer, makes these instruments one of the most useful 
                        innovations and attractive pieces of financial engineering to date. There are a number of brokers who provide ETF investments.</p>

                        <h2 id="invest-in-your-favorite-stock">12. Invest in your favourite stocks without commission</h2>
                        <p>Investing in the world’s leading stocks is now more affordable than ever. Whether you are investing in tech titans, healthcare innovators or your 
                        favourite retail brands, get exactly what you’re paying for with commission-free stock investing on eToro. Your capital is at risk. Other fees apply. 
                        For more information, visit eToro.</p>

                        <h2 id="conclusion">Conclusion</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed similique, voluptate ea illum dolorem fugit, blanditiis culpa 
                            officia, dignissimos repellendus praesentium ullam cupiditate eum ex libero quaerat dolorum! Illo, nulla!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed similique, voluptate ea illum dolorem fugit, blanditiis culpa 
                            officia, dignissimos repellendus praesentium ullam cupiditate eum ex libero quaerat dolorum! Illo, nulla!</p>

                        <h2 id="references">References</h2>
                        <p>ref1</p>
                        <p>ref1</p>
                        <p>ref1</p>

                    </div>
                </div>
                {/* <Footer/>
                <ToTopButton/> */}
            </div>
        )
    }
}

export default IntroductionToEtf







