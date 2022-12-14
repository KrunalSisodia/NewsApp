import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Carmen Reinicke",
      title:
        "Stock futures rise as investors await Wednesday's Federal Reserve rate decision - CNBC",
      description:
        "Here's how stocks are trading ahead of the December Federal Open Market Committee meeting.",
      url: "https://www.cnbc.com/2022/12/13/stock-market-futures-open-to-close-news.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107162939-1670445653112-nyse.jpg?v=1670972498&w=1920&h=1080",
      publishedAt: "2022-12-14T05:15:00Z",
      content:
        "Stock futures rose Wednesday morning as investors await the Federal Reserve's latest interest rate hike decision in its effort to crush inflation, set to be delivered on Wednesday.\r\nDow Jones Industr… [+1541 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Sam Bankman-Fried Faces Fraud Charges, Lawsuits Tied to FTX Collapse | WSJ - Wall Street Journal",
      description:
        "In less than 24 hours, FTX founder Sam Bankman-Fried was arrested, charged with eight counts of fraud, and sued by both the Securities and Exchange Commissio...",
      url: "https://www.youtube.com/watch?v=oALv48BicV0",
      urlToImage: "https://i.ytimg.com/vi/oALv48BicV0/maxresdefault.jpg",
      publishedAt: "2022-12-14T03:51:30Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Bradford Betz",
      title:
        "Musk set to auction off Twitter furniture, other items from HQ as company is reportedly behind on rent - Fox Business",
      description:
        "In a bid to slash costs, Elon Musk's Twitter is reportedly auctioning off items from its headquarters and has not paid rent at its San Francisco and global officers.",
      url: "https://www.foxbusiness.com/technology/musk-auction-twitter-furniture-other-items-from-hq-company-reportedly-behind-rent",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/11/0/0/TWITTER-4.jpg?ve=1&tl=1",
      publishedAt: "2022-12-14T02:22:26Z",
      content:
        "Twitter is reportedly auctioning off items from its headquarters and has not paid rent at its San Francisco and global office for several weeks in a bid to slash costs. \r\nElon Musk, who acquired the … [+1687 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Opioid settlement: North Carolina gets $1 billion - WFMY News 2",
      description:
        "The lawsuit was over how CVS and Walgreens handled controlled substance prescriptions, but both companies say the settlement is not an admission of guilt.CVS...",
      url: "https://www.youtube.com/watch?v=GOoU1Cx7djk",
      urlToImage: "https://i.ytimg.com/vi/GOoU1Cx7djk/hqdefault.jpg",
      publishedAt: "2022-12-14T01:51:19Z",
      content: null,
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=bee89f7d9cc84c62ab1e25be2f590cd7&page=1pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=bee89f7d9cc84c62ab1e25be2f590cd7&${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ page: this.state.page - 1, articles: parsedData.articles });
  };
  handleNextClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=bee89f7d9cc84c62ab1e25be2f590cd7&${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ page: this.state.page + 1, articles: parsedData.articles });
  };
  render() {
    return (
      <div className="container my-3">
        <h2>Top headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 50) : ""}
                  description={
                    element.description ? element.description.slice(0, 85) : ""
                  }
                  imgSrc={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between col-md-4 offset-4">
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            Previous
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
