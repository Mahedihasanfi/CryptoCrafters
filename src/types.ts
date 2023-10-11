
export interface NewsArticle {
    url: string;
    name: string;
    image: {
      thumbnail: {
        contentUrl: string;
      };
    };
    provider: [
      {
        name: string;
      }
    ];
    datePublished: string;
  }