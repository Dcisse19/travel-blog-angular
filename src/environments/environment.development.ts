import { ApiEnvironment, Environment } from "./environment.model";

export const environment: Environment = {
  production: false,
  api: 'http://localhost:3000',
  envName: 'dev'
};

export const apiEnvironment:ApiEnvironment = {
  url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline" ,
  key: "BFMAN2GSKLRC88MLY8JHDVV4D",
  contentType: "json"
}
