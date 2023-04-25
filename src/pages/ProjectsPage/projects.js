import FUDANIME from '../../assets/projects/fudanime.png';

const DATA = {
    label: "data",
    color: "#C97C5D"
};

export const projects = [
    {
        title: "Fud'anime",
        tags: [DATA],
        img: FUDANIME,
        description: "This project is an anime recommender system that provides recommendations based on a user's watching history. It includes several services such as ml_pipeline, mlflow, prefect, train, api, anime_application, and quality_checks. The project uses collaborative filtering to train the recommendation model and serves it through a FastAPI service. A React web application is used to allow users to input their user ID and view anime recommendations. Prefect is used to automate and schedule data processing and training, while mlflow tracks model performance and stores artifacts. Data quality checks are performed using the quality_checks service. The project is containerized using Docker and can be easily deployed.",
        link: "https://github.com/lucfudo/ml_portfolio"
    },
]