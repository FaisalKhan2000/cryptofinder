import React from "react";

import { Container, Header } from "semantic-ui-react";
import { getArticles } from "../config/cryptonewsApi";
import ArticleList from "../components/article";
import SearchBar from "../components/searchBar";

class News extends React.Component {
  state = {
    articles: [],
    searchTopic: "",
    totalResults: "",
    loading: false,
    apiError: "",
  };

  searchForTopic = async (topic) => {
    try {
      this.setState({ loading: true });
      const response = await getArticles(topic);
      this.setState({
        articles: response.articles,
        searchTopic: topic,
        totalResults: response.totalResults,
      });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
    this.setState({ loading: false });
  };

  render() {
    const { articles, apiError, loading, searchTopic, totalResults } =
      this.state;
    return (
      <Container>
        <Header
          as="h2"
          style={{ textAlign: "center", margin: 20, color: "#fff" }}
        >
          Search for a topic
        </Header>
        <SearchBar searchForTopic={this.searchForTopic} />
        <p style={{ textAlign: "center", color: "#fff" }}>
          Powered by <a href="https://newsapi.org/">NewsAPI.org</a>
        </p>
        {loading && (
          <p style={{ textAlign: "center", color: "#fff" }}>
            Searching for articles...
          </p>
        )}
        {articles.length > 0 && (
          <Header
            as="h4"
            style={{ textAlign: "center", margin: 20, color: "#fff" }}
          ></Header>
        )}
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
      </Container>
    );
  }
}

export default News;
