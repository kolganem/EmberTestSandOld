import Route from '@ember/routing/route';
import $ from 'jquery';

const GetBookListURL = "https://teststand.t-mobis.ru/Books";

export default class BooksRoute extends Route {
  model() {
    return $.getJSON(GetBookListURL)
      .then((jsonResponse) => {
        return JSON.parse(jsonResponse);
      });
  }
}
